import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faHeart, faUtensils, faLaptopHouse, faGraduationCap, faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import { CardContainer } from "../styled_components/styled.js";

const HabitCard = ( { item, handleClick, img, custom=false, category }) => {

    const categoryIcons = {
        Exercise: faRunning,
        Health: faHeart,
        Productivity: faLaptopHouse,
        Diet: faUtensils,
        Learn: faGraduationCap,
    }

    // console.log( categoryIcons, category, categoryIcons[category])
    return (
        <CardContainer className={ custom && 'custom' }
            key={ item }
            onClick={ handleClick }
            img={ img }
            custom={ custom }
            data-category={category} 
            >
            <FontAwesomeIcon className="icon" icon={ custom ? faPlus : categoryIcons[category]} />
            <span className="item-text">{ custom ? 'Add Your Own' : item }</span>   
        </CardContainer>
    );
};

export default HabitCard;
