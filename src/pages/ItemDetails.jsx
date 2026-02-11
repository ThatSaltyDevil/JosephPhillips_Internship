import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";
import ItemsLoadingState from "../components/ItemsLoadingState";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  
  async function fetchNftData() {
    await axios
      .get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`,
      )
      .then((response) => {
        setData(response.data);
        console.log(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching author data:", error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNftData() 
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            {!data ? (
              <ItemsLoadingState />
            ) : (
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={data.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{data.title}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {data.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {data.likes}
                      </div>
                    </div>
                    <p>{data.description}</p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                              <img
                                className="lazy"
                                src={data.ownerImage}
                                alt=""
                              />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author">{data.ownerName}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                              <img
                                className="lazy"
                                src={data.creatorImage}
                                alt=""
                              />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author">{data.creatorName}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6></h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{data.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
