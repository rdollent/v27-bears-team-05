import React from 'react'
import styled from 'styled-components';
import { toggleModalAction, whichModalAction } from "./../../actions/index.js";
import { useSelector, useDispatch } from "react-redux";

const HabitsListContainer = styled.div`
    width: 100%;
    padding-top: 40px;
`;

const EmptyHabits = styled.div`
    .add-habit-link {
        color: #355070;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }

    .img-container {
        width: 100%;
        text-align: center;

        img {
            width: 35%;
            max-width: 320px;
            padding-top: 50px;
        }
    }
`;

const HabitsList = () => {
    let habits = [];

    const dispatch = useDispatch()
    const openModal = (modal)  => {
        dispatch(toggleModalAction());
        dispatch(whichModalAction(modal));
    }
    return (
        <HabitsListContainer>
            { habits.length ? 
                'habits' : 
                <EmptyHabits>
                    <span>You don't currently have any habits. <span onClick={() => openModal('habitAdd')} className="add-habit-link">Start a new habit today!</span></span>
                    <div className="img-container">
                        <img src="./images/emptyHabits.png" alt="Person Icon" />
                    </div>
                </EmptyHabits>
                }
        </HabitsListContainer>
    )
}

export default HabitsList
