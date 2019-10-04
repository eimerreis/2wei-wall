import { HomePlayersAutomation } from './HomePlayers';

type AutomationMapping = {
    [key in Automations]: () => Promise<any>;
}

export const AutomationMappings: AutomationMapping = {
    "HomePlayers": HomePlayersAutomation,
}

export enum Automations {
    HomePlayers = "HomePlayers"
} 