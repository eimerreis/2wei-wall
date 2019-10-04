import styled from "styled-components";

export const AutomationButton = styled.button<{ running: boolean }>`
    width: 50%;
    height: 62px;
    background: rgba(0,0,0,0.04);
    border: 2px solid rgba(0,0,0,0.04);
    font-size: 18pt;
    font-weight: bold;

    ${(props) => props.running ? `
        background: green;
    ` : ``}
`;