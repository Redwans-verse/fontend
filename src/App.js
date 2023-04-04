import {Routes,Route} from "react-router-dom";
import Register from "./Pages/User/Register";
import  { Toaster } from 'react-hot-toast';
import Login from "./Pages/User/Login";
import Home from "./Pages/Home";
import NavMenu from "./Components/NavMenu";
import ProtectedRoute from "./Components/ProtectedRoute";
import Product from "./Pages/User/Product";
import Products from "./Pages/User/Products";


function App() {
  return (
      <div>
          <Toaster/>
          <NavMenu/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>

              <Route path='/dashboard' element={<ProtectedRoute></ProtectedRoute>}>
                  <Route path='create' element={<Product></Product>}></Route>
                  <Route path='list' element={<Products/>}></Route>
              </Route>

          </Routes>
      </div>

  );
}

export default App;
