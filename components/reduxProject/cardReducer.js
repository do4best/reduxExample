const cardReducer = (state=[], action) => {
    switch (action.type){
        case "ADD_TO_CARD":
            return [...state,action.payload]
        default:
            return state;
    }
}
export default cardReducer;