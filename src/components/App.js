import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Header from "./Marketing/Header";
import HomePage from "./Marketing/HomePage";
import About from "./Marketing/About";
import Footer from "./Marketing/Footer";
import ProblemDashboard from "./Problem/ProblemDashboard";
import ProblemCard from "./Problem/ProblemCard";
import DetailsPage from "./Problem/DetailsPage";
import ProblemSubmissionHolder from "./Problem/ProblemSubmissionHolder";
import AdminDashboard from "./AdminDashboard";

// This is mainly used for ThemeProvider - future work can make styles not use theme
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffffff", secondary: "#55596d" },
    secondary: { main: "#14131c", secondary: "#233d6e" },
    background: { default: "#ffffff", secondary: "#f6f7fb" },
    footerText: { main: "#707486" },
    lambdaRed: { main: "#bb1333", secondary: "#750808" }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/problems" component={ProblemDashboard} />
      <Route path="/admin-problems" component={AdminDashboard} />
      <Route path="/submitaproblem" component={ProblemSubmissionHolder} />
      <Route path="/about" component={About} />
      <Route exact path="/problem-details" component={ProblemCard} />
      <Route path="/problem-details/:id" component={DetailsPage} />
      <Footer />
    </ThemeProvider>
  );
}
