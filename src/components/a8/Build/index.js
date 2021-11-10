import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";

const Build = () => {
  return (
      <div>
        <Route path={["/", "/a8/twitter/home"]}
               exact={true} component={HomeScreen}/>
        <Route path="/a8/twitter/explore"
               exact={true} component={ExploreScreen}/>
      </div>
  );
};

export default Build;