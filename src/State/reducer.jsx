export const initialState = {
    basket:[],
    Amount:0,
    user:null
};

const reducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
                Amount: state.Amount+action.item.Price
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.ID === action.ID
            );
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }
            return{
                ...state,
                Amount:state.Amount-state.basket[index].Price,
                basket: newBasket
            }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
}

export default reducer;