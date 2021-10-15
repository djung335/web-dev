const PostSummaryItem = (post) => {

  return (`
  <li class="list-group-item">
          <div class="container">
            <div class="row">
              <div class="col-10">
 
                 <span class="text-muted">${post.topic}</span>
                ${post.topic ? "<br/>" : ""}
                <span class="fw-bold">${post.userName}</span>
                <span class="text-muted"> - ${post.time}</span>
                     ${post.time ? "<br/>" : ""}
                <span class="fw-bold">${post.title}</span>
                     ${post.title ? "<br/>" : ""}
              </div>
              <div class="col">
                <img class="rounded" src="${post.image}" width="48px" height="48px"></img>
              </div>
            </div>
          </div>
        </li>
  `);
}

export default PostSummaryItem;