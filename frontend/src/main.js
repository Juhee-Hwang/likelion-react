// nomodule
import "./utils/supportJavaScript.js";
import "./vanilla.script.js";

// console.log('React 개발 시작하기! 😊');

// 명령형 프로그래밍
// const root = document.getElementById("root");
// const headline = root.querySelector("hi");

// document.addEventListener("click", () => {
// headeline.textContent = "update headline content";
// });

// React가 제공
// 선언형 프로그래밍
// import { state, render, update } from "./vanilla.script.js";

// render(state);

// document.addEventListener("click", () => {
//   update({
//     subjects: "React는 선언형 프로그래밍을 추구합니다.",
//   });
//   console.log(state);
// });


import { createElement, state, render, update } from './vanilla.script.js';

import { createElement, state, render, update } from './vanilla.script.js';
const app = createElement(
  'section', 
  {
    'class': 'app',
    'aria-label': 'Like React App'
  }, 
  createElement('h1', {}, 'hello App')
  createElement('h1', {}, 'hello App'),
  createElement('p', {}, 'blab blab blab'),
  createElement('ul', {}, 
    createElement('li', {}, 'item 1'),
    createElement('li', {}, 'item 2'),
    createElement('li', {}, 'item 3'),
  ),
);

console.log(app);
document.getElementById('root').append(app);

document.addEventListener('click', () => {
  update({
    subjects: 'React는 선언형 프로그래밍 방식을 사용합니다.'
  });

  // console.log(state);
});

