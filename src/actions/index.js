
export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = itemToAdd => {
    return ({type: ADD_FEATURE, payload: itemToAdd})
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = itemToRemove => {
    return ({type: REMOVE_FEATURE, payload: itemToRemove})
};


export const BUY_ITEM = 'BUY_ITEM'
const buyItem = item => {
    return ({type:BUY_ITEM, payload:item})
  };


