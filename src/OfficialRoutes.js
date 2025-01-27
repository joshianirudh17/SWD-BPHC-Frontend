/*

=========================================================
* Official Routes
=========================================================

*/
// @material-ui/icons

import SearchIcon from "@material-ui/icons/Search";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import BookIcon from "@material-ui/icons/Book";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BlockIcon from "@material-ui/icons/Block";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import HowToRegIcon from "@material-ui/icons/HowToReg";
// import FoodBankIcon from '@material-ui/icons/FoodBank';

// core components/views for Official layout

import Search from "views/OfficialComponents/Search/Search";
// import Entry from "views/OfficialComponents/HostelManagement/InventoryEntry";
import Entry from "views/OfficialComponents/Maingate/MaingateEntry";
import MessMenu from "views/OfficialComponents/Mess/MessMenu";
import MessGrace from "views/OfficialComponents/Mess/MessGrace";
import MessReport from "views/OfficialComponents/Mess/MessReport";
import Exit from "views/OfficialComponents/Maingate/MaingateExit";
import Outstation from "views/OfficialComponents/Outstation/Outstation";
import Mcn from "views/OfficialComponents/Mcn/Mcn";
import Saf from "views/OfficialComponents/Saf/Saf";
import GoodieExport from "views/OfficialComponents/GoodiesExport/GoodiesExport";
import Counsellor from "views/OfficialComponents/Counsellor/Counsellor";
import Blacklist from "views/OfficialComponents/Blacklist/Blacklist";
import Blocklist from "views/OfficialComponents/Blocklist/Blocklist";
import DocGen from "views/OfficialComponents/DocGen/DocGen";
import Leave from "views/OfficialComponents/Leave/Leave";
import MessLog from "views/OfficialComponents/MessLog/MessLog";
import MessReg from "views/OfficialComponents/MessReg/MessReg";
import InventoryEntry from "views/OfficialComponents/HostelManagement/InventoryEntry";
import StudentSearch from "views/OfficialComponents/HostelManagement/StudentSearch";

const dashboardRoutes = [
  {
    path: "/search",
    id: "search",
    name: "Search",
    icon: SearchIcon,
    component: Search,
    layout: "/official",
  },
  {
    path: "/mess/menu",
    id: "messmenu",
    name: "Mess Menu",
    icon: FastfoodIcon,
    component: MessMenu,
    layout: "/official",
  },
  {
    path: "/mess/report",
    id: "messlog",
    name: "Mess Report",
    icon: FastfoodIcon,
    component: MessReport,
    layout: "/official",
  },
  {
    path: "/maingate/entry",
    id: "maingate",
    name: "Gate Entry",
    icon: FastForwardIcon,
    component: Entry,
    layout: "/official",
  },
  {
    path: "/maingate/exit",
    id: "maingate",
    name: "Gate Exit",
    icon: FastRewindIcon,
    component: Exit,
    layout: "/official",
  },
  {
    path: "/outstation",
    id: "outstation",
    name: "Outstation Request",
    icon: AirplanemodeActiveIcon,
    component: Outstation,
    layout: "/official",
  },
  {
    path: "/mcn",
    id: "mcn",
    name: "MCN Portal",
    icon: AccountBalanceWalletIcon,
    component: Mcn,
    layout: "/official",
  },
  {
    path: "/saf",
    id: "saf",
    name: "SAF Portal",
    icon: AccountBalanceWalletIcon,
    component: Saf,
    layout: "/official",
  },
  {
    path: "/mess/grace",
    id: "messgrace",
    name: "Mess Graces",
    icon: BookIcon,
    component: MessGrace,
    layout: "/official",
  },
  {
    path: "/goodies",
    id: "goodies",
    name: "Goodies Data",
    icon: CardTravelIcon,
    component: GoodieExport,
    layout: "/official",
  },
  {
    path: "/counsellor",
    id: "counsellor",
    name: "Counsellor",
    icon: EventNoteIcon,
    component: Counsellor,
    layout: "/official",
  },
  {
    path: "/blacklist",
    id: "blacklist",
    name: "Blacklist Action ",
    icon: ErrorOutlineIcon,
    component: Blacklist,
    layout: "/official",
  },
  {
    path: "/blocklist",
    id: "blocklist",
    name: "Blocklist Action ",
    icon: BlockIcon,
    component: Blocklist,
    layout: "/official",
  },
  {
    path: "/docgen",
    id: "doc",
    name: "Document Generation ",
    icon: DescriptionIcon,
    component: DocGen,
    layout: "/official",
  },
  {
    path: "/leave",
    id: "emergency-leave",
    name: "On Campus",
    icon: DescriptionIcon,
    component: Leave,
    layout: "/official",
  },
  {
    path: "/messlog",
    id: "messlog",
    name: "Mess Log",
    icon: DescriptionIcon,
    component: MessLog,
    layout: "/official",
  },
  {
    path: "/messreg",
    id: "messreg",
    name: "Mess Registration",
    icon: HowToRegIcon,
    component: MessReg,
    layout: "/official",
  },
  {
    path: "/hostel-inventory",
    id: "inventory",
    name: "Student Inventory Entry",
    icon: HowToRegIcon,
    component: InventoryEntry,
    layout: "/official",
  },
  {
    path: "/hostel-search",
    id: "hostelSearch",
    name: "Hostel Search",
    icon: HowToRegIcon,
    component: StudentSearch,
    layout: "/official",
  },

  /*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  }
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  }
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  }*/
];

export default dashboardRoutes;
