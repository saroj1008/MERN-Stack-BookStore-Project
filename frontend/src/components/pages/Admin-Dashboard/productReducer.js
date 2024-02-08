
const productReducer = (state, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload),
                loading: false
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };

        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false,
            };

        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.payload.id ? action.payload : product
                ),
                loading: false,
            };

    }
}

export default productReducer;
