import React, { useEffect } from 'react'

import { toggleModalAction, whichModalAction } from "./../../actions/modalActions.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { storeHabits } from "./../../actions/habitListActions.js";
import HabitCard from './../HabitCard.js';

import { HabitsListContainer, EmptyHabits, HabitsItems } from "../../styled_components/styled.js";


const HabitsList = () => {
    let habits = [];

    const userState = useSelector((state) => state.userReducer);
    habits = useSelector((state) => state.habitListReducer.habits);
    const user = userState.user;
    const dispatch = useDispatch();

    console.log('this is habits', habits);

    const modalState = useSelector((state) => state.modalReducer.opened);

    const getHabits = async () => {
        const userData = JSON.stringify(user);
        try {
            await axios.get(
                "http://localhost:5000/api/habits/",
                {
                    params: {
                        user: userData
                }
            })
            .then((res) => {
                console.log('this is res', res.data);
                dispatch(storeHabits(res.data));
            })    
        } catch (error) {
            console.log(error.response);
    
        }
    };

    useEffect(() => {
        getHabits();
    }, [modalState]);

    const openModal = (modal)  => {
        dispatch(toggleModalAction());
        dispatch(whichModalAction(modal));
    }
    return (
        <HabitsListContainer>
            { habits.length ? 
                <HabitsItems>
                    {
                        habits.map((item, i) => { 
                            return (
                                <HabitCard 
                                    key={i}
                                    item={ item.name }
                                    category={ item.category }
                                    handleClick={(e) => { }} 
                                />
 
                            )
                        })
                    }
                </HabitsItems>
                : 
                <EmptyHabits>
                    <span>You don't currently have any habits. <span onClick={() => openModal('preset')} className="add-habit-link">Start a new habit today!</span></span>
                    <div className="img-container">
                        <img src="./images/emptyHabits.png" alt="Person Icon" />
                    </div>
                </EmptyHabits>
                }
        </HabitsListContainer>
    )
}

export default HabitsList
