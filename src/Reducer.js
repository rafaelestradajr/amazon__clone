export const initialState={
    basket:[],
    user:null
};


//Selector
export const getBasketTotal= (basket) =>
basket?.reduce((amount,item)=> item.price + amount,0);
const reducer=(state,action)=>{

    console.log(action);
    switch(action.type){
        case 'ADD__TO__BASKET':
        return{
            ...state,
            basket:[...state.basket,action.item]
        };
        case 'REMOVE__FROM__BASKET':
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id

            );

            let newBasket=[...state.basket];

            if (index>=0){
                newBasket.splice(index,1);

            }else{
              console.warn(
                  'Cannot remove product (id:${action.id}) as not in basket'
              ) 
            }
            
            return{
                ...state,
                basket:newBasket
            }

                case 'SET_USER':
                    return{
                        ...state,
                        user:action.user
                    }


        default:
            return state;
    }
};
 

export default reducer;