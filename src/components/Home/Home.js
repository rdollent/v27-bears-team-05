import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../../actions/exampleActions";
import LoggedOutView from '../LoggedOut/LoggedOutView';
import LoggedInView from '../LoggedIn/LoggedInView';
import NavBar from '../LoggedIn/NavBar';

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
