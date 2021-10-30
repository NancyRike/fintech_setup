import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AuthLayout } from "./layouts";

import { Components, ForgotPassword } from "./pages";
import AddPhoneNumber from "./pages/addPhoneNumber";
import EmailVerificationSuccess from "./pages/successfulEmailVerification";
import PhoneVerificationSuccess from "./pages/successfulPhoneVerification";
import VerifyEmail from "./pages/verifyEmail";
import VerifyPhoneNumber from "./pages/verifyPhoneNumber";

// Layout routes

const AuthRoute = ({ Component, bg, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthLayout bg={bg}>
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
          path={"/forgot-password"}
          exact={true}
          Component={() => <ForgotPassword />}
        />
        <AuthRoute
          path={"/verify-email"}
          exact={true}
          Component={() => <VerifyEmail/>}
        />
        <AuthRoute
          path={"/verify-phonenumber"}
          exact={true}
          Component={() => <VerifyPhoneNumber/>}
        />
        <AuthRoute
          path={"/email-verification-success"}
          exact={true}
          Component={() => <EmailVerificationSuccess/>}
        />
        <AuthRoute
          path={"/add-phonenumber"}
          exact={true}
          Component={() => <AddPhoneNumber/>}
        />
        <AuthRoute
          path={"/phone-verification-success"}
          exact={true}
          Component={() => <PhoneVerificationSuccess/>}
        />
        <Route exact path="/components" render={() => <Components />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
