// Writing our actionCreator module which is again nothing but a function returning the action

export const priceUp = (val)=>{
    return {
        type:'PRICE_UP',
        payload:val
    }
}

export const priceDown = (val)=>{
    return {
        type:'PRICE_DOWN',
        payload:val
    }
}

// We could also create a function as our action creator returning the action.That we'll see later