import React from "react";

const PostSummaryItem = ({
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
      }
    }
) => {

  return (
      <>
        <li className="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col-10">

                <span className="text-muted">{post.topic}</span>
                {post.topic ? <br/> : ""}
                <span className="fw-bold">{post.userName}</span>
                <span className="text-muted"> - {post.time}</span>
                {post.time ? <br/> : ""}
                <span className="fw-bold">{post.title}</span>
                {post.title ? <br/> : ""}
              </div>
              <div className="col">
                <img className="rounded" src={post.image} width="48px"
                     height="48px"></img>
              </div>
            </div>
          </div>
        </li>
      </>
  );
}

export default PostSummaryItem;