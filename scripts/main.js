import { InitializePages,ChangePage } from "./script_pages/main";
import {InitializeSwords,serviceSwords} from "./swords/main.js";
import { SectionUserData } from "./userData/main.js";



const userData = new SectionUserData("Player1");
InitializePages();
InitializeSwords();