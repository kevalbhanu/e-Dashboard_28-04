import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>

          <Route element={<PrivateRoute/>}>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1>Logout Component</h1>}/>
          </Route>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
