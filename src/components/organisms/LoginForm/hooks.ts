import { useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/regex";
import { PATHS, UserData } from "../../../utils/constants/constants";

export const LoginHooks = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: false,
    passwordError: false,
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (value: string) => {
    setCredentials((prev) => ({ ...prev, email: value }));
    setErrors((prev) => ({ ...prev, emailError: !EMAIL_REGEX.test(value) }));
  };

  const handlePasswordChange = (value: string) => {
    setCredentials((prev) => ({ ...prev, password: value }));
    setErrors((prev) => ({
      ...prev,
      passwordError: !PASSWORD_REGEX.test(value),
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (navigate: Function) => {
    const result = UserData.filter(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );
    if (result.length > 0) {
      navigate(PATHS[1]);
    } else {
      window.alert("Wrong Credentials");
    }
  };

  return {
    credentials,
    errors,
    showPassword,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleClickShowPassword,
  };
};
