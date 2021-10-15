import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
            <div class="row">
<div class="input-group rounded has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control rounded-pill" placeholder="Search Twitter"
               aria-label="Search"
               aria-describedby="search-addon"/>
        <span class="input-group-text border-0 bg-black" id="search-addon">
<i class="fas fa-cog" style="color: blue"></i>
  </span>
      </div>
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
  
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
                   </ul>

      <div class="card text-white mt-2 mb-2">
        <img class="card-img" src="../../images/spaceship.jpg" alt="Card image">
        <div class="card-img-overlay d-flex align-items-end">
          <h5 class="card-title fw-bold">SpaceX's Starship</h5>
        </div>
      </div>
                      

           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
