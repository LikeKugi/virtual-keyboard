import Textfield from "./Textfield.js";


export default function (elem, state) {
    const textfield = new Textfield();
    textfield.createState(state);
    elem.addEventListener('keydown', (e) => {
        onPress(e, textfield);
    });
    elem.addEventListener('keyup', (e) => {
        const keyCode = e.code;
        document.querySelector(`#${keyCode}`).classList.remove('active');
        console.log(state.readStorage());
    });
    elem.addEventListener('click', (e) => {
        if (!e.target.closest('.btn')) return;
        onMousePress(e, textfield);
    });
}

function onPress(event, textfield) {
    event.preventDefault();
    const keyCode = event.code;
    textfield.onInput(keyCode);
    const btn = document.querySelector(`#${keyCode}`);
    console.log(btn);
    btn.classList.add('active');
}

function onMousePress(event, textfield) {
    const btn = event.target;
    const keyCode = btn.id;
    textfield.onInput(keyCode);
    // btn.classList.add('active');
}


