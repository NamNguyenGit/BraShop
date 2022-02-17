import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModelProvider from "./context/providers/ModelProvider";
import BestProductsProvider from "./context/providers/BestProductsProvider";
import SaleProductsProvider from "./context/providers/SaleProductsProvider";
import ReviewProvider from "./context/providers/ReviewProvider";
import ColorsProvider from "./context/providers/ColorsProvider";
import AnimationProvider from "./context/providers/AnimationProvider";
import ServicesProvider from "./context/providers/ServicesProvider";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
function App() {
  return (
    <Router>
      <ModelProvider>
        <BestProductsProvider>
          <SaleProductsProvider>
            <ReviewProvider>
              <ColorsProvider>
                <ServicesProvider>
                  <AnimationProvider>
                    <Menu />
                    <HelmetProvider>
                      <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/shop" exact component={Shop} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/details/:id" exact component={Details} />
                        <Route component={NotFound} exact />
                      </Switch>
                    </HelmetProvider>
                  </AnimationProvider>
                </ServicesProvider>
              </ColorsProvider>
            </ReviewProvider>
          </SaleProductsProvider>
        </BestProductsProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
