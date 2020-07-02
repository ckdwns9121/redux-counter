## 리덕스 카운터 구현

1. 리덕스에서 사용되는 키워드

### 액션
 
  상태에 어떠한 변화가 필요하게 될 때 액션타입을 명시해주는것,
  type :INCREMENT

### 액션 생성함수

  액션 생성함수는 액션들 만드는 함수, 파라미터를 받아와서 액션 객체 형태로 리던
  
  export function increment =() =>{type :INCREMENT}

### 리듀서

   변화를 일으키는 함수. 현재 상태와 전달받은 액션을 참고해 새로운 상태를 만들어 리턴

### 스토어

    리덕스에서 한 어플리케이션당 하나의 스토어를 만듦,
    import {createStore} from 'react-redux';
    const store = createStore(reducers)

### 구독

    스토어의 내장함수중 하나, 그러나 리액트에서 직접적으로 사용하는 경우는 거의 없고
    react-redux의 내장함수인 connect를 통해 구독한다.
