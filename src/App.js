import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Mainpage from "./pages/main-page";
import Categories from "./pages/categories";
import CategoryDetails from "./pages/category-details";
import { useDispatch, useSelector } from "react-redux";
import UseApi from "./hooks/useApi";
import { SET_CATEGORIES } from "./redux/reducers/categoriesReducer";

function App() {

  const dispatch = useDispatch();
  const api = UseApi();
  const categoriesState = useSelector(state => state.categoriesState)

  if (!categoriesState.initialized) {
    api.get("public/categories/listMainCategories")
      .then((res) => {
        dispatch({
          type: SET_CATEGORIES,
          payload: res.data.data
        })

      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: SET_CATEGORIES,
          payload: []
        })
      })
  }

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path={"categories"}>
            <Route index element={<Categories />} />
            <Route path={":slug"} element={<CategoryDetails />} />
          </Route>
        </Routes>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
