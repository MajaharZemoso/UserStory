import React from "react";
import CustomTypography from "../../components/atoms/CustomeTypography";
import { HOME_PAGE } from "../../utils/constants/constants";
import HomeTemplate from "../../components/template/HomeTemplate";

const HomePage = () => {
  return (
    <HomeTemplate
      data={<CustomTypography children={HOME_PAGE} variant="h1" />}
    />
  );
};

export default HomePage;
