import React from "react";
import OTPForm from "../../components/organisms/OTPForm";
import LoginTemplate from "../../components/template/LoginTemplate";

const OTPPage = () => {
  return <LoginTemplate data={<OTPForm />} />;
};

export default OTPPage;
