import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage"
import AboutPage from '../pages/AboutPage';
import ToursPage from '../pages/ToursPage';
import TourDetails from '../pages/TourDetails';
import TourSearchList from '../pages/TourSearchList';
import ThankYouPage from '../pages/ThankYouPage';

const RouteJS = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/tours' element={<ToursPage />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/tours/search' element={<TourSearchList />} />
            <Route path='/thank-you' element={<ThankYouPage />} />
        </Routes>
    )
}

export default RouteJS