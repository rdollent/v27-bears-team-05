import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import NavBar from '../LoggedIn/NavBar';


const HabitView = () => {

    let { name, frequency, timeline, category, user, _id } = useSelector((state) => state.habitListReducer.currentHabit);

    return (
        <>
            <NavBar />
            <div>
                <p>{name}</p>
                <p>{frequency}</p>
                <p>{timeline}</p>
                <p>{category}</p>
                <p>{user}</p>
                <p>{_id}</p>
            </div>
        </>
    )
}
;

export default HabitView;