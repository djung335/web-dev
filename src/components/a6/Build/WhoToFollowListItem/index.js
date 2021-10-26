import React from "react";

const WhoToFollowListItem = ({
      who = {
        avatarIcon: '../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return (
      <>
        <li className="list-group-item g-0">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src={who.avatarIcon}
                     width="48px"
                     height="48px"/>
              </div>
              <div className="col-6">
                <span className="fw-bold">{who.userName}</span>
                <br/>
                <span>@{who.handle}</span>
              </div>
              <div className="col">
                <button className="btn btn-primary rounded-pill"
                        type="button">Follow
                </button>
              </div>
            </div>
          </div>

        </li>
      </>
  );

}

export default WhoToFollowListItem;