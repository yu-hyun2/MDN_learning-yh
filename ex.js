// // intro
// document.addEventListener('DOMContentLoaded', () => {
//   function createParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll('button');

//   for (const button of buttons) {
//     button.addEventListener('click', createParagraph);
//   }
// });

// console.dir(globalThis.document);

// var의 범위

var x = 50;

function foo() {
  // var x = 100;

  function bar() {
    var x = 999;
    console.log(x);
  }
  console.log(x); // foo 환경에서 x를 찾음
  bar(); // bar 환경에서 x를 찾음
}

foo();
console.log(x); // 전역 환경에서 x를 찾음
