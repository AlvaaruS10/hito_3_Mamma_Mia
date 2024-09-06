import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./App.css"
import Login from "./components/Login"
import Register from "./components/Register"
import Cart from "./components/Cart"
function App() {
  return (
    <div>
         <Navbar />
         <Home /> 
      {/*<Register />*/}
      {/*<Login />*/}
      {/*<Cart />*/} 
         <Footer />
    </div>
  )
}

export default App
