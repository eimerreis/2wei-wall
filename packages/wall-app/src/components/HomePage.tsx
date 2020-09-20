import React from "react";
import { Provider, defaultTheme, Header, Heading, Button, View, Flex } from "@adobe/react-spectrum";
import styled from "styled-components";
import { AutomationButton } from "./AutomationButton";

const Container = styled.div`
    max-width: 960px;
    padding: 1rem;

    display: flex;
    justify-content: center;
`;

export const HomePage: React.FC = ({ }) => {

    return (
        <Provider theme={defaultTheme}>
            <Container>
                <Header><Heading level={1}>Components</Heading></Header>
                <Flex direction="row" height="size-800" gap="size-100">
                </Flex>
            </Container>
        </Provider>
    )
}