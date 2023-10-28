import {
  MainPage,
  Page404,
  AboutUsPage,
  Contacnts,
  Portfolio,
  Price,
} from "../../pages/index";
import { Switch, Route, useLocation } from "react-router-dom";

import AppHeader from "../app-header/app-header";

import { Location } from "history";
import PortfolioDetailPage from "../../pages/portfolio-detail";
import AppFooter from "../app-footer/app-footer";
import Price2 from "../../pages/price-refactoring";

function App() {
  const location = useLocation<{ background: Location }>();

  const background = location.state && location.state?.background;

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        {/* <Route path="/portfolio" exact={true}>
          <Portfolio />
        </Route>
        <Route path="/price" exact={true}>
          <Price />
          <Price2 />
        </Route> */}
        <Route path="/contacnts" exact={true}>
          <Contacnts />
        </Route>
        {/* <Route path="/portfolio/:photoId" component={PortfolioDetailPage} />
        <Route path="/about" exact={true}>
          <AboutUsPage />
        </Route> */}

        <Route>
          <Page404 />
        </Route>
      </Switch>
      <AppFooter />
    </>
  );
}

export default App;
