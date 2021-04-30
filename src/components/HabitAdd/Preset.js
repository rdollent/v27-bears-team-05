import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { below } from "./../../elements/utilities";
import { whichModalAction } from "./../../actions/modalActions.js";
import { loadHabit } from "./../../actions/habitAddActions";
import HabitCard from './../HabitCard.js';

const AddHabitContainer = styled.div`
    height: 90%;
    width: 90%;

    h1 {
        text-align: center;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    ${below.xs`
      flex-direction: column;
    `}
`;

const HeaderLeft = styled.div`
    display: flex;
    padding-right: 15px;

    > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        align-items: center;
        align-self: flex-end;
        padding-bottom: 5px;
        flex-wrap: wrap;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    padding-right: 25px;
    font-weight: ${(props) => (props.preset ? "bold" : "normal")};
    color: ${(props) => (props.preset ? "black" : "#8f8d8d")};
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    max-height: 80%;
`;

const Preset = () => {
    const [preset, setPreset] = useState("All");
    const dispatch = useDispatch();
    const openModal = (modal, e, category) => {
        if (preset !== "custom") {
            dispatch(loadHabit({ name: e.target.innerText, category: category.toLowerCase()}));
        }
        setTimeout(dispatch(whichModalAction(modal)), 1000);
        
        console.log('this is the category clicked', category);
    };

    const categories = ["All", "Health", "Diet", "Learn", "Exercise", "Productivity", "Custom"];

    const categoriesList = categories.map((item) => (
        <ListItem key={item} onClick={(e) => setPreset(e.target.innerText)} preset={preset === item}>
            {item}
        </ListItem>
    ));

    const categoryItems = {
        Health: {
            items: ["Meditate", "Take multivitamins", "De-stress"],
        },
        Diet: {
            items: ["Eat brocolli", "Drink coconut juice", "Count calories"],
        },
        Learn: {
            items: ["Study python", "Learn how to knit", "Learn how to draw"],
        },
        Exercise: {
            items: ["Do some situps", "Try yoga poses", "Run 5k"],
        },
        Productivity: {
            items: ["Make your bed", "Study 8pm everyday", "Finish work by 1pm"],
        },
    };

    console.log( 'CATEGORIES', categoryItems['Health'])

    return (
        <AddHabitContainer>
            <h1>Pick a Habit</h1>
            <Header>
                <HeaderLeft className="header-left">
                    <ul>{categoriesList}</ul>
                </HeaderLeft>
                {/* <HeaderRight>Filter</HeaderRight> */}
            </Header>
            <CardsContainer>
                {preset === "Custom" ? (
                    <HabitCard custom={true} handleClick={(e) => openModal("habitAdd", e, "custom")} />
                ) : preset === "All" ? (
                    Object.keys(categoryItems).map((category) =>
                        categoryItems[category].items.map((item) => (
                            <HabitCard
                                key={item}
                                handleClick={(e) => openModal("habitAdd", e, category)}
                                category={category}
                                item={item} />
                        ))
                    )
                ) : (
                    categoryItems[preset].items.map((item) => (
                        <HabitCard
                            key={item}
                            handleClick={(e) => openModal("habitAdd", e, preset)}
                            category={preset}
                            item={item} />
                    ))
                )}
            </CardsContainer>
        </AddHabitContainer>
    );
};

export default Preset;
