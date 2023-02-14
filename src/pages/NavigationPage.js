import { Outlet } from "react-router-dom";
import Navigator from "../components/Navigator";
import "./NavigationPage.scss";

const NavigationPage = () => {
  return (
    <main className="main">
      <Navigator />
      <Outlet />
    </main>
  );
};

export default NavigationPage;
