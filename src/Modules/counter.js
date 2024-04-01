const initialState = { number:5 }

function counter( state = initialState, action){
    switch(action.type){
        case "counter/increase":
            return { number : state.number + action.val};
        case "counter/decrease":
            return { number : state.number - action.val };
        default:
            return state
    }
}

export default counter;