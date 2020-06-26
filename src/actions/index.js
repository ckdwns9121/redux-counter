/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.
*/

//액션을 만들때마다 객체를 그때그때 만들기 힘들기 때문에 액션을 만드는 함수를 만듦
//이를 액션 생성자라고 부름

//액션 타입을 전부 들고옴
import * as types from './ActionTypes'; //들고온다(import) 모든것을(*) types라는 형태로(as) './ACtiontype"에 잇는 

export const increment = (index) => ({
    type: types.INCREMENT, index
});

export const decrement = (index) => ({
    type: types.DECREMENT, index
});

// 다른 액션 생성자들과 달리, 파라미터를 갖고있습니다
export const setColor = (color, index) => ({
    type: types.SET_COLOR,
    color,
    index
});

export const create = (color) => ({
    type: types.CREATE,
    color
})
export const remove = () => ({
    type: types.REMOVE
});
