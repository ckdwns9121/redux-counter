import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';



//Store는 리덕스에서 가장 핵심적인 요소. 이안에서 현재 state를 내장하고 있고 구독중인 함수들이 상태가 업데이트 될시 다시 실행.
//store 만드는방법 : redux에서 createStore를 불러온다음 reduce를 만들어 주고 createStore에 reduce를 넣어주면 됨
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
