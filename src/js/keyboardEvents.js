import Textfield from "./Textfield.js";
import renderingKeyboard from "./renderingKeyboard.js";


export default function (elem, state) {
    const buttonsStates = _createStateButtons();
    activateStateButtons(state, buttonsStates);
    const textfield = new Textfield(state, state.readStorage());
    renderingKeyboard(state);
    elem.addEventListener('keydown', (e) => {
        const keyboardButtons = getKeyboardButtons();
        const keyCode = e.code;
        if (!keyboardButtons.has(keyCode)) {
            e.preventDefault();
            return;
        }
        onPress(e, textfield);
        renderingKeyboard(state);
    });
    elem.addEventListener('keyup', (e) => {
        const keyboardButtons = getKeyboardButtons();
        const keyCode = e.code;
        if (!keyboardButtons.has(keyCode)) {
            e.preventDefault();
            return;
        }
        onKeyup(e, textfield);
        activateStateButtons(state, buttonsStates);
        renderingKeyboard(state);
    });
    elem.addEventListener('click', (e) => {
        if (!e.target.closest('.btn')) return;
        onMousePress(e, textfield);
        activateStateButtons(state, buttonsStates);
        renderingKeyboard(state);
    });
}

function onPress(event, textfield) {
    const keyCode = event.code;
    event.preventDefault();
    textfield.onInput(keyCode);
    const btn = document.querySelector(`#${keyCode}`);
    btn.classList.add('active');
}

function onKeyup(event, textfield) {
    event.preventDefault();
    const keyCode = event.code;
    textfield.checkUpStates(keyCode);
    const btn = document.querySelector(`#${keyCode}`);
    btn.classList.remove('active');
}

function onMousePress(event, textfield) {
    const btn = event.target;
    const keyCode = btn.id;
    textfield.onInput(keyCode);
}

function activateStateButtons(state, buttons) {
    buttons.forEach((k, v) => {
        if (state.readStorage()[k]) {
            document.querySelector(`#${v}`).classList.add('active');
        } else {
            document.querySelector(`#${v}`).classList.remove('active');
        }
    })
}

function _createStateButtons() {
    return new Map([
        ['CapsLock', 'CapsLock'],
        ['ShiftLeft', 'Shift'],
        ['ShiftRight', 'Shift'],
        ['ControlLeft', 'Ctrl'],
        ['ControlRight', 'Ctrl'],
        ['AltLeft', 'Alt'],
        ['AltRight', 'Alt'],
        ['MetaLeft', 'Meta']
    ]);
}

function getKeyboardButtons() {
    const out = new Set();
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => out.add(btn.id));
    return out;
}