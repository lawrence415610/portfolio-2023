import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";


const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
	palette: {
		primary: {
			main: "rgb(250, 38, 218)",
		},
	},
});

root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
