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
            {/* <p>Welcome to the home page!</p>
>>>>>>> 05a8deb6467a087e7f397ad00e4394d580ceca53
            <br />
            <p>Click the button to toggle the Redux state.</p>
            <br />
            <p>Example State: {exampleState.toggle ? "On" : "Off"}</p>
            <br />
            <button onClick={() => dispatch(exampleAction())}>Click Me!</button> */}
        </div>
    );
};

export default Home;
