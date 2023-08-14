
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { createContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store';
import { _getToken } from './scripts/getToken'


export const mainContext = createContext();

function Main() {


    useEffect(() => {
        async function loadToken() {
            const token = _getToken();
        }
    }, [])


    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Outlet />
                <Footer />
            </Provider>
        </>
    )
}
export default Main;