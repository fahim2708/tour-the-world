import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import AddOffer from "./components/pages/AddOffer/AddOffer";
import BookingNow from "./components/pages/BookingNow/BookingNow";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Hotels from "./components/pages/Hotels/Hotels";
import Login from "./components/pages/Login/Login";
import ManageOrders from "./components/pages/ManageOrders/ManageOrders";
import MyOrder from "./components/pages/MyOrder/MyOrder"
import NotFound from "./components/pages/NotFound/NotFound";
import Offer from "./components/pages/Offer/Offer";
import SingleHotel from "./components/pages/SingleHotel/SingleHotel";
import SingleTour from "./components/pages/SingleTour/SingleTour";
import Tour from "./components/pages/Tour/Tour";
import Footer from "./components/singleComponents/Footer/Footer";
import Header from "./components/singleComponents/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/about-us'>
                            <AboutUs></AboutUs>
                        </Route>
                        <Route exact path='/offers'>
                            <Offer></Offer>
                        </Route>
                        <Route exact path='/tours'>
                            <Tour></Tour>
                        </Route>
                        <PrivateRoute exact path='/tours/:id'>
                            <SingleTour></SingleTour>
                        </PrivateRoute>
                        <Route exact path='/hotels'>
                            <Hotels></Hotels>
                        </Route>
                        <PrivateRoute exact path='/hotels/:id'>
                            <SingleHotel></SingleHotel>
                        </PrivateRoute>
                        <Route exact path='/contact'>
                            <Contact></Contact>
                        </Route>
                        <PrivateRoute exact path='/add-offer'>
                            <AddOffer></AddOffer>
                        </PrivateRoute>
                        <PrivateRoute exact path='/manage-booking'>
                            <ManageOrders></ManageOrders>
                        </PrivateRoute>
                        <PrivateRoute exact path='/my-booking'>
                            <MyOrder></MyOrder>
                        </PrivateRoute>
                        <PrivateRoute exact path='/booking/:offerId'>
                            <BookingNow></BookingNow>
                        </PrivateRoute>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/my-account'></Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
