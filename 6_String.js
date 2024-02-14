const string = 'The revolution sill not be televised.';
console.log(string);

let name = 'yuhyun';
let greeting = `Hello, ${name}`;
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

// let으로 변수를 선언해야 재할당 가능
// const로 선언한 변수는 상수라서 재할당이 불가능함.
// 그래서 재할당이 필요한 변수는 let을 사용해서 선언해야 함.

name = 'Front ';
number = 242;
console.log(`${name}${number}`);

/*


document 오류가 뜨는 이유는
내가 vs code로 .js 파일을 실행했기 때문인데 좀 더 자세히 얘기해 보면

자바 스크립트 코드를 읽고 해석하는 엔진은 브라우저.
그래서 자바스크립트 코드를 실행하려면 html에 연결해서 확인해야 했는데
node.js를 통해 편집기에서 자바스크립트를 실행할 수 있었다.

이게 뭔소리냐면….

우선 이렇게 오류가 나는 코드의 html Live server로 가서 개발자 도구 콘솔창을 확인해 보면 아마 정상적으로 실행되는 것을 확인할 수 있을 건데,  브라우저에서는 자바스크립트 코드가 실행이 되기 때문임
`document.querySelector(”button”);` 는 html에서 button이라는 코드를 찾아주는 js 코드인디
html에서 만들어진 DOM Tree에서 찾을 것 아님 

근데 node.js 는 DOM을 못읽음 
나는 vscode 즉 편집기에서 js 파일을 실행하니까 브라우저 엔진이 아닌 node.js 엔진이 실행을 하게 되고 결국 button을 읽어오지 못함 ㅜ ㅠ ㅜ ㅠ 그래서 얘는 그냥 Live server 켜고 개발자 도구에서 확인하는 것이 속편함 아니 그냥 그렇게 확인해야 함

긍까 자 정리

document = DOM의 헤드
html에 .js를 연결했음 → Live server를 켜서 개발자 도구에서 js 출력 확인 가능
.js에는 html이 연결되어있지 않음 → 왜? html에서 연결했지 js 파일에서는 따로 뭐 한 게 없음

DOM (Document Object Model) 은  html에서 만들어지는 앤데 
내가 작성하고 있던 vscode 편집기는 브라우저 엔진이 없음 즉, js 코드를 실행할 수 없음 → 그래서 Node.js 엔진이 대신 수행해주고 있음
node.js는 html 을 읽어오지 못함.
그러면 DOM도 읽지 못하게 됨

그러면 결론… vscode 편집기에서 document의 button을 찾는다? 이건 말도 안 됨. 못찾음.
편집기에선 그냥 코드 작성만 하고(document) 확인은 브라우저 환경에서 하자 ~


 */
