import * as types from '../actions/ActionTypes';

const initColor = {
    color: 'black'
}

const color = (state = initColor, action) => {
    switch (action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            }
        default:
            return state
    }

}

export default color;