import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

const appRoutes = [
  {
    name: "About",
    component: About,
    exact: true,
    path: "/about"
  },
  {
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    path: "/"
  }
];

export default appRoutes;
