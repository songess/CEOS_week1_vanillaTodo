# 1주차 미션: Vanilla-Todo

# 배포링크

[todoList](https://ceos-week1-vanilla-todo.vercel.app/)

# 기능구현
- 오늘 날짜 생성
- todo 추가, 추가 시 validation 체크 및 enter로 입력
- todo 삭제
- todo 완료갯수 추가
- todo 완료/미완료 여부에 따른 이동
- localstorage 저장 

# 느낀점

js만을 사용해서 동작을 만드려면 태그부터 속성까지 하나하나 만들어줘야 해서 손이 많이 가는 것 같습니다.

리액트의 state처럼 값이 변하면 리렌더링이 이루어지지 않기 때문에 값이 변할때마다 직접 DOM조작을 해줘야 했습니다.

뿐만 useEffect 등의 빌트인 함수도 없어서 리액트의 필요성을 느꼈습니다.

# 개선할 점

localstorage에 저장하는 과정에서 todo,done으로 구분을 하여 중복되는 코드가 생겼는데, 객체배열형태로 저장해 `isDone`변수를 추가해 완료/미완료를 구분하는 방식으로 짜면 중복되는 코드를 줄일 수 있을 거 같습니다.

# Key Questions

## DOM은 무엇인가요?

브라우저가 이해할 수 있는 자료구조로 프로퍼티와 메서드를 제공하는 트리 자료구조입니다.

렌더링 엔진이 HTML 문서를 파싱하면 문서, 요소, 속성, 텍스트등 모두 노드객체로 변하고 이 노드 객체들로 구성된 트리 자료구조를 DOM 이라 합니다.

js를 사용해 DOM을 조작하여 html의 구조를 변경합니다.

## HTML (tag) Element를 JavaScript로 생성하는 방법은 어떤 것이 있고, 어떤 방법이 가장 적합할까요?

1. createElement

```js
const todoCard = document.createElement('div');
```

2. insertAdjacentHTML

```js
element.insertAdjacentHTML(position, '<div class="todoCard"></div>');
```

태그요소를 만들때는 만드는 거에만 집중하고, 위치를 정하는 것은 나중에 정하는 게 가독성이 좋아보여
createElement방식이 더 적합하다고 생각합니다.

## Semantic tag에는 어떤 것이 있으며, 이를 사용하는 이유는 무엇일까요?

시맨틱 태그는 말 그대로 의미가 담긴 태그로, header, nav, section, article, aside, footer 등이 있습니다.

코드를 읽기 쉽게 해줍니다. 내가 짠 코드는 나만 읽는 게 아니라 같은 팀원도 읽고, 시간이 지나면 나도 내가 짠 코드를 기억하지 못할 수 있기 떄문에 가독성 좋은 코드가 필요하고, 시맨틱 태그는 코드의 가독성을 높이는데 도움을 줍니다.

또한 SEO를 향상시킵니다. 검색엔진이 검색을 할 때, 브라우저가 소스코드를 읽을 때 도움을 줍니다.

## Flexbox Layout은 무엇이며, 어떻게 사용하나요?

반응형 웹사이트를 만들 때 주로 사용합니다. 뷰포트의 크기에 따라 요소들이 자리를 잡고, 뷰포트의 움직임에 맞춰 반응형으로 위치가 조정됩니다.

`display: flex`를 부모요소에 적용합니다.

`flex-direction`을 통해 방향을 결정합니다. 기본 값은 `row`이고, `row | row-reverse | column | column-reverse`를 사용할 수 있습니다.

`flex-wrap`을 통해 줄바꿈을 적용할지 말지 선택할 수 있습니다.

정렬을 위해 `justify-content`, `align-items`를 사용합니다. 각각 축방향, 축의 수직방향으로 정렬을 합니다.

`align-self`를 사용해 자식 중 하나의 요소만 위치를 조정할 수 있습니다. `justify-self`는 존재하지 않습니다.

`gap`을 사용해 자식요소들간의 거리를 조정할 수 있습니다.

`flex-grow`를 통해 남는 공간을 채울 수 있습니다. 대부분의 경우 `width/height`속성과 함께 쓰입니다.

`flex-shrink`를 통해 요소가 수축하지 않게 설정합니다.

`flex-basis`를 통해 요소의 기본 크기를 설정합니다.

## JavaScript가 다른 언어들에 비해 주목할 만한 점에는 어떤 것들이 있나요?

자료형이 미리 정해져 있지 않고 런타임에 동적으로 정해지기 때문에 유연하게 타입이 정해진 다는 것이 장점이고, 웹(브라우저) 뿐만 아니라 nodejs 등 서버환경에서도 사용할 수 있습니다. 또한 다양한 라이브러리, 프레임워크가 있어 원하는 기능을 쉽게 구현할 수 있다는 것도 장점이라 생각합니다.

## 코드에서 주석을 다는 바람직한 방법은 무엇일까요?

주석을 다는 이유는 다른 사람이 알아보기 위함이고, 유지보수를 보다 쉽게 하기 위해서입니다. 따라서 해당 변수, 함수가 어떤 용도로 사용되고 있는지 이해할 수 있게 달아야 합니다.

개발환경에서도 호흡이 길어지면 내가 하고 있는 것을 적어가면서 하는게 편리하다고 생각하는데, 이런 주석들은 배포이전에 지워줘도 괜찮을 것 같습니다.
