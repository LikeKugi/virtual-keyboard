export default function (elem) {
    elem.insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="display">
      <h1 class="display__title"><label for="display">Virtual Keyboard Display</label></h1>
      <textarea class="display__area" name="display" id="display" cols="50" rows="10" autofocus></textarea>
    </div>
    <div class="keyboard">
      <div class="keyboard__row row row--digit">
        <button class="keyboard__btn btn" id="Backquote">\`</button>
        <button class="keyboard__btn btn" id="Digit1">1</button>
        <button class="keyboard__btn btn" id="Digit2">2</button>
        <button class="keyboard__btn btn" id="Digit3">3</button>
        <button class="keyboard__btn btn" id="Digit4">4</button>
        <button class="keyboard__btn btn" id="Digit5">5</button>
        <button class="keyboard__btn btn" id="Digit6">6</button>
        <button class="keyboard__btn btn" id="Digit7">7</button>
        <button class="keyboard__btn btn" id="Digit8">8</button>
        <button class="keyboard__btn btn" id="Digit9">9</button>
        <button class="keyboard__btn btn" id="Digit0">0</button>
        <button class="keyboard__btn btn" id="Minus">-</button>
        <button class="keyboard__btn btn" id="Equal">=</button>
        <button class="keyboard__btn btn btn--meta" id="Backspace">Backspace</button>
      </div>
      <div class="keyboard__row row row--tab">
        <button class="keyboard__btn btn btn--meta" id="Tab">Tab</button>
        <button class="keyboard__btn btn" id="KeyQ">q</button>
        <button class="keyboard__btn btn" id="KeyW">w</button>
        <button class="keyboard__btn btn" id="KeyE">e</button>
        <button class="keyboard__btn btn" id="KeyR">r</button>
        <button class="keyboard__btn btn" id="KeyT">t</button>
        <button class="keyboard__btn btn" id="KeyY">y</button>
        <button class="keyboard__btn btn" id="KeyU">u</button>
        <button class="keyboard__btn btn" id="KeyI">i</button>
        <button class="keyboard__btn btn" id="KeyO">o</button>
        <button class="keyboard__btn btn" id="KeyP">p</button>
        <button class="keyboard__btn btn" id="BracketLeft">[</button>
        <button class="keyboard__btn btn" id="BracketRight">]</button>
        <button class="keyboard__btn btn" id="Backslash">\\</button>
      </div>
      <div class="keyboard__row row row--caps">
        <button class="keyboard__btn btn btn--meta" id="CapsLock">CapsLock</button>
        <button class="keyboard__btn btn" id="KeyA">a</button>
        <button class="keyboard__btn btn" id="KeyS">s</button>
        <button class="keyboard__btn btn" id="KeyD">d</button>
        <button class="keyboard__btn btn" id="KeyF">f</button>
        <button class="keyboard__btn btn" id="KeyG">g</button>
        <button class="keyboard__btn btn" id="KeyH">h</button>
        <button class="keyboard__btn btn" id="KeyJ">j</button>
        <button class="keyboard__btn btn" id="KeyK">k</button>
        <button class="keyboard__btn btn" id="KeyL">l</button>
        <button class="keyboard__btn btn" id="Semicolon">;</button>
        <button class="keyboard__btn btn" id="Quote">'</button>
        <button class="keyboard__btn btn btn--meta" id="Enter">Enter</button>
      </div>
      <div class="keyboard__row row row--shift">
        <button class="keyboard__btn btn btn--meta" id="ShiftLeft">Shift</button>
        <button class="keyboard__btn btn" id="KeyZ">z</button>
        <button class="keyboard__btn btn" id="KeyX">x</button>
        <button class="keyboard__btn btn" id="KeyC">c</button>
        <button class="keyboard__btn btn" id="KeyV">v</button>
        <button class="keyboard__btn btn" id="KeyB">b</button>
        <button class="keyboard__btn btn" id="KeyN">n</button>
        <button class="keyboard__btn btn" id="KeyM">m</button>
        <button class="keyboard__btn btn" id="Comma">,</button>
        <button class="keyboard__btn btn" id="Period">.</button>
        <button class="keyboard__btn btn" id="Slash">/</button>
        <button class="keyboard__btn btn btn--meta" id="ShiftRight">Shift</button>
        <button class="keyboard__btn btn" id="ArrowUp">↑</button>
        <button class="keyboard__btn btn btn--meta" id="Delete">Del</button>
      </div>
      <div class="keyboard__row row row--ctrl">
        <button class="keyboard__btn btn btn--meta" id="ControlLeft">Ctrl</button>
        <button class="keyboard__btn btn btn--meta" id="MetaLeft">Win</button>
        <button class="keyboard__btn btn btn--meta" id="AltLeft">Alt</button>
        <button class="keyboard__btn btn btn--meta" id="Space">Space</button>
        <button class="keyboard__btn btn btn--meta" id="AltRight">Alt</button>
        <button class="keyboard__btn btn btn--meta" id="ControlRight">Ctrl</button>
        <button class="keyboard__btn btn" id="ArrowLeft">←</button>
        <button class="keyboard__btn btn" id="ArrowDown">↓</button>
        <button class="keyboard__btn btn" id="ArrowRight">→</button>
      </div>
    </div>
    <div class="help">
    <ul class="help__list">
      <li class="help__item">Ctrl + Alt to change the language</li>
    </ul>
    </div>
  </div>`)
}