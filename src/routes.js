import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Contact from "views/Contact/Contact.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Kudi from "views/Kudi.js";
import Tracker from "views/Tracker/Tracker.js";
import About from "views/About/About.js";
import Wallet from "views/Wallet.js";
import Buy from "views/Buy.js";

const dashboardRoutes = [
  {
    path: "/kudi",
    name: "Buy Crypto",
    icon: "nc-icon nc-money-coins",
    component: Buy,
    layout: "/admin",
  },{
    path: "/kudi",
    name: "Stake & Earn",
    icon: "nc-icon nc-bag",
    component: Kudi,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Send",
    icon: "nc-icon nc-send",
    component: Wallet,
    layout: "/admin",
  },
  {
    path: "/tracker",
    name: "Live Coin Prices",
    icon: "nc-icon nc-chart-bar-32",
    component: Tracker,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Locations",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About Us",
    icon: "nc-icon nc-paper-2",
    component: About,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: "nc-icon nc-email-85",
    component: Contact,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons (DEV)",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  /*
  {
    path: "/typography",
    name: "Typography (Dev)",
    icon: "nc-icon nc-atom",
    component: Typography,
    layout: "/admin",
  },
  */
  /*
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  */ 
  
];

export default dashboardRoutes;
