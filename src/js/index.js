
import Textfield from "./Textfield.js";
import insertKeyboard from "./insertKeyboard.js";
import keyboardEvents from "./keyboardEvents.js";

const body = document.querySelector("body");
insertKeyboard(body);

const textfield = new Textfield('.display__area')

keyboardEvents(body);
