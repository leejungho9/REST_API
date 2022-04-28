import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import createWord from "./component/createWord";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DayList} />
          <Route path="/day/:day" component={Day} />
          <Route path="/create_word" component={createWord} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
