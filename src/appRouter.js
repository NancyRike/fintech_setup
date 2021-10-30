import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { authBgA } from "./assets";
import { AuthLayout } from "./layouts";

import { Components, CreateAccount, ForgotPassword } from "./pages";

// Layout routes

const AuthRoute = ({ Component, authBgA, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthLayout authBgA={authBgA}>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <ScrollToTop />
      <Switch>
        <AuthRoute
          authBgA={true}
          path={"/create-account"}
          exact={true}
          Component={() => <CreateAccount />}
        />
        <AuthRoute
          path={"/forgot-password"}
          exact={true}
          Component={() => <ForgotPassword />}
        />
        <Route exact path="/components" render={() => <Components />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
