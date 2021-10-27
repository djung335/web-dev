import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (
      <>
        <div className="row">
          <div className="input-group rounded has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control rounded-pill"
                   placeholder="Search Twitter"
                   aria-label="Search"
                   aria-describedby="search-addon"/>
            <span className="input-group-text border-0 bg-black"
                  id="search-addon">
<i className="fas fa-cog" style={{color: 'blue'}}></i>
  </span>
          </div>
        </div>
        <ul className="nav mb-2 nav-tabs mt-2">

          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>

        <div className="card text-white mt-2 mb-2">
          <img className="card-img" src="../../images/spaceship.jpg"
               alt="Card"/>
          <div className="card-img-overlay d-flex align-items-end">
            <h5 className="card-title fw-bold">SpaceX's Starship</h5>
          </div>
        </div>


        <PostSummaryList/>
      </>
  );
}
export default ExploreComponent;
