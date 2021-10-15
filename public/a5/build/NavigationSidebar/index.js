const NavigationSidebar = () => {
  return (`
            <div class="list-group">
           <a href="twitter.html"
           class="list-group-item list-group-item-action">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="../../twitter/home.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-home"></i><span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Home</span></a>
        <a href="#"
           class="list-group-item list-group-item-action active" aria-current="true">
          <i class="fas fa-hashtag"></i><span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block"> Explore</span></a>
        <a href="../../twitter/notifications.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-bell"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Notifications</span></a>
        <a href="../../twitter/messages.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-envelope"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Messages</span></a>
        <a href="../../twitter/bookmarks.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-bookmark"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Bookmarks</span></a>
        <a href="../../twitter/lists.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-list"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Lists</span></a>
        <a href="../../twitter/profile.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-user"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Profile</span></a>
        <a href="../../twitter/more.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-ellipsis-h"></i> <span
            class="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  More</span></a>
            
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
