import React from 'react';

const NavigationSidebar = ({active = "explore"}) => {
  return (
      <>
        <div className="list-group">
          <a href="twitter.html"
             className="list-group-item list-group-item-action">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="home.html"
             className={`list-group-item list-group-item-action ${active === "home" ? "active" : ""}`}>
            <i className="fas fa-home"></i><span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Home</span></a>

          <a href="#"
             className={`list-group-item list-group-item-action ${active === "explore" ? "active" : ""}`}>
            <i className="fas fa-hashtag"></i><span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block"> Explore</span></a>

          <a href="../../twitter/notifications.html"
             className={`list-group-item list-group-item-action ${active === "notifications" ? "active" : ""}`}>
            <i className="fas fa-bell"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Notifications</span></a>

          <a href="../../twitter/messages.html"
             className={`list-group-item list-group-item-action ${active === "messages" ? "active" : ""}`}>
            <i className="fas fa-envelope"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Messages</span></a>

          <a href="../../twitter/bookmarks.html"
             className={`list-group-item list-group-item-action ${active === "bookmarks" ? "active" : ""}`}>
            <i className="fas fa-bookmark"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Bookmarks</span></a>

          <a href="../../twitter/lists.html"
             className={`list-group-item list-group-item-action ${active === "lists" ? "active" : ""}`}>
            <i className="fas fa-list"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Lists</span></a>

          <a href="../../twitter/profile.html"
             className={`list-group-item list-group-item-action ${active === "profile" ? "active" : ""}`}>
            <i className="fas fa-user"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  Profile</span></a>

          <a href="../../twitter/more.html"
             className={`list-group-item list-group-item-action ${active === "more" ? "active" : ""}`}>
            <i className="fas fa-ellipsis-h"></i> <span
              className="d-sm-none d-md-inline-block ms-1 d-md-none d-lg-inline-block d-lg-none d-xl-inline-block">  More</span></a>

        </div>
        <div className="d-grid mt-2">
          <a href="tweet.html"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </>
  )
      ;
}
export default NavigationSidebar;
