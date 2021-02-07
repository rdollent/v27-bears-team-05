import styled from "styled-components";
import { below } from "../utilities";

// Container styled component.

export const Container = styled.div`
    margin: 2rem auto 0;
    padding: 0 2rem;
    max-width: 85rem;

    ${below.s`
  padding: 0;
  width: 90%;
  `}

    ${below.xs`
  width: 92.5%;
  `}
`;
