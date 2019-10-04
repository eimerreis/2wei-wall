import React, { useState, useEffect } from "react";
import {Flex, Box} from "reflexbox";

import { AutomationButton } from "./AutomationButton";

import { Automations, AutomationMappings } from "../automations/index";

export const RemoteControl = () => {
    const [activeAutomation, setActiveAutomation] = useState<Automations>();
    const [stopAutomation, setStopAutomation] = useState(false);
    const [isAutomationRunning, setIsAutomationRunning] = useState(false);

    const onAutomationClick = (automation: Automations) => {
        // 2nd click on button => stop automation
        if(automation === activeAutomation) {
            setStopAutomation(true);
            setActiveAutomation(undefined);
        } else {
            setStopAutomation(false);
            setActiveAutomation(automation);
        }
    }

    useEffect(() => {
        if(!isAutomationRunning && !stopAutomation && activeAutomation !== undefined) {
            AutomationMappings[activeAutomation]().then(x => setIsAutomationRunning(false));
            setIsAutomationRunning(true);
        }
    });


    return ( 
        <Flex flexWrap="wrap">
            <Box width={[1]}>
                <h2>Automationen</h2>
                <AutomationButton running={activeAutomation === Automations.HomePlayers} onClick={(event) => onAutomationClick(Automations.HomePlayers)}>TVR Players</AutomationButton>
            </Box> 
        </Flex>
    );
}