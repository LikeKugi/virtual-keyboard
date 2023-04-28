export default function () {
    return {
        readStorage: function () {
            return {
                Lang: localStorage.getItem('Lang'),
                Shift: localStorage.getItem('Shift'),
                CapsLock: localStorage.getItem('CapsLock'),
                Alt: localStorage.getItem('Alt'),
                Ctrl: localStorage.getItem('Ctrl'),
                Meta: localStorage.getItem('Meta'),
            }
        },
        writeStorage: function (Lang, Shift, CapsLock, Alt, Ctrl, Meta) {
            localStorage.setItem('Lang', Lang);
            localStorage.setItem('Shift', Shift);
            localStorage.setItem('CapsLock', CapsLock);
            localStorage.setItem('Alt', Alt);
            localStorage.setItem('Ctrl', Ctrl);
            localStorage.setItem('Meta', Meta);
        }
    }
}