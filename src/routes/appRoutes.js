import Dashboard from "../pages/Dashboard";
import Provinsi from "../pages/Provinsi";

const appRoutes = [
  {
    name: "Provinsi",
    component: Provinsi,
    exact: true,
    path: "/provinsi/:id"
  },
  {
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    path: "/"
  }
];

export default appRoutes;
