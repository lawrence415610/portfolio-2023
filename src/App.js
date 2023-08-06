import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import NavigationPage from "./pages/NavigationPage";
import AboutPage from "./pages/AboutPage";

import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import AnimatedCursor from "react-animated-cursor";
// let's finish this
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavigationPage />,
			children: [
				{
					index: true,
					element: <CoverPage />,
				},
				{
					path: "/portfolio",
					element: <PortfolioPage />,
				},
				{
					path: "/about",
					element: <AboutPage />,
				},
				{
					path: "/resume",
					element: <ResumePage />,
				},
			],
		},
	]);

	return (
		<>
			<AnimatedCursor  innerSize={20} outerSize={20} innerScale={2} outerScale={2.5} />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
