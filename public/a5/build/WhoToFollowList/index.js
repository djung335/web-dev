import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
            <ul class="list-group g-0">
             <li class="list-group-item fw-bold">Who to follow</li>
            ${who.map(WhoToFollowListItem).join("")}
            </ul>
`);
}

export default WhoToFollowList;
