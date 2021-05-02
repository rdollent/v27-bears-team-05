import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { below } from "../../utilities";
import { whichModalAction } from "../../actions/modalActions";
import { loadHabit } from "../../actions/habitAddActions";
import HabitCard from '../General/HabitCard';
import { AddHabitContainer, Header, HeaderLeft, ListItem, CardsContainer } from "../../styled_components/styled";


const Preset = () => {
    const [preset, setPreset] = useState("All");
    const dispatch = useDispatch();
    const openModal = (modal, e, category) => {
        if (preset !== "custom") {
            dispatch(loadHabit({ name: e.target.innerText, category: category}));
        }
        dispatch(whichModalAction(modal));
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
