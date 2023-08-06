import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "rgb(250, 38, 218)",
		},
	},
});

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
	},
});

root.render(
	<ThemeProvider theme={theme}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</ThemeProvider>
);
