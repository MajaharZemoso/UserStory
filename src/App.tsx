import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";
import HomePage from "./pages/HomePage";
import { PATHS } from "./utils/constants/constants";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS[0]} element={<LoginPage />} />
          <Route path={PATHS[1]} element={<OTPPage />} />
          <Route path={PATHS[2]} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
