import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Entry from "./components/Entry";
import Missing from "./components/Missing";

import { DataProvider } from "./context/DataContext";
import Politics from "./components/Politics";
import Entertainment from "./components/Entertainment";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import LifeNav from "./components/LifeNav";

const App = () => {
  return (
    <DataProvider className="App">
      <Router>
        <Header />
        <hr />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/news/politics" exact>
            <Politics />
          </Route>
          <Route path="/entertainment" exact>
            <Entertainment />
          </Route>
          <Route path="/life">
            <LifeNav />
          </Route>
          <Route path="/personal" exact>
            <Personal />
          </Route>
          <Route path="/entry/:id">
            <Entry />
          </Route>
          <Route path="*">
            <Missing />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </DataProvider>
  );
};
//
export default App;
