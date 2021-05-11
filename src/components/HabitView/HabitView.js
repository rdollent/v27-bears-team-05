import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import NavBar from '../LoggedIn/NavBar';

import { HabitViewContainer } from '../../styled_components/styled';

import { storeCompleted } from '../../actions/habitViewActions';


const HabitView = () => {

    const dispatch = useDispatch();

    let { name, frequency, timeline, category, goal, user, habitId } = useSelector((state) => state.habitViewReducer.currentHabit);

    const completeHabit = () => {
        dispatch(storeCompleted(habitId));
    };

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
                    <button onClick={() => completeHabit()}>Completed!</button>
                </div>
            </HabitViewContainer>
        </>
    )
}
;

export default HabitView;