const string = 'The revolution sill not be televised.';
console.log(string);

const name = 'yuhyun';
const greeting = `Hello, ${name}`;
console.log(greeting);

// 백틱으로 문자열 연결
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);

// button 태그 선택
const button = document.querySelector('button');

// button 누르면 prompt창 띄우고 사용자에게 입력을 받을 수 있게 함
// 입력 받은 내용은 name 변수에 저장되며 #greeting에 밑의 문장과 함께 출력되도록 함
function greet() {
  const name = prompt('What is your name?');
  const greeting = document.querySelector('#greeting');
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener('click', greet);

const line = `Today, I learned Template literal! 
This is great~!`;

console.log(line);
