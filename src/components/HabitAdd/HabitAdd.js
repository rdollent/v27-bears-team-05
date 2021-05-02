import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeHabitName,
    changeHabitCategory,
    changeHabitFrequency,
    changeHabitGoal,
    changeHabitTimeline,
    addHabit
} from "../../actions/habitAddActions";
import Input from "./../Input.js";
import Button from "./../Button.js";

import { whichModalAction, toggleModalAction } from "./../../actions/modalActions.js";

import { below } from "./../../elements/utilities";
import axios from "axios";

import { useHistory } from "react-router-dom";

import { AddHabitForm, Back, FormColumns, Label, HabitSelect } from "../../styled_components/styled.js";



const HabitAdd = () => {
    const dispatch = useDispatch();
    const habitState = useSelector((state) => state.habitAddReducer);
    const userState = useSelector((state) => state.userReducer);
    const user = userState.user;
    const openModal = (modal) => {
        dispatch(whichModalAction(modal));
    };

    const inputName = (e) => dispatch(changeHabitName(e.target.value));
    const inputCategory = (e) => dispatch(changeHabitCategory(e.target.value));
    const inputFrequency = (e) => dispatch(changeHabitFrequency(e.target.value));
    const inputGoal = (e) => dispatch(changeHabitGoal(e.target.value));
    const inputTimeline = (e) => dispatch(changeHabitTimeline(Number(e.target.value)));

    let url = "";

    // let history = useHistory();

    /** use to refresh */
    const [unusedState, setUnusedState] = useState()
    const forceUpdate = useCallback(() => setUnusedState({}), [])

    const submitHabit = (e) => {
        e.preventDefault();
        console.log(habitState);
        console.log(userState);
        console.log({...habitState, user})
        dispatch(addHabit({...habitState, user}));
        // forceUpdate(); 
        dispatch(toggleModalAction());
    };

    

    return (
        <>
            <Back onClick={() => openModal("preset")}>{"< Back"}</Back>
            <AddHabitForm>
                <h1>Add Habit</h1>
                <form id="habit-add">
                    <FormColumns>
                        <div>
                            <Input
                                label="Name"
                                type="text"
                                id="habit-name"
                                handleChange={inputName}
                                value={habitState.name}
                            />
                            <Label htmlFor="habit-frequency">Frequency</Label>
                            <HabitSelect id="habit-frequency" onChange={inputFrequency} value={habitState.frequency}>
                                <option disabled hidden value="">
                                    Select frequency
                                </option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="bi-weekly">Bi-Weekly</option>
                                <option value="monthly">Monthly</option>
                            </HabitSelect>
                            {/* <Label htmlFor="habit-timeline">Timeline</Label> */}
                            <Input
                                label="Timeline (Days)"
                                type="number"
                                id="habit-timeline"
                                handleChange={inputTimeline}
                                value={habitState.timeline}
                            />
                            {/* 
                            <HabitSelect id="habit-timeline" onChange={inputTimeline} value={habitState.timeline}>
                                <option disabled hidden value="">
                                    Select timeline
                                </option>
                                <option value="month-one">1 Month</option>
                                <option value="month-two">2 Months</option>
                                <option value="month-three">3 Months</option>
                                <option value="month-four">4 Months</option>
                                <option value="month-five">5 Months</option>
                                <option value="month-six">6 Months</option>
                                <option value="month-seven">7 Months</option>
                                <option value="month-eight">8 Months</option>
                                <option value="month-nine">9 Months</option>
                                <option value="month-ten">10 Months</option>
                                <option value="month-eleven">11 Months</option>
                                <option value="month-twelve">12 Months</option>
                            </HabitSelect>
                             */}
                        </div>
                        <div>
                            <Label htmlFor="habit-category">Category</Label>
                            <HabitSelect id="habit-category" onChange={inputCategory} value={habitState.category}>
                                <option disabled hidden value="">
                                    Select category
                                </option>
                                <option value="health">Health</option>
                                <option value="diet">Diet</option>
                                <option value="exercise">Exercise</option>
                                <option value="learn">Learn</option>
                                <option value="productivity">Productivity</option>
                            </HabitSelect>
                            <Input
                                label="Goal"
                                type="text"
                                placeholder="What's your goal?"
                                id="habit-goal"
                                handleChange={inputGoal}
                                value={habitState.goal}
                            />
                        </div>
                    </FormColumns>
                    <Button content="Submit" type="submit" color="#355070" handleClick={submitHabit} />
                </form>
            </AddHabitForm>
        </>
    );
};

export default HabitAdd;
