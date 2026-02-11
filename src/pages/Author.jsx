import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingState2 from "../components/home/LoadingState2";

const Author = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [authorPic, setAuthorPic] = useState();
  const [follow, setFollow] = useState(false);

  const { authorId } = useParams();

  async function fetchAuthorData() {
    await axios
      .get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`,
      )
      .then((response) => {
        setData(response.data);

        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching author data:", error);
      });
  }

  useEffect(() => {
    fetchAuthorData();
    if (data) {
      setAuthorPic(data.authorImage);
    } else {
      console.log("failed to pass image");
    }
  }, [isLoaded]);

const handleClick = () => {
  setFollow(prevState => !prevState);
  
}


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {data && (
          <>
            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              style={{ background: `url(${AuthorBanner}) top` }}
            ></section>

            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={data.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {" "}
                              {data.authorName}
                              <span className="profile_username">
                                {data.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {data.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          {!follow ? (
                            <>
                              <div className="profile_follower">
                                {data.followers} followers
                              </div>
                              <button
                                className="btn-main"
                                onClick={handleClick}
                              >
                                Follow
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="profile_follower">
                                {data.followers + 1} followers
                              </div>
                              <button
                                className="btn-main"
                                onClick={handleClick}
                              >
                                Unfollow
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      {!isLoaded ? (
                        <>
                          <LoadingState2 />
                          <LoadingState2 />
                        </>
                      ) : (
                        <AuthorItems
                          items={data.nftCollection}
                          authorImage={authorPic}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Author;
