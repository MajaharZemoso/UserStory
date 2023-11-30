import React from "react";
import styled from "@emotion/styled";

interface HomeTemplateProps {
  data: React.ReactNode;
}

const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return <MainContainer>{data}</MainContainer>;
};

export default HomeTemplate;
