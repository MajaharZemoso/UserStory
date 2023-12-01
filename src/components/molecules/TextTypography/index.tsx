import React from "react";
import CustomTextField from "../../atoms/CustomeTextField";
import CustomTypography from "../../atoms/CustomeTypography";
import styled from "@emotion/styled";
import theme from "../../../utils/themes";
import { InputProps } from "@mui/material";

export interface TextTypographyProps {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  error?: boolean;
  helperText: string;
  inputProps?: InputProps;
  handleChange: (event: any) => void;
}

const MainContainer = styled("div")({
  gap: theme.spacing(4),
  width: "100%",
});

const TextTypography = ({
  label,
  value,
  type,
  placeholder,
  error,
  inputProps,
  helperText,
  handleChange,
}: TextTypographyProps) => {
  return (
    <MainContainer>
      <CustomTypography children={label} />
      <CustomTextField
        value={value}
        type={type}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        onChange={handleChange}
        InputProps={inputProps}
        fullWidth
      />
    </MainContainer>
  );
};

export default TextTypography;
