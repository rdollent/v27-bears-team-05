import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../actions/exampleActions";
import { toggleModalAction} from '../actions/index.js'
import Modal from '../components/Modal'

const Home = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modalReducer);
    const exampleState = useSelector((state) => state.exampleReducer);

    const handleClick = () => {
        dispatch(toggleModalAction())
    }

    return (
        <div>
            <Modal>
                <div>Hello world</div>
            </Modal>
            <button onClick={handleClick}>Toggle Modal</button>
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
