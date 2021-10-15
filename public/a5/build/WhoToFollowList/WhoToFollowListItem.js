const WhoToFollowListItem = (listItem) => {
  return (`
  <li class="list-group-item g-0">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <img class="rounded-circle" src=${listItem.avatarIcon} width="48px"
               height="48px">
        </div>
        <div class="col-6">
          <span class="fw-bold">${listItem.userName}</span>
        </br>
        <span>@${listItem.handle}</span>
      </div>
      <div class="col">
        <button class="btn btn-primary rounded-pill"
                type="button">Follow
        </button>
      </div>
    </div>
  </div>
</li>`);

}

export default WhoToFollowListItem;