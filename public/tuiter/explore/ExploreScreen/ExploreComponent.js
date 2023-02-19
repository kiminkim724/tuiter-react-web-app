import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 mb-1">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-icon"></span>
                    <input class="form-control rounded-pill w-100" placeholder="Search Twitter" />
                </div>
                </div>
                <div class="col-1">
                    <i class="fas fa-cog text-primary fa-2x"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
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
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
            <div class="position-relative">
                <img class="w-100" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
                <h2 class="position-absolute bottom-0 wd-left-10 text-white">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
