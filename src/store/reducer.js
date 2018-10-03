const initialState = {
    price:5000,
    history:[]
}

const reducer = (state=initialState,action)=>{
    const newState = {...state};

    switch(action.type){
        case 'PRICE_UP':
         return{
             ...state,
             price:state.price+action.payload,
             history:state.history.concat({price:state.price+action.payload})
         }
        
        case 'PRICE_DOWN':
        return{
            ...state,
            price:state.price-action.payload,
            history:state.history.concat({price:state.price-action.payload})
        }

        default:
         return newState;
    }
}

export default reducer;