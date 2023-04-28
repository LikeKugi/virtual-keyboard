// import Textfield from "./Textfield.js";
import insertKeyboard from "./insertKeyboard.js";
import keyboardEvents from "./keyboardEvents.js";
import storage from "./storage.js";

const body = document.querySelector("body");
const state = storage();

insertKeyboard(body);
keyboardEvents(body, state);
