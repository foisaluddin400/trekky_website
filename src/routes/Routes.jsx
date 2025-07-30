import { Root } from "../layout/Root";
import { AboutPage } from "../Pages/CompanyPage/AboutPage";
import { CompanyPage } from "../Pages/CompanyPage/CompanyPage";
import { TechPartnerPage } from "../Pages/CompanyPage/TechPartnerPage";
import { ContuctUsPage } from "../Pages/ContactUsPage/ContuctUsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { StructuredCabilingPage } from "../Pages/ServicesPage/StructuredCabilingPage";
import { BreakFixServicesPage } from "../Pages/ServicesPage/BreakFixServicesPage";
import { SubmitTicketPage } from "../Pages/SubmitTicketPage.jsx/SubmitTicketPage";
import { BlogPage } from "../Pages/BlogPage/BlogPage";
import Login from "../Auth/Login";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Verification } from "../Auth/Verification";
import { NewPassword } from "../Auth/NewPassword";
import SignUp from "../Auth/SignUp";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import { OngoingTicketPage } from "../Pages/ProfilePage/OngoingTicketPage";
import NewExpense from "../Pages/newExpense/NewExpense";
import Information from "../Pages/information/Information";
import Reports from "../Pages/reports/Reports";
import MyReport from "../Pages/reports/MyReport";
import AddMembership from "../Pages/reports/AddMembership";
import AddMembershipForm from "../Pages/reports/AddMembershipForm";
import UpdateExisting from "../Pages/reports/UpdateExisting";
import InsuranceInfo from "../Pages/insuranceInfo/InsuranceInfo";
import InsuranceCompanyInfo from "../Pages/insuranceInfo/InsuranceCompanyInfo";
import UpdatingCompanyInfo from "../Pages/insuranceInfo/UpdatingCompanyInfo";
import RvSold from "../Pages/rvSold/RvSold";
import RvSoldInformationForm from "../Pages/rvSold/RvSoldInformationForm";
import AddRv from "../Pages/addRv/AddRv";
import UpdateExistMaintainanceOrder from "../Pages/addRv/UpdateExistMaintainanceOrder";
import CampgroundReview from "../Pages/campgroundReview/CampgroundReview";
import ViewAllTrip from "../Pages/campgroundReview/ViewAllTrip";
import TripDetails from "../Pages/campgroundReview/TripDetails";
import UpcomingMaintenance from "../Pages/upcomingMaintenance/UpcomingMaintenance";
import NewRepair from "../Pages/newRepair/NewRepair";
import FavouriteReport from "../Pages/reports/FavouriteReport";
import NewMaintenace from "../Pages/newMaintenace/NewMaintenace";
import TireInformation from "../Pages/tireInformation/TireInformation";
import UpdateRepairOrder from "../Pages/newRepair/UpdateRepairOrder";
import AddBelt from "../Pages/information/AddBelt";
import AddAnOilFilter from "../Pages/information/AddAnOilFilter";
import AddAnFueltFilter from "../Pages/information/AddAnFueltFilter";
import AddOtherBelt from "../Pages/information/AddOtherBelt";
import AddNewMaintanceSchedule from "../Pages/newMaintenace/AddNewMaintanceSchedule";
import UpdateMaintanceSchedule from "../Pages/newMaintenace/UpdateMaintanceSchedule";
import Tire from "../Pages/tire/Tire";
import AddTire from "../Pages/tire/AddTire";
import UpdateTire from "../Pages/tire/UpdateTire";
import AddNewExpense from "../Pages/newExpense/AddNewExpense";
import UpdateNewExpense from "../Pages/newExpense/UpdateNewExpense";
import AddNewRepair from "../Pages/newRepair/AddNewRepair";
import HavcApplication from "../Pages/hvac/HavcApplication";
import Details from "../Pages/hvac/Details";
import Add from "../Pages/hvac/Add";
import Update from "../Pages/hvac/Update";
import HeaterInfo from "../Pages/hvac/HeaterInfo";
import WaterPumpInfo from "../Pages/hvac/WaterPumpInfo";
import WasherInfo from "../Pages/hvac/WasherInfo";
import WaterHeater from "../Pages/hvac/WaterHeater";
import ToiletInfo from "../Pages/hvac/ToiletInfo";
import TVInfo from "../Pages/hvac/TVInfo";
import DryerInfo from "../Pages/hvac/DryerInfo";
import ExhaustInfo from "../Pages/hvac/ExhaustInfo";
import VentFansInfo from "../Pages/hvac/VentFansInfo";
import DishwasherInfo from "../Pages/hvac/DishwasherInfo";
import CellingInfo from "../Pages/hvac/CellingInfo";
import RouterInfo from "../Pages/hvac/RouterInfo";
import InternetInfo from "../Pages/hvac/InternetInfo";
import SurroundInfo from "../Pages/hvac/SurroundInfo";
import OutdoorInfo from "../Pages/hvac/OutdoorInfo";
import GPSInfo from "../Pages/hvac/GPSInfo";
import DVDInfo from "../Pages/hvac/DVDInfo";
import AddSoldRV from "../Pages/rvSold/AddSoldRV";
import CheckList from "../Pages/checklist/CheckList";
import AddChecklist from "../Pages/checklist/AddChecklist";
import ChecklistDetails from "../Pages/checklist/ChecklistDetails";
import AddHeater from "../Pages/hvac/AddHeater";
import AddWaterPump from "../Pages/hvac/AddWaterPump";
import AddWasherInfo from "../Pages/hvac/AddWasherInfo";
import AddWaterHeater from "../Pages/hvac/AddWaterHeater";
import AddToiletInfo from "../Pages/hvac/AddToiletInfo";
import AddTvInfo from "../Pages/hvac/AddTvInfo";
import AddDryerInfo from "../Pages/hvac/AddDryerInfo";
import AddExhaustFansInfo from "../Pages/hvac/AddExhaustFansInfo";
import AddVentFans from "../Pages/hvac/AddVentFans";
import AddDishWasherInfo from "../Pages/hvac/AddDishWasherInfo";
import AddCellingFans from "../Pages/hvac/AddCellingFans";
import AddDvdInfo from "../Pages/hvac/AddDvdInfo";
import AddgpsInfo from "../Pages/hvac/AddgpsInfo";
import AddOutdoorRadio from "../Pages/hvac/AddOutdoorRadio";
import AddSurround from "../Pages/hvac/AddSurround";
import AddInternet from "../Pages/hvac/AddInternet";
import AddRouter from "../Pages/hvac/AddRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/newExpense",
        element: <NewExpense></NewExpense>,
      },

      {
        path: "/addNewExpense",
        element: <AddNewExpense></AddNewExpense>,
      },

      {
        path: "/updateNewExpense",
        element: <UpdateNewExpense></UpdateNewExpense>,
      },
      {
        path: "/information",
        element: <Information></Information>,
      },
      {
        path: "/information/addBelt",
        element: <AddBelt></AddBelt>,
      },
      {
        path: "/information/addOiltFilter",
        element: <AddAnOilFilter></AddAnOilFilter>,
      },
      {
        path: "/information/addFuelFilter",
        element: <AddAnFueltFilter></AddAnFueltFilter>,
      },
      {
        path: "/information/addOtherBeltFilter",
        element: <AddOtherBelt></AddOtherBelt>,
      },
      {
        path: "/reports",
        element: <Reports></Reports>,
      },
      {
        path: "/favouriteReports",
        element: <FavouriteReport></FavouriteReport>,
      },
      {
        path: "/tireInformation",
        element: <TireInformation></TireInformation>,
      },

      {
        path: "/havcApplication",
        element: <HavcApplication></HavcApplication>,
      },
      {
        path: "/details/airConditioner",
        element: <Details></Details>,
      },
        {
        path: "/details/Heater",
        element: <HeaterInfo></HeaterInfo>
      },
      {
        path: "/details/WaterPump",
        element: <WaterPumpInfo></WaterPumpInfo>
      },
      {
        path: "/details/Washer",
        element: <WasherInfo></WasherInfo>
      },
      {
        path: "/details/WaterHeater",
        element: <WaterHeater></WaterHeater>
      },
      {
        path: "/details/Toilet",
        element: <ToiletInfo></ToiletInfo>
      },
      {
        path: "/details/TVInfo",
        element: <TVInfo></TVInfo>
      },
      {
        path: "/details/Dryer",
        element: <DryerInfo></DryerInfo>
      },
      {
        path: "/details/Exhaust",
        element: <ExhaustInfo></ExhaustInfo>
      },
      {
        path: "/details/VentFans",
        element: <VentFansInfo></VentFansInfo>
      },
      {
        path: "/details/Dishwasher",
        element: <DishwasherInfo></DishwasherInfo>
      },
      {
        path: "/details/Celling",
        element: <CellingInfo></CellingInfo>
      },
      {
        path: "/details/DVD",
        element: <DVDInfo></DVDInfo>
      },
      {
        path: "/details/GPS",
        element: <GPSInfo></GPSInfo>
      },
      {
        path: "/details/Outdoor",
        element: <OutdoorInfo></OutdoorInfo>
      },
      {
        path: "/details/Surround",
        element: <SurroundInfo></SurroundInfo>
      },
       {
        path: "/details/Internet_Satellite",
        element: <InternetInfo></InternetInfo>
      },
       {
        path: "/details/Router",
        element: <RouterInfo></RouterInfo>
      },
   {
        path: "/details/AddHeater",
        element: <AddHeater></AddHeater>
      },
       {
        path: "/details/AddWaterPump",
        element: <AddWaterPump></AddWaterPump>
      },
     
      {
        path: "/details/AddWasherInfo",
        element: <AddWasherInfo></AddWasherInfo>
      },
      {
        path: "/details/AddWaterHeater",
        element: <AddWaterHeater></AddWaterHeater>
      },
      {
        path: "/details/AddToiletInfo",
        element: <AddToiletInfo></AddToiletInfo>
      },
      {
        path: "/details/AddTvInfo",
        element: <AddTvInfo></AddTvInfo>
      },
      {
        path: "/details/AddDryerInfo",
        element: <AddDryerInfo></AddDryerInfo>
      },
      {
        path: "/details/AddExhaustFansInfo",
        element: <AddExhaustFansInfo></AddExhaustFansInfo>
      },
      {
        path: "/details/AddVentFans",
        element: <AddVentFans></AddVentFans>
      },
      {
        path: "/details/AddDishWasherInfo",
        element: <AddDishWasherInfo></AddDishWasherInfo>
      },
      {
        path: "/details/AddCellingFans",
        element: <AddCellingFans></AddCellingFans>
      },
      {
        path: "/details/AddDvdInfo",
        element: <AddDvdInfo></AddDvdInfo>
      },
      {
        path: "/details/AddgpsInfo",
        element: <AddgpsInfo></AddgpsInfo>
      },
     {
        path: "/details/AddOutdoorRadio",
        element: <AddOutdoorRadio></AddOutdoorRadio>
      },
      {
        path: "/details/AddSurround",
        element: <AddSurround></AddSurround>
      },
      {
        path: "/details/AddInternet",
        element: <AddInternet></AddInternet>
      },
      {
        path: "/details/AddRouter",
        element: <AddRouter></AddRouter>
      },
  
      {
        path: "/Add",
        element: <Add></Add>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/myreports",
        element: <MyReport></MyReport>,
      },
      {
        path: "/newRepair",
        element: <NewRepair></NewRepair>,
      },
      {
        path: "/addNewRepair",
        element: <AddNewRepair></AddNewRepair>,
      },
      {
        path: "/UpdateRepairsOrder",
        element: <UpdateRepairOrder></UpdateRepairOrder>,
      },
      {
        path: "/addMembership",
        element: <AddMembership></AddMembership>,
      },
      {
        path: "/insuranceInfo",
        element: <InsuranceInfo></InsuranceInfo>,
      },
      {
        path: "/insuranceCompanyInfoForm",
        element: <InsuranceCompanyInfo></InsuranceCompanyInfo>,
      },
      {
        path: "/updatedingInsurance",
        element: <UpdatingCompanyInfo></UpdatingCompanyInfo>,
      },
      {
        path: "/addMembershipForm",
        element: <AddMembershipForm></AddMembershipForm>,
      },
      {
        path: "/UpdateExisting",
        element: <UpdateExisting></UpdateExisting>,
      },
      {
        path: "/campgroundReview",
        element: <CampgroundReview></CampgroundReview>,
      },
      {
        path: "/newMaintenance",
        element: <NewMaintenace></NewMaintenace>,
      },

      {
        path: "/tire",
        element: <Tire></Tire>,
      },
      {
        path: "/AddTire",
        element: <AddTire></AddTire>,
      },
      {
        path: "/updateTire",
        element: <UpdateTire></UpdateTire>,
      },
      {
        path: "/AddNewMaintanceSchedule",
        element: <AddNewMaintanceSchedule></AddNewMaintanceSchedule>,
      },
      {
        path: "/UpdateMaintanceSchedule",
        element: <UpdateMaintanceSchedule></UpdateMaintanceSchedule>,
      },
      {
        path: "/upcomingMaintenance",
        element: <UpcomingMaintenance></UpcomingMaintenance>,
      },
      {
        path: "/rvSold",
        element: <RvSold></RvSold>,
      },
    {
        path: "/addRv",
        element: <AddRv></AddRv>
      },
      {
        path: "/addSoldRv",
        element: <AddSoldRV></AddSoldRV>
      },
      {
        path: "/checklist",
        element: <CheckList></CheckList>
      },
       {
        path: "/checklistDetails",
        element: <ChecklistDetails></ChecklistDetails>
      },
       {
        path: "/addChecklist",
        element: <AddChecklist></AddChecklist>
      },
      {
        path: "/viewAllTrip",
        element: <ViewAllTrip></ViewAllTrip>,
      },
      {
        path: "/tripDetails",
        element: <TripDetails></TripDetails>,
      },
      {
        path: "/updateExistMaintenance",
        element: <UpdateExistMaintainanceOrder></UpdateExistMaintainanceOrder>,
      },
      {
        path: "/rvSoldInsurance",
        element: <RvSoldInformationForm></RvSoldInformationForm>,
      },
      {
        path: "/company/about-us",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/company/tech-pertners",
        element: <TechPartnerPage></TechPartnerPage>,
      },
      {
        path: "/services/Structure-Cabling",
        element: <StructuredCabilingPage></StructuredCabilingPage>,
      },
      {
        path: "/services/Break-FixServices",
        element: <BreakFixServicesPage></BreakFixServicesPage>,
      },
      {
        path: "/contactUs",
        element: <ContuctUsPage></ContuctUsPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/submit-a-ticket",
        element: <SubmitTicketPage></SubmitTicketPage>,
      },

      {
        path: "/profilePage",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "/profilePage/ongoing-tickets",
        element: <OngoingTicketPage></OngoingTicketPage>,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login></Login>,
  },
  {
    path: "/auth/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },

  {
    path: "/auth/verification",
    element: <Verification></Verification>,
  },
  {
    path: "/auth/update-password",
    element: <NewPassword></NewPassword>,
  },
]);
