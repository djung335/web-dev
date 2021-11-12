import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import tweets from "../src/components/a8/Build/reducers/tweets";
import who from "../src/components/a8/Build/reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ExploreScreen from "./components/a8/Build/ExploreScreen";

const reducer = combineReducers({tweets: tweets, who});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
        <HashRouter>
          <div className="container">
            <Route path="/a6/hello" exact={true}>
              <HelloWorld/>
            </Route>

            <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
              <Practice/>
            </Route>
            <Route path="/a8/twitter/home" exact={true}>
              <Build/>
            </Route>
            <Route path="/a8/twitter/explore" exact={true}>
              <ExploreScreen/>
            </Route>
          </div>
        </HashRouter>
      </Provider>
  );
}

export default App;
