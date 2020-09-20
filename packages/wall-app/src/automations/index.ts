import { HomePlayersAutomation } from './HomePlayers';
import { ResultsAutomation } from './ResultsAutomation';
import { AllAutomation } from './AllAutomation';

type AutomationMapping = {
    [key in Automations]: () => Promise<any>;
}

export const AutomationMappings: AutomationMapping = {
    "HomePlayers": HomePlayersAutomation,
    "Results": ResultsAutomation,
    "All": AllAutomation,
}

export enum Automations {
    All = "All",
    HomePlayers = "HomePlayers",
    Results = "Results"
} 