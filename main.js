const codes = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "Delete",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const eng = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "BackSpace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "",
  "Alt",
  "←",
  "↓",
  "→",
  "Ctrl",
];

function init() {
  const textarea = document.createElement("textarea");
  const keyboard = document.createElement("div");

  textarea.classList.add("text-area");
  keyboard.classList.add("keyboard");

  document.body.appendChild(textarea);
  document.body.appendChild(keyboard);
  createKeys(keyboard);
}

class Key {
  constructor(param) {
    this.code = param.code;
    this.eng = param.eng;
  }
}

const keys = [];
codes.map((item, i) => {
  keys[codes[i]] = new Key({
    code: codes[i],
    eng: eng[i],
  });
});

function createKeys(parent) {
  for (let i = 0; i < codes.length; i++) {
    const keyElement = document.createElement("button");
    keyElement.setAttribute("type", "button");
    if (
      codes[i] == "Backspace" ||
      codes[i] == "CapsLock" ||
      codes[i] == "Enter" ||
      codes[i] == "ShiftLeft" ||
      codes[i] == "ControlLeft"
    ) {
      keyElement.classList.add("keyboard__key--wide");
    }

    codes[i] == "Space"
      ? keyElement.classList.add("keyboard__key--extra-wide", "keyboard__key")
      : keyElement.classList.add("keyboard__key");
    keyElement.textContent = keys[codes[i]].eng;
    parent.appendChild(keyElement);
  }
}

window.addEventListener("DOMContentLoaded", init());
