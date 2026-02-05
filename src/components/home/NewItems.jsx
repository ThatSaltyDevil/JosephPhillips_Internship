import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import LoadingState from "./LoadingState";
import { render } from "@testing-library/react";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [time, setTime] = useState(0);

  async function fetchNewItems() {
    await axios
      .get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
      )
      .then((response) => {
        setNewItems(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching new items:", error);
      });
  }

  useEffect(() => {
    if (!isLoaded) {
      fetchNewItems();
    }
    
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoaded]);

  const owlOptions = {
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      800: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  let now = Date.now();

  let expiryDates = newItems.map((item) => item.expiryDate);

  let nowTimestamps = expiryDates.map((date) => new Date(date).getTime());

  let timeDiffs = nowTimestamps.map((timestamp) =>
    timestamp ? timestamp - now : 0,);

  let timerSeconds = timeDiffs.map((diff) => Math.floor((diff / 1000) % 60));
  let timerMinutes = timeDiffs.map((diff) =>
    Math.floor((diff / (1000 * 60)) % 60),
  );
  let timerHours = timeDiffs.map((diff) =>
    Math.floor((diff / (1000 * 60 * 60)) % 24),
  );

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {!isLoaded ? (
            <LoadingState />
          ) : (
            <OwlCarousel className="owl-theme" {...owlOptions}>
              {newItems.map((newItems, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link
                        to="/author"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Creator: Monica Lucas"
                      >
                        <img
                          className="lazy"
                          src={newItems.authorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    {newItems.expiryDate && (
                      <div className="de_countdown" key={index}>
                        <span className="timer__Hours">
                          {timerHours[index].toString()}h{" "}
                        </span>
                        <span className="timer__Minutes">
                          {timerMinutes[index].toString().padStart(2, "0")}
                          m{" "}
                        </span>
                        <span className="timer__Seconds">
                          {timerSeconds[index].toString().padStart(2, "0")}s
                        </span>
                      </div>
                    )}

                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button>Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <Link to="/item-details">
                        <img
                          src={newItems.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>{newItems.title}</h4>
                      </Link>
                      <div className="nft__item_price">
                        {newItems.price} ETH
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{newItems.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
