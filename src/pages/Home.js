import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../actions/exampleActions";
import LoggedOutView from './../components/LoggedOut/LoggedOutView.js';
import LoggedInView from './../components/LoggedIn/LoggedInView.js';
import NavBar from './../components/NavBar.js';

const Home = () => {
   // const exampleState = useSelector((state) => state.exampleReducer);
    const userState =  useSelector((state) => state.userReducer);
    return (
        <div>
            { userState.loggedIn ? 
            <>
                <NavBar />
                <LoggedInView />
            </>
            :
                <LoggedOutView />
            }
        </div>
    );
};

export default Home;
