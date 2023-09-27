import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: (

            <Home />

        ),
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('/donationInfos.json'),
    },
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/donations",
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/donationInfos.json')
            }
            
        ]
    }
])

export default myRouter;