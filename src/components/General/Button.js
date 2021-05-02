import React from 'react'
import { ButtonContainer } from "../../styled_components/styled";



const Button = ({ color="black", font="white", handleClick, content, fontWeight='normal', width="50px", padding="12px 30px" }) => {
    return (
        <ButtonContainer type="button" color={color} font={font} onClick={handleClick} fontWeight={fontWeight} width={width} padding={padding}>
            {content}
        </ButtonContainer>
    )
}

export default Button
