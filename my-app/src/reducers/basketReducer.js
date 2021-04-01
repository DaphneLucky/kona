import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, GET_NUMBERS_BASKET, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        original: {
            name: "Original",
            tagName: "original",
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        original60gr: {
            name: "Original (60gr)",
            tagName: "original60gr",
            price: 2.00,
            numbers: 0,
            inCart: false
        },
        original360gr: {
            name: "Original (360gr)",
            tagName: "original360gr",
            price: 6.00,
            numbers: 0,
            inCart: false
        },
        original600gr: {
            name: "Original (600gr)",
            tagName: "original600gr",
            price: 8.00,
            numbers: 0,
            inCart: false
        },
        original1500gr: {
            name: "Original (1500gr)",
            tagName: "original1500gr",
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        matcha: {
            name: "Matcha",
            tagName: "matcha",
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        matcha60gr: {
            name: "Matcha (60gr)",
            tagName: "matcha60gr",
            price: 3.00,
            numbers: 0,
            inCart: false
        },
        matcha360gr: {
            name: "Matcha (360gr)",
            tagName: "matcha360gr",
            price: 7.00,
            numbers: 0,
            inCart: false
        },
        matcha600gr: {
            name: "Mathca (600gr)",
            tagName: "matcha600gr",
            price: 9.00,
            numbers: 0,
            inCart: false
        },
        matcha1500gr: {
            name: "Mathca (1500gr)",
            tagName: "matcha1500gr",
            price: 16.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products : {
                    ...state.products, 
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if(productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers;
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price;
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                cartCost: newCartCost,
                basketNumbers: newBasketNumbers,
                products : {
                    ...state.products, 
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products : {
                    ...state.products, 
                    [action.payload]: productSelected
                }
            }
        default: 
            return state;
    }
}