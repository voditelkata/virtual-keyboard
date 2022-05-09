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

const ru = [
  "ё",
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
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Del",
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "Shift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
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

const engShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "BackSpace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "Del",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
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

const ruShift = [
  "Ё",
  "!",
  '"',
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "BackSpace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "/",
  "Del",
  "CapsLock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ",",
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

const engCaps = [
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
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "Del",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
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

const ruCaps = [
  "Ё",
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
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "\\",
  "Del",
  "CapsLock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ".",
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

const textarea = document.createElement("textarea");
const keyboard = document.createElement("div");

textarea.classList.add("text-area");
keyboard.classList.add("keyboard");

document.body.appendChild(textarea);
document.body.appendChild(keyboard);

// class Key {
//   constructor(param) {
//     this.code = param.code;
//     this.eng = param.eng;
//   }
// }

// const keys = [];
// codes.map((item, i) => {
//   keys[codes[i]] = new Key({
//     code: codes[i],
//     eng: eng[i],
//   });
// });

function createKeys(chars) {
  document.body.querySelector(".keyboard").innerHTML = "";
  for (let i = 0; i < codes.length; i++) {
    const keyElement = document.createElement("button");
    keyElement.setAttribute("type", "button");
    keyElement.setAttribute("data", `${codes[i]}`);
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
    keyElement.textContent = chars[i];
    document.body.querySelector(".keyboard").appendChild(keyElement);
  }
}

createKeys(eng);

let isCapsActive = false;
let ruLang = false;

document.addEventListener("keydown", (event) => {
  // event.preventDefault();
  const btn = selectButton(event.code);
  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    !ruLang ? createKeys(engShift) : createKeys(ruShift);
  }
  if (event.code == "CapsLock") {
    if (isCapsActive) {
      !ruLang ? createKeys(eng) : createKeys(ru);
    } else {
      !ruLang ? createKeys(engCaps) : createKeys(ruCaps);
    }
    isCapsActive = !isCapsActive;
  }
});

document.addEventListener("keyup", (event) => {
  // event.preventDefault();
  const btn = document.querySelector(`button[data=${event.code}]`);
  btn.classList.remove("active");
  if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
    !ruLang ? createKeys(eng) : createKeys(ru);
  }
});

function changeLang(func, ...codes) {
  let pressedBtns = new Set();
  document.addEventListener("keydown", (event) => {
    pressedBtns.add(event.code);
    for (let code of codes) {
      if (!pressedBtns.has(code)) return;
    }
    pressedBtns.clear();
    func();
  });
  document.addEventListener("keyup", (event) => pressedBtns.delete(event.code));
}

document.addEventListener("mousedown", function (event) {
  // const nonSymbols = ["ShiftLeft", "Tab", "ArrowUp", "CapsLock", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'].indexOf(event.code) == -1;

  if (event.target.classList.contains("keyboard__key")) {
    let code = event.target.getAttribute("data");
    textarea.textContent += event.target.textContent;
  }
});

function toggleLang() {
  if (isCapsActive) {
    if (ruLang) {
      createKeys(engCaps);
      ruLang = false;
    } else {
      createKeys(ruCaps);
      ruLang = true;
    }
  } else {
    if (ruLang) {
      createKeys(eng);
      ruLang = false;
    } else {
      createKeys(ru);
      ruLang = true;
    }
  }
}

changeLang(toggleLang, "ControlLeft", "AltLeft");

function selectButton(code) {
  const btn = document.querySelector(`button[data=${code}]`);
  btn.classList.add("active");
  return btn;
}
