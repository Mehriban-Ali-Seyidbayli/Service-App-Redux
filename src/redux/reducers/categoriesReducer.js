export const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
    categories: [],
    initialized: false
}

export default function CategoriesReducer(state = initialState, action) {

    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                initialized: true
            }

        default:
            return state;
    }

}