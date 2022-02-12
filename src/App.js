import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModelProvider from "./context/providers/ModelProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <ModelProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route component={NotFound} exact />
        </Switch>
      </ModelProvider>
    </Router>
  );
}

export default App;
