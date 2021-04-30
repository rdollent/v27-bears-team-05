import React, { useEffect } from 'react'
import styled from 'styled-components';
import { toggleModalAction, whichModalAction } from "./../../actions/modalActions.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { storeHabits } from "./../../actions/habitListActions.js";


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

const HabitsItems = styled.section`
    display: flex;
    flex-wrap: wrap;

    div {
        width: 200px;
        display: inline-block;
        margin: 20px;
    }


`;




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
                                <div key={i}>
                                    <p>{item.name}</p>
                                    <p>{item.category}</p>
                                </div>
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
