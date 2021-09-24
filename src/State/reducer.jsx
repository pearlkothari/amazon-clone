export const initialState = {
    basket:[],
    Amount:0
};

const reducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
                Amount: state.Amount+action.item.Price
            };
        
        default:
            return state;
    }
}

export default reducer;