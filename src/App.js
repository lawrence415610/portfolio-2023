import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import NavigationPage from "./pages/NavigationPage";
import AboutPage from "./pages/AboutPage";

import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
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
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
