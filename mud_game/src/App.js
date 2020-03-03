import React from "react";
import { Route } from "react-router-dom";
import FormikLoginForm from "./components/Authentification/loginForm/LoginForm";
import FormikRegisterForm from "./components/Authentification/registerForm/RegisterForm";

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/login" component={FormikLoginForm} />
      <Route path="/register" component={FormikRegisterForm} />
    </div>
  );
}

export default App;
