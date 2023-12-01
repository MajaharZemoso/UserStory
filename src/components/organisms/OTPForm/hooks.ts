import { useState } from "react";
import { OTP_REGEX } from "../../../utils/regex";
import { OTPData, PATHS } from "../../../utils/constants/constants";
import { useNavigate } from "react-router-dom";

export const OTPHooks = () => {
  const [OTP, setOTP] = useState<string>("");
  const [OTPError, setOTPError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleOTPChange = (value: string) => {
    setOTP(value);
    setOTPError(!OTP_REGEX.test(value));
  };

  const isDisable = !OTP || OTPError;

  const handleOTP = () => {
    const result = OTPData.filter((otp) => otp.otp === OTP);
    if (result.length > 0) {
      navigate(PATHS[2]);
    } else {
      window.alert("Wrong OTP");
    }
  };

  return {
    OTP,
    OTPError,
    handleOTPChange,
    isDisable,
    handleOTP,
  };
};
