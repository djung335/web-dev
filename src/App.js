import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";
import tweets from "../src/components/a7/Build/reducers/tweets";
import who from "../src/components/a7/Build/reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ExploreScreen from "./components/a7/Build/ExploreScreen";

const reducer = combineReducers({tweets: tweets, who});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>

          <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a7/twitter/home" exact={true}>
            <Build/>
          </Route>
          <Route path="/a7/twitter/explore" exact={true}>
            <ExploreScreen/>
          </Route>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
