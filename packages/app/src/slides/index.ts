import { Home } from "./Home";
import { WelcomeSlide } from "./Welcome";
import { PlayersSlide } from "./Players";

export const Slides = [
    {
        id: "home",
        component: Home,
    },
    {
        id: "welcome",
        component: WelcomeSlide
    },
    {
        id: "players",
        component: PlayersSlide
    }
]