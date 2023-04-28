export default class Textfield {
    VALUABLE_BUTTONS;
    STATE_BUTTONS;

    constructor(field = '#display') {
        this.field = document.querySelector(field);
        this.content = [];
        this.insertMode = false;
        this.VALUABLE_BUTTONS = this.#createValuableButtons();
        this.STATE_BUTTONS = this.#createStateButtons();
        this.Lang = 'Eng';
        this.Shift = false;
        this.CapsLock = false;
        this.Alt = false;
        this.Ctrl = false;
        this.Meta = false;
    }

    createState(state) {
        this.state = state;
        this.pushState();
    }

    pushState() {
        this.state.writeStorage(this.Lang, this.Shift, this.CapsLock, this.Alt, this.Ctrl, this.Meta);
    }

    getContent() {
        return this.content.join('');
    }

    push(value, position = this.content.length - 1) {
        console.log('pushing', value)
        if (position === this.content.length - 1) {
            this.content.push(value);
        } else if (this.insertMode) {
            this.content[position + 1] = value;
        } else {
            this.content = this.content.splice(position, 0, value);
        }
        return this.getContent();
    }

    del(position) {
        this.content = this.content.splice(position, 1);
        return this.getContent();
    }

    backspace(position) {
        this.content = this.content.splice(position - 1, 1);
        return this.getContent();
    }

    insert() {
        this.insertMode = !this.insertMode;
    }

    onInput(keyCode) {
        if (this.VALUABLE_BUTTONS.has(keyCode)) {
            // console.log(keyCode, this.content.length - 1);
            // console.log(this.content);
            // console.log(this.VALUABLE_BUTTONS.get(keyCode));
            const pushing = this.VALUABLE_BUTTONS.get(keyCode)[this.Lang];
            // console.log(pushing);
            this.field.value = this.push(pushing);
        } else if (this.STATE_BUTTONS.has(keyCode)) {
            const metaInfo = this.STATE_BUTTONS.get(keyCode);
            // console.log(this[metaInfo]);
            this[metaInfo] = !this[metaInfo];
            this.pushState();
        }
    }

    #createValuableButtons() {
        return createMap();
        // const out = new Set();
        // ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',
        //     'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'].forEach(el => out.add(el));
        // ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI',
        //     'KeyO', 'KeyP', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',
        //     'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB',
        //     'KeyN', 'KeyM', 'BracketLeft', 'BracketRight', 'Backslash',
        //     'Semicolon', 'Quote', 'Comma', 'Period', 'Slash',
        // ].forEach(el => out.add(el));
        // return out;
    }

    #createStateButtons() {
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
}

function createMap() {
    const out = new Map();
    const valuables = {
        Backquote: {
            Eng: '`',
            Rus: 'ё',
            ShiftEng: '~',
            ShiftRus: 'Ё',
            CapsLockEng: '`',
            CapsLockRus: 'Ё',
        },
        Digit0: {
            Eng: '0',
            Rus: '0',
            ShiftEng: ')',
            ShiftRus: ')',
            CapsLockEng: '0',
            CapsLockRus: '0',
        },
        Digit1: {
            Eng: '1',
            Rus: '1',
            ShiftEng: '!',
            ShiftRus: '!',
            CapsLockEng: '1',
            CapsLockRus: '1',
        },
        Digit2: {
            Eng: '2',
            Rus: '2',
            ShiftEng: '@',
            ShiftRus: '"',
            CapsLockEng: '2',
            CapsLockRus: '2',
        },
        Digit3: {
            Eng: '3',
            Rus: '3',
            ShiftEng: '#',
            ShiftRus: '№',
            CapsLockEng: '3',
            CapsLockRus: '3',
        },
        Digit4: {
            Eng: '4',
            Rus: '4',
            ShiftEng: '$',
            ShiftRus: ';',
            CapsLockEng: '4',
            CapsLockRus: '4',
        },
        Digit5: {
            Eng: '5',
            Rus: '5',
            ShiftEng: '%',
            ShiftRus: '%',
            CapsLockEng: '5',
            CapsLockRus: '5',
        },
        Digit6: {
            Eng: '6',
            Rus: '6',
            ShiftEng: '^',
            ShiftRus: ':',
            CapsLockEng: '6',
            CapsLockRus: '6',
        },
        Digit7: {
            Eng: '7',
            Rus: '7',
            ShiftEng: '&',
            ShiftRus: '?',
            CapsLockEng: '7',
            CapsLockRus: '7',
        },
        Digit8: {
            Eng: '8',
            Rus: '8',
            ShiftEng: '*',
            ShiftRus: '*',
            CapsLockEng: '8',
            CapsLockRus: '8',
        },
        Digit9: {
            Eng: '9',
            Rus: '9',
            ShiftEng: '(',
            ShiftRus: '(',
            CapsLockEng: '9',
            CapsLockRus: '9',
        },
        Minus: {
            Eng: '-',
            Rus: '-',
            ShiftEng: '_',
            ShiftRus: '_',
            CapsLockEng: '-',
            CapsLockRus: '-',
        },
        Equal: {
            Eng: '=',
            Rus: '=',
            ShiftEng: '+',
            ShiftRus: '+',
            CapsLockEng: '=',
            CapsLockRus: '=',
        },
        KeyA: {
            Eng: 'a',
            Rus: 'ф',
            ShiftEng: 'A',
            ShiftRus: 'Ф',
            CapsLockEng: 'A',
            CapsLockRus: 'Ф',
        },
        KeyB: {
            Eng: 'b',
            Rus: 'и',
            ShiftEng: 'B',
            ShiftRus: 'И',
            CapsLockEng: 'B',
            CapsLockRus: 'И',
        },
        KeyC: {
            Eng: 'c',
            Rus: 'с',
            ShiftEng: 'C',
            ShiftRus: 'С',
            CapsLockEng: 'C',
            CapsLockRus: 'С',
        },
        KeyD: {
            Eng: 'd',
            Rus: 'в',
            ShiftEng: 'D',
            ShiftRus: 'В',
            CapsLockEng: 'D',
            CapsLockRus: 'В',
        },
        KeyE: {
            Eng: 'e',
            Rus: 'у',
            ShiftEng: 'E',
            ShiftRus: 'У',
            CapsLockEng: 'E',
            CapsLockRus: 'У',
        },
        KeyF: {
            Eng: 'f',
            Rus: 'а',
            ShiftEng: 'F',
            ShiftRus: 'А',
            CapsLockEng: 'F',
            CapsLockRus: 'А',
        },
        KeyG: {
            Eng: 'g',
            Rus: 'п',
            ShiftEng: 'G',
            ShiftRus: 'П',
            CapsLockEng: 'G',
            CapsLockRus: 'П',
        },
        KeyH: {
            Eng: 'h',
            Rus: 'р',
            ShiftEng: 'H',
            ShiftRus: 'Р',
            CapsLockEng: 'H',
            CapsLockRus: 'Р',
        },
        KeyI: {
            Eng: 'i',
            Rus: 'ш',
            ShiftEng: 'I',
            ShiftRus: 'Ш',
            CapsLockEng: 'I',
            CapsLockRus: 'Ш',
        },
        KeyJ: {
            Eng: 'j',
            Rus: 'о',
            ShiftEng: 'J',
            ShiftRus: 'О',
            CapsLockEng: 'J',
            CapsLockRus: 'О',
        },
        KeyK: {
            Eng: 'k',
            Rus: 'л',
            ShiftEng: 'K',
            ShiftRus: 'Л',
            CapsLockEng: 'K',
            CapsLockRus: 'Л',
        },
        KeyL: {
            Eng: 'l',
            Rus: 'д',
            ShiftEng: 'L',
            ShiftRus: 'Д',
            CapsLockEng: 'L',
            CapsLockRus: 'Д',
        },
        KeyM: {
            Eng: 'm',
            Rus: 'ь',
            ShiftEng: 'M',
            ShiftRus: 'Ь',
            CapsLockEng: 'M',
            CapsLockRus: 'Ь',
        },
        KeyN: {
            Eng: 'n',
            Rus: 'т',
            ShiftEng: 'N',
            ShiftRus: 'Т',
            CapsLockEng: 'N',
            CapsLockRus: 'Т',
        },
        KeyO: {
            Eng: 'o',
            Rus: 'щ',
            ShiftEng: 'O',
            ShiftRus: 'Щ',
            CapsLockEng: 'O',
            CapsLockRus: 'Щ',
        },
        KeyP: {
            Eng: 'p',
            Rus: 'з',
            ShiftEng: 'P',
            ShiftRus: 'З',
            CapsLockEng: 'P',
            CapsLockRus: 'З',
        },
        KeyQ: {
            Eng: 'q',
            Rus: 'й',
            ShiftEng: 'Q',
            ShiftRus: 'Й',
            CapsLockEng: 'Q',
            CapsLockRus: 'Й',
        },
        KeyR: {
            Eng: 'r',
            Rus: 'к',
            ShiftEng: 'R',
            ShiftRus: 'К',
            CapsLockEng: 'R',
            CapsLockRus: 'К',
        },
        KeyS: {
            Eng: 's',
            Rus: 'ы',
            ShiftEng: 'S',
            ShiftRus: 'Ы',
            CapsLockEng: 'S',
            CapsLockRus: 'Ы',
        },
        KeyT: {
            Eng: 't',
            Rus: 'е',
            ShiftEng: 'T',
            ShiftRus: 'Е',
            CapsLockEng: 'T',
            CapsLockRus: 'Е',
        },
        KeyU: {
            Eng: 'u',
            Rus: 'г',
            ShiftEng: 'U',
            ShiftRus: 'Г',
            CapsLockEng: 'U',
            CapsLockRus: 'Г',
        },
        KeyV: {
            Eng: 'v',
            Rus: 'м',
            ShiftEng: 'V',
            ShiftRus: 'М',
            CapsLockEng: 'V',
            CapsLockRus: 'М',
        },
        KeyW: {
            Eng: 'w',
            Rus: 'ц',
            ShiftEng: 'W',
            ShiftRus: 'Ц',
            CapsLockEng: 'W',
            CapsLockRus: 'Ц',
        },
        KeyX: {
            Eng: 'x',
            Rus: 'ч',
            ShiftEng: 'X',
            ShiftRus: 'Ч',
            CapsLockEng: 'X',
            CapsLockRus: 'Ч',
        },
        KeyY: {
            Eng: 'y',
            Rus: 'н',
            ShiftEng: 'Y',
            ShiftRus: 'Н',
            CapsLockEng: 'Y',
            CapsLockRus: 'Н',
        },
        KeyZ: {
            Eng: 'z',
            Rus: 'я',
            ShiftEng: 'Z',
            ShiftRus: 'Я',
            CapsLockEng: 'Z',
            CapsLockRus: 'Я',
        },
        Semicolon: {
            Eng: ';',
            Rus: 'ж',
            ShiftEng: ':',
            ShiftRus: 'Ж',
            CapsLockEng: ';',
            CapsLockRus: 'Ж',
        },
        Quote: {
            Eng: "'",
            Rus: 'э',
            ShiftEng: '"',
            ShiftRus: 'Э',
            CapsLockEng: "'",
            CapsLockRus: 'Э',
        },
        Comma: {
            Eng: ',',
            Rus: 'б',
            ShiftEng: '<',
            ShiftRus: 'Б',
            CapsLockEng: ',',
            CapsLockRus: 'Б',
        },
        Period: {
            Eng: '.',
            Rus: 'ю',
            ShiftEng: '>',
            ShiftRus: 'Ю',
            CapsLockEng: '.',
            CapsLockRus: 'Ю',
        },
        Slash: {
            Eng: '/',
            Rus: '.',
            ShiftEng: '?',
            ShiftRus: ',',
            CapsLockEng: '/',
            CapsLockRus: '.',
        },
        BracketLeft: {
            Eng: '[',
            Rus: 'х',
            ShiftEng: '{',
            ShiftRus: 'Х',
            CapsLockEng: '[',
            CapsLockRus: 'Х',
        },
        BracketRight: {
            Eng: ']',
            Rus: 'ъ',
            ShiftEng: '}',
            ShiftRus: 'Ъ',
            CapsLockEng: ']',
            CapsLockRus: 'Ъ',
        },
        Backslash: {
            Eng: '\\',
            Rus: '\\',
            ShiftEng: '|',
            ShiftRus: '/',
            CapsLockEng: '\\',
            CapsLockRus: '\\',
        },
        Tab: {
            Eng: '\t',
            Rus: '\t',
            ShiftEng: '\t',
            ShiftRus: '\t',
            CapsLockEng: '\t',
            CapsLockRus: '\t',
        },
        Space: {
            Eng: ' ',
            Rus: ' ',
            ShiftEng: ' ',
            ShiftRus: ' ',
            CapsLockEng: ' ',
            CapsLockRus: ' ',
        },
        Enter: {
            Eng: '\r\n',
            Rus: '\r\n',
            ShiftEng: '\r\n',
            ShiftRus: '\r\n',
            CapsLockEng: '\r\n',
            CapsLockRus: '\r\n',
        },
    }
    for (const key in valuables) {
        out.set(key, valuables[key]);
    }
    return out;
}