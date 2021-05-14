import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import NavBar from '../LoggedIn/NavBar';

import { HabitViewContainer } from '../../styled_components/styled';

import { completeHabit } from '../../actions/habitViewActions';
import { toggleModalAction, whichModalAction } from "./../../actions/modalActions";
import { loadHabit } from "../../actions/habitAddActions";

const HabitView = () => {

    const dispatch = useDispatch();

    let { name, frequency, timeline, category, goal, user, habitId } = useSelector((state) => state.habitViewReducer.currentHabit);

    const runComplete = () => {
        dispatch(completeHabit(habitId));
    };

    const openModal = (e, modal)  => {
        dispatch(toggleModalAction());
        dispatch(loadHabit({ mode: "edit", name: name, frequency: frequency, timeline: timeline, category: category, goal: goal}));
        dispatch(whichModalAction(modal));
    }

    return (
        <>
            <NavBar />
            <HabitViewContainer>
                <div>
                    <p>{name}</p>
                    <p>{frequency}</p>
                    <p>{timeline}</p>
                    <p>{category}</p>
                    <p>{goal}</p>
                    <p>{user}</p>
                    <p>{habitId}</p>
                    <button onClick={() => runComplete()}>Completed!</button>
                    <button onClick={(e) => openModal(e, "habitAdd")}>Edit</button>
                </div>
            </HabitViewContainer>
        </>
    )
}
;

export default HabitView;