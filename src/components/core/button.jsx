import style from "styled-components";

export const Button = style.button`
    display: flex;
    width:${({ width }) => width};
    height:${({ height }) => height};
    justify-content: center;
    align-items: center;
    gap: ${({ gap }) => gap}px;
    background-color: ${({ bg }) => bg};
    border: 1px solid ${({ border }) => border};
    backdrop-filter: blur(${({ blur }) => blur});
    border-radius: ${({ borderRadius }) => borderRadius};
    color: ${({ color }) => color};
    cursor: pointer;
`;
