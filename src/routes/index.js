import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage"
import AboutPage from '../pages/AboutPage';
import ToursPage from '../pages/ToursPage';
import TourDetails from '../pages/TourDetails';
import TourSearchList from '../pages/TourSearchList';
import ThankYouPage from '../pages/ThankYouPage';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const RouteJS = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageTransition><HomePage /></PageTransition>} />
                <Route path='/about' element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path='/tours' element={<PageTransition><ToursPage /></PageTransition>} />
                <Route path='/tours/:id' element={<PageTransition><TourDetails /></PageTransition>} />
                <Route path='/tours/search' element={<PageTransition><TourSearchList /></PageTransition>} />
                <Route path='/thank-you' element={<PageTransition><ThankYouPage /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    )
}

export default RouteJS