import React from "react";
import LoginForm from "../../components/organisms/LoginForm";
import LoginTemplate from "../../components/template/LoginTemplate";

const LoginPage = () => {
  return <LoginTemplate data={<LoginForm />} />;
};

export default LoginPage;
