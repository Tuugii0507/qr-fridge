import style from "styled-components";

export const Stack = style.div`
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap};
    width:${({ width }) => width};
    height:${({ height }) => height};
    flex-direction:${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items:${({ alignItems }) => alignItems};
    gap: ${({ gap }) => gap}px;
    background-color: ${({ bg }) => bg};
    cursor:${({ cursor }) => cursor};
    backdrop-filter: blur(${({ blur }) => blur});
    text-align:${({ textAlign }) => textAlign};
    border-radius: ${({ borderRadius }) => borderRadius};
    overflow-x: ${({ overFlowX }) => overFlowX}
    overflow-y: ${({ overFlowY }) => overFlowY}
`;
