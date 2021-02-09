import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../actions/exampleActions";

const Home = () => {
    const dispatch = useDispatch();
    const exampleState = useSelector((state) => state.exampleReducer);
    return (
        <div>
            <p>Welcome to the home page!</p>
            <br />
            <p>Click the button to toggle the Redux state.</p>
            <br />
            <p>Example State: {exampleState.toggle ? "On" : "Off"}</p>
            <br />
            <button onClick={() => dispatch(exampleAction())}>Click Me!</button>
        </div>
    );
};

export default Home;
