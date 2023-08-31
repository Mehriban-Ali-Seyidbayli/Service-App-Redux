import { combineReducers, createStore } from "redux";
import CategoriesReducer from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
    categoriesState: CategoriesReducer,
})

const store = createStore(rootReducer);

export default store;