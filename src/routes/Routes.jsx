
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
import  Login  from "../Auth/Login";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Verification } from "../Auth/Verification";
import { NewPassword } from "../Auth/NewPassword";
import  SignUp  from "../Auth/SignUp";
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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/newExpense',
                element: <NewExpense></NewExpense>
            },
            {
                path: '/information',
                element: <Information></Information>
            },
            {
                path: '/information/addBelt',
                element: <AddBelt></AddBelt>
            },
            {
                path: '/information/addOiltFilter',
                element: <AddAnOilFilter></AddAnOilFilter>
            },
            {
                path: '/information/addFuelFilter',
                element: <AddAnFueltFilter></AddAnFueltFilter>
            },
            {
                path: '/information/addOtherBeltFilter',
                element: <AddOtherBelt></AddOtherBelt>
            },
            {
                path: '/reports',
                element: <Reports></Reports>
            },
            {
                path: '/favouriteReports',
                element: <FavouriteReport></FavouriteReport>
            },
             {
                path: '/tireInformation',
                element: <TireInformation></TireInformation>
            },
            {
                path: '/myreports',
                element: <MyReport></MyReport>
            },
             {
                path: '/newRepair',
                element: <NewRepair></NewRepair>
            },
            {
                path: '/UpdateRepairsOrder',
                element: <UpdateRepairOrder></UpdateRepairOrder>
            },
            {
                path: '/addMembership',
                element: <AddMembership></AddMembership>
            },
            {
                path: '/insuranceInfo',
                element: <InsuranceInfo></InsuranceInfo>
            },
            {
                path: '/insuranceCompanyInfoForm',
                element: <InsuranceCompanyInfo></InsuranceCompanyInfo>
            },
            {
                path: '/updatedingInsurance',
                element: <UpdatingCompanyInfo></UpdatingCompanyInfo>
            },
            {
                path: '/addMembershipForm',
                element: <AddMembershipForm></AddMembershipForm>
            },
            {
                path: '/UpdateExisting',
                element: <UpdateExisting></UpdateExisting>
            },
            {
                path: '/campgroundReview',
                element:<CampgroundReview></CampgroundReview>
            },
              {
                path: '/newMaintenance',
                element:<NewMaintenace></NewMaintenace>
            },
            {
                path: '/upcomingMaintenance',
                element:<UpcomingMaintenance></UpcomingMaintenance>
            },
            {
                path: '/rvSold',
                element: <RvSold></RvSold>
            },
            {
                path: '/addRv',
                element: <AddRv></AddRv>
            },
            {
                path: '/viewAllTrip',
                element: <ViewAllTrip></ViewAllTrip>
            },
            {
                path: '/tripDetails',
                element: <TripDetails></TripDetails>
            },
             {
                path: '/updateExistMaintenance',
                element: <UpdateExistMaintainanceOrder></UpdateExistMaintainanceOrder>
            },
            {
                path: '/rvSoldInsurance',
                element: <RvSoldInformationForm></RvSoldInformationForm>
            },
            {
                path: '/company/about-us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/company/tech-pertners',
                element: <TechPartnerPage></TechPartnerPage>
            },
            {
                path: '/services/Structure-Cabling',
                element: <StructuredCabilingPage></StructuredCabilingPage>
            },
            {
                path: '/services/Break-FixServices',
                element: <BreakFixServicesPage></BreakFixServicesPage>
            },
            {
                path: '/contactUs',
                element: <ContuctUsPage></ContuctUsPage>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/submit-a-ticket',
                element: <SubmitTicketPage></SubmitTicketPage>
            },

            {
                path: '/profilePage',
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/profilePage/ongoing-tickets',
                element: <OngoingTicketPage></OngoingTicketPage>
            },
        ]
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>
    },

    {
        path: '/auth/verification',
        element: <Verification></Verification>
    },
    {
        path: '/auth/update-password',
        element: <NewPassword></NewPassword>
    }
]);