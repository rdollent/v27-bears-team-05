import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../actions/exampleActions";
import LoggedOutView from './../components/LoggedOut/LoggedOutView.js';


const Home = () => {
   // const exampleState = useSelector((state) => state.exampleReducer);
    const userState =  useSelector((state) => state.userReducer);
    return (
        <div>
            { userState.loggedIn ? 
               <div>Logged In</div>
            :
                <LoggedOutView />
            }
        </div>
    );
};

export default Home;
