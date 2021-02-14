import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    changeHabitName, 
    changeHabitType,
    changeHabitFreq,
    changeHabitGoal,
    changeHabitDuration
} from "../actions/habitAddActions";

const HabitAdd = () => {
    const dispatch = useDispatch();
    const habitState = useSelector((state) => state.habitAddReducer);

    const inputName = (e) => dispatch(changeHabitName(e.target.value));
    const inputType = (e) => dispatch(changeHabitType(e.target.value));
    const inputFreq = (e) => dispatch(changeHabitFreq(e.target.value));
    const inputGoal = (e) => dispatch(changeHabitGoal(e.target.value));
    const inputDuration = (e) => dispatch(changeHabitDuration(e.target.value));

    let url = '';


    const submitHabit = (e) => {
        e.preventDefault();
        console.log(habitState);

        // fetch
        fetch(url, {
            method: 'POST',
            body: habitState,
            headers: { 'Content-type': 'application/json' }
            })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => {
            throw new Error(err);
        })
    }

    return (
        <div>
            <form id="habit-add">
                <label for="habit-name">Name</label>
                <input id="habit-name" placeholder="Do some situps" onChange={inputName}></input>
                <label for="habit-type">Type</label>
                <select id="habit-type" onChange={inputType}>
                    <option selected disabled hidden value="">Select type</option>
                    <option value="health">Health</option>
                    <option value="diet">Diet</option>
                    <option value="exercise">Exercise</option>
                    <option value="learn">Learn</option>
                    <option value="productivity">Productivity</option>
                </select>
                <label for="habit-freq">Frequency</label>
                <select id="habit-freq" onChange={inputFreq}>
                    <option selected disabled hidden value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <label for="habit-goal">Goal</label>
                <input id="habit-goal" placeholder="100 situps" onChange={inputGoal}></input>
                <label for="habit-duration">Duration</label>
                <select id="habit-duration" onChange={inputDuration}>
                    <option selected disabled hidden value="">Select duration</option>
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
                </select>
                <button type="submit" onClick={submitHabit}>Submit</button>
            </form>
        </div>
    );
};

export default HabitAdd;
