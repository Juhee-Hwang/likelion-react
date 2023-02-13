// 아래 마크업을 JavaScript + DOM API를 사용해 동적으로 렌더링 합니다.
// DOM API : 동적으로 마크업 (React가 하는 일)
// - [ ] innerHTML, insertAdjacentHTML 사용하면 안 됨
// - [x] document.createElement API

// DOM 스크립트 (바닐라 스크립트)
// DOM API (접근, 탐색, 조작, 이벤트 핸들링)
// querySelector, querySelectorAll
// addEventListener, classList, setAttribute, dataset, ....

// 아래 처럼 작성하지 마세요. 😓
// function renderVanillaApp() {
  //   rootElement.innerHTML = /* html */`
  //     <div class="container container--md">
  //       <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
  //       <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
  //       <ul>
  //         <li>React 및 ReactDOM API 활용</li>
  //         <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
  //       </ul>
  //     </div>
  //   `;
  // }
  
  /* -------------------------------------------------------------------------- */
  
  let state = {
    headline: '웹브라우저 환경에서 React 라이브러리 시작하기',
    description:
    'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.',
    subjects: [
      'React 및 ReactDOM API 활용',
      '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드',
    ],
  };
  
  const rootElement = document.getElementById('root');
  
  function reset() {
    rootElement.innerHTML = '';
  }
  
  function render(state) {
    reset();
    
    const container = document.createElement('div');
    container.classList.add('container', 'container--md');
    
    const headline = document.createElement('h1');
    headline.textContent = state.headline;
    // const containerTextContent = document.createTextNode('웹브라우저 환경에서 React 라이브러리 시작하기')

  const description = document.createElement('p');
  description.textContent = state.description;

  const subjectList = document.createElement('ul');

  state.subjects.forEach((subject) => {
    const subjectItem = document.createElement('li');
    subjectItem.textContent = subject;
    subjectList.append(subjectItem);
  });

  container.append(headline, description, subjectList);
  rootElement.append(container);
}

render(state);

function update(newState) {

  if (typeof newState.subjects === 'string') {
    let newSubject = newState.subjects;
    newState.subjects = [newSubject];
  }

  state = {
    ...state,
    ...newState,
    subjects: [
      ...state.subjects,
      ...(newState.subjects ? newState.subjects : [])
    ]
  };

  render(state);
}

globalThis.update = update;


// 🌈 정리
// 리액트 => 기존 뷰를 날려버리고 처음부터 새로 랜더링하는 방식 (선언형 프로그래밍)
// DOM조작 조금씩 안하구 createElement쓰는 이유가 그렇다
// ⭐️리액트의 API를 들어가기 전 vanillaJS로 코드가 어떻게 구성이 되는지를 설명한겁니다⭐️