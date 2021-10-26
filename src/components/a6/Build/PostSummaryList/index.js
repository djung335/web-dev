import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "../PostSummaryItem/index.js";

const PostSummaryList = () => {
  return (
      <ul className="list-group g-0">
        {posts.map(post => {
          return (
              <PostSummaryItem post={post}/>);
        })}
      </ul>
  );
};

export default PostSummaryList;