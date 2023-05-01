export default function () {
  return {
    readStorage: function () {
      return {
        Lang: localStorage.getItem('Lang'),
        Shift: localStorage.getItem('Shift') === 'true',
        CapsLock: localStorage.getItem('CapsLock') === 'true',
        Alt: localStorage.getItem('Alt') === 'true',
        Ctrl: localStorage.getItem('Ctrl') === 'true',
        Meta: localStorage.getItem('Meta') === 'true',
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