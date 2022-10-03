import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import { Fragment } from 'react'
import Category from "./pages/Category";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path="/detail/:id/:year/:month/:day/:item">
        <DetailPage />
      </Route>
      <Route path='/category/:tag'>
        <Category />
      </Route>

    </BrowserRouter>
  );
}

export default App;
