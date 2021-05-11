import React, { useEffect } from 'react'

import { toggleModalAction, whichModalAction } from "../../actions/modalActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { storeHabits } from "../../actions/habitListActions";
import { storeCurrentHabit } from "../../actions/habitViewActions";
import HabitCard from '../General/HabitCard';

import { HabitsListContainer, EmptyHabits, HabitsItems } from "../../styled_components/styled";

import { useHistory } from "react-router-dom";



const HabitsList = () => {
    let habits = useSelector((state) => state.habitListReducer.habits);
    
    const history = useHistory();
    const userState = useSelector((state) => state.userReducer);
    const user = userState.user;
    const dispatch = useDispatch();

    const modalState = useSelector((state) => state.modalReducer.opened);
    const habitListState = useSelector((state) => state.habitListReducer.habits);

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
                res.data.length !== habitListState.length ?
                    /** run this function */
                    (() => {
                        /** replace _id keyname to habitId */
                        let data = res.data.map(({ _id: habitId, ...rest }) => {
                            return {
                                habitId,
                                ...rest
                            }
                        });
                        dispatch(storeHabits(data));
                    })()
                : console.log('no changes');
            })
        } catch (error) {
            console.log(error.response);
    
        }
    };

    useEffect(() => {
        getHabits();
    }, [habitListState]);

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
                                    handleClick={(e) => { 
                                        dispatch(storeCurrentHabit(item));
                                        history.push("/habit");
                                    }} 
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
