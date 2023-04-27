let i = 48;
const VALUABLE_BUTTONS = new Set();
[...Array(10)].map(el => i++).forEach(el => VALUABLE_BUTTONS.add(el));
i = 65;
[...Array(26)].map(el => i++).forEach(el => VALUABLE_BUTTONS.add(el));
[192, 189, 187, 219, 221, 220, 186, 222, 188, 190, 191].forEach(el => VALUABLE_BUTTONS.add(el))

export default function (elem) {
    console.log(VALUABLE_BUTTONS);
    elem.addEventListener('keydown', (e) => {
        e.preventDefault();
        const keyCode = e.code;
        console.log(keyCode);
        const btn = document.querySelector(`#${keyCode}`);
        btn.classList.add('active');
        // if (!VALUABLE_BUTTONS.has(keyCode)) return;
        const textArea = document.querySelector('.display__area');
        const startPosition = textArea.selectionStart;
        console.log(startPosition);
        const endPosition = textArea.selectionEnd;
        console.log(endPosition);
        if (keyCode === 13) {
            textArea.value += '\r\n';
            return;
        }
        textArea.value += btn.textContent;
    });
    elem.addEventListener('keyup', (e) => {
        const keyCode = e.code;
        console.log(keyCode);
        document.querySelector(`#${keyCode}`).classList.remove('active');
    });
}