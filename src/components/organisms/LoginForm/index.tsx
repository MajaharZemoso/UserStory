import React from "react";
import TextTypography from "../../molecules/TextTypography";
import CustomTypography from "../../atoms/CustomeTypography";
import CustomButton from "../../atoms/CustomeButton";
import {
  EMAIL,
  EMAIL_PLACEHOLDER,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  LOGIN,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  SUBMIT,
} from "../../../utils/constants/constants";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../../utils/themes";
import { LoginHooks } from "./hooks";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MainContainer = styled("div")({
  width: "30vw",
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  gap: theme.spacing(4),
});

const StyledButton = styled(CustomButton)({
  width: "30vw",
});

const LoginForm = () => {
  const {
    credentials,
    errors,
    showPassword,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleClickShowPassword,
  } = LoginHooks();

  const navigate = useNavigate();

  const isDisable =
    !credentials.email ||
    !credentials.password ||
    errors.emailError ||
    errors.passwordError;

  return (
    <MainContainer>
      <CustomTypography children={LOGIN} variant="h4" />
      <TextTypography
        label={EMAIL}
        value={credentials.email}
        type="text"
        placeholder={EMAIL_PLACEHOLDER}
        error={errors.emailError}
        helperText={errors.emailError ? INVALID_EMAIL : ""}
        handleChange={(event) => handleEmailChange(event.target.value)}
      />
      <TextTypography
        label={PASSWORD}
        value={credentials.password}
        type={showPassword ? "password" : "text"}
        placeholder={PASSWORD_PLACEHOLDER}
        error={errors.passwordError}
        helperText={errors.passwordError ? INVALID_PASSWORD : ""}
        handleChange={(event) => handlePasswordChange(event.target.value)}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <StyledButton
        children={SUBMIT}
        variant="contained"
        disabled={isDisable}
        onClick={() => handleLogin(navigate)}
      />
    </MainContainer>
  );
};

export default LoginForm;
