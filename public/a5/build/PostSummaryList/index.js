import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
      <ul class="list-group g-0">
        ${posts.map(PostSummaryItem).join("")}
      </ul>
          `);
}

export default PostSummaryList;