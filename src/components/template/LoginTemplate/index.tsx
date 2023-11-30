import React from "react";
import styled from "@emotion/styled";

interface LoginTemplateProps {
  data: React.ReactNode;
}

const MainContainer = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginTemplate = ({ data }: LoginTemplateProps) => {
  return <MainContainer>{data}</MainContainer>;
};

export default LoginTemplate;
