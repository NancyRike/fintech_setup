import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AuthLayout, DashboardLayout } from "./layouts";

import {
  Components,
  CreateAccount,
  EmailSent,
  ForgotPassword,
  ResetPassword,
  SignIn,
  AddPhoneNumber,
  EmailVerificationSuccess,
  PhoneVerificationSuccess,
  VerifyEmail,
  VerifyPhoneNumber,
  Dashboard,
} from "./pages";

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

const DashboardRoute = ({Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render = {(props)=>(
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  )
}

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
          path={"/"}
          exact={true}
          Component={() => <CreateAccount />}
        />
        <AuthRoute
          path={"/email-sent"}
          exact={true}
          Component={() => <EmailSent />}
        />
        <AuthRoute
          authBgA={true}
          path={"/sign-in"}
          exact={true}
          Component={() => <SignIn />}
        />
        <AuthRoute
          path={"/forgot-password"}
          exact={true}
          Component={() => <ForgotPassword />}
        />
        <AuthRoute
          path={"/reset-password"}
          exact={true}
          Component={() => <ResetPassword />}
        />
        <AuthRoute
          exact={true}
          path={"/verify-email"}
          Component={() => <VerifyEmail />}
        />
        <AuthRoute
          path={"/verify-phonenumber"}
          exact={true}
          Component={() => <VerifyPhoneNumber />}
        />
        <AuthRoute
          path={"/email-verification-success"}
          exact={true}
          Component={() => <EmailVerificationSuccess />}
        />
        <AuthRoute
          path={"/add-phonenumber"}
          exact={true}
          Component={() => <AddPhoneNumber />}
        />
        <AuthRoute
          path={"/phone-verification-success"}
          exact={true}
          Component={() => <PhoneVerificationSuccess />}
        />
       <DashboardRoute
       path={'/dashboard'}
       exact={true}
       Component={()=> <Dashboard/>}
       />
        <Route exact path="/components" render={() => <Components />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
