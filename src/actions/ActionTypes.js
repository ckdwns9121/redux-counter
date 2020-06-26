/* 
 Action 의 종류들을 선언합니다.
 앞에 export 를 붙임으로서, 나중에 이것들을 불러올 때, 
 import * as types from './ActionTypes' 를 할 수 있어요.
*/


//액션 타입을 정의함.
//액션 타입을 정의할 때 대문자로 선언
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
export const CREATE ="CREATE";
export const REMOVE ="REMOVE";