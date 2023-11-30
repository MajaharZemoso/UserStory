import React from "react";
import TextTypography from "../../molecules/TextTypography";
import CustomTypography from "../../atoms/CustomeTypography";
import CustomButton from "../../atoms/CustomeButton";
import {
  INVALID_OTP,
  LOGIN,
  OTP_FORM_PLACEHOLDER,
  OTP_LABEL,
  SUBMIT,
} from "../../../utils/constants/constants";
import { OTPHooks } from "./hooks";
import styled from "@emotion/styled";
import theme from "../../../utils/themes";

const MainContainer = styled("div")({
  width: "30vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(4),
});

const StyledButton = styled(CustomButton)({
  width: "30vw",
});

const OTPForm = () => {
  const { OTP, OTPError, handleOTPChange, isDisable, handleOTP } = OTPHooks();

  return (
    <MainContainer>
      <CustomTypography children={LOGIN} variant="h4" />
      <TextTypography
        label={OTP_LABEL}
        value={OTP}
        type="text"
        placeholder={OTP_FORM_PLACEHOLDER}
        error={OTPError}
        helperText={OTPError ? INVALID_OTP : ""}
        handleChange={(event) => handleOTPChange(event.target.value)}
      />
      <StyledButton
        children={SUBMIT}
        variant="contained"
        disabled={isDisable}
        onClick={handleOTP}
      />
    </MainContainer>
  );
};

export default OTPForm;
