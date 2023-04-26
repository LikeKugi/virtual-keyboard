export default function (elem) {
    console.log(elem);
    elem.insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="display">
      <textarea class="display__area" name="display" id="display" cols="40" rows="10" ></textarea>
    </div>
    <div class="keyboard">
      <div class="keyboard__row row">
        <button class="keyboard__btn btn" id="key192">\`</button>
        <button class="keyboard__btn btn" id="key49">1</button>
        <button class="keyboard__btn btn" id="key50">2</button>
        <button class="keyboard__btn btn" id="key51">3</button>
        <button class="keyboard__btn btn" id="key52">4</button>
        <button class="keyboard__btn btn" id="key53">5</button>
        <button class="keyboard__btn btn" id="key54">6</button>
        <button class="keyboard__btn btn" id="key55">7</button>
        <button class="keyboard__btn btn" id="key56">8</button>
        <button class="keyboard__btn btn" id="key57">9</button>
        <button class="keyboard__btn btn" id="key48">0</button>
        <button class="keyboard__btn btn" id="key189">-</button>
        <button class="keyboard__btn btn" id="key187">=</button>
        <button class="keyboard__btn btn" id="key8">Backspace</button>
      </div>
      <div class="keyboard__row row">
        <button class="keyboard__btn btn" id="key9">Tab</button>
        <button class="keyboard__btn btn" id="key81">q</button>
        <button class="keyboard__btn btn" id="key87">w</button>
        <button class="keyboard__btn btn" id="key69">e</button>
        <button class="keyboard__btn btn" id="key82">r</button>
        <button class="keyboard__btn btn" id="key84">t</button>
        <button class="keyboard__btn btn" id="key89">y</button>
        <button class="keyboard__btn btn" id="key85">u</button>
        <button class="keyboard__btn btn" id="key73">i</button>
        <button class="keyboard__btn btn" id="key79">o</button>
        <button class="keyboard__btn btn" id="key80">p</button>
        <button class="keyboard__btn btn" id="key219">[</button>
        <button class="keyboard__btn btn" id="key221">]</button>
        <button class="keyboard__btn btn" id="key220">\\</button>
      </div>
      <div class="keyboard__row row">
        <button class="keyboard__btn btn" id="key20">CapsLock</button>
        <button class="keyboard__btn btn" id="key65">a</button>
        <button class="keyboard__btn btn" id="key83">s</button>
        <button class="keyboard__btn btn" id="key68">d</button>
        <button class="keyboard__btn btn" id="key70">f</button>
        <button class="keyboard__btn btn" id="key71">g</button>
        <button class="keyboard__btn btn" id="key72">h</button>
        <button class="keyboard__btn btn" id="key74">j</button>
        <button class="keyboard__btn btn" id="key75">k</button>
        <button class="keyboard__btn btn" id="key76">l</button>
        <button class="keyboard__btn btn" id="key186">;</button>
        <button class="keyboard__btn btn" id="key222">'</button>
        <button class="keyboard__btn btn" id="key13">Enter</button>
        <button class="keyboard__btn btn" id="key"></button>
      </div>
      <div class="keyboard__row row">
        <button class="keyboard__btn btn" id="key16">Shift</button>
        <button class="keyboard__btn btn" id="key90">z</button>
        <button class="keyboard__btn btn" id="key88">x</button>
        <button class="keyboard__btn btn" id="key67">c</button>
        <button class="keyboard__btn btn" id="key86">v</button>
        <button class="keyboard__btn btn" id="key66">b</button>
        <button class="keyboard__btn btn" id="key78">n</button>
        <button class="keyboard__btn btn" id="key77">m</button>
        <button class="keyboard__btn btn" id="key188">,</button>
        <button class="keyboard__btn btn" id="key190">.</button>
        <button class="keyboard__btn btn" id="key191">/</button>
        <button class="keyboard__btn btn" id="key16R">Shift</button>
        <button class="keyboard__btn btn" id="key38">↑</button>
        <button class="keyboard__btn btn" id="key"></button>
      </div>
      <div class="keyboard__row row">
        <button class="keyboard__btn btn" id="key17">Ctrl</button>
        <button class="keyboard__btn btn" id="key91">Win</button>
        <button class="keyboard__btn btn" id="key18">Alt</button>
        <button class="keyboard__btn btn" id="key32">Space</button>
        <button class="keyboard__btn btn" id="key18r">Alt</button>
        <button class="keyboard__btn btn" id="key17R">Ctrl</button>
        <button class="keyboard__btn btn" id="key37">←</button>
        <button class="keyboard__btn btn" id="key40">↓</button>
        <button class="keyboard__btn btn" id="key39">→</button>
        <button class="keyboard__btn btn" id="key46">Del</button>
        <button class="keyboard__btn btn"></button>
        <button class="keyboard__btn btn"></button>
        <button class="keyboard__btn btn"></button>
        <button class="keyboard__btn btn"></button>
      </div>
    </div>
  </div>`)
}