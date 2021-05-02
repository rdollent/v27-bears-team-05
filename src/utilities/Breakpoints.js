import { css } from "styled-components";

const size = {
    xs: 480,
    s: 768,
    m: 1024,
    l: 1200,
};

/**
 *  Since styled components doesn't naturally allow you to put in breakpoints,
 *  for CSS, you can use this as a method to implement CSS properties if the
 *  device width is below one of the breakpoints listed above. For an example,
 *  see the container component.
 */

export const below = Object.keys(size).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});
