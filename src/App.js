import Practice from "./components/a8/Practice";
import Build from "./components/a9/Build";
import {HashRouter, Link, Route} from "react-router-dom";
import tweets from "./components/a8/Build/reducers/tweets";
import who from "./components/a8/Build/reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ExploreScreen from "./components/a8/Build/ExploreScreen";
import A9 from "./components/a9";

const reducer = combineReducers({tweets: tweets, who});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
        <HashRouter>
          <div className="container">
            <Link to="/a8/practice">A8</Link> |
            <Link to="/a9/practice">A9</Link>

            <Route path={["/a8", "/a8/practice"]} exact={true}>
              <Practice/>
            </Route>
            {/*<Route path="/a9/twitter/home" exact={true}>*/}
            {/*  <Build/>*/}
            {/*</Route>*/}
            {/*<Route path="/a8/twitter/explore" exact={true}>*/}
            {/*  <ExploreScreen/>*/}
            {/*</Route>*/}
            <Route path="/a9">
              <A9/>
            </Route>

          </div>
        </HashRouter>
      </Provider>
  );
}

export default App;
