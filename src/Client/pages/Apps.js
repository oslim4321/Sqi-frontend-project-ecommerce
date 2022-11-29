import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DisplayAlertMessage from '../NotFound/DisplayAlertMessage'
import { GlobalDisplayAlert } from '../Context/Alert'
import Home from '../Interface/HOME/Home'
import Errorpage from '../NotFound/Errorpage'
import Navbar from '../Interface/Navbar/Navbar'
import BuyProduct from '../Interface/Product/BuyProduct'
import SignUp from '../Interface/Registration/SignUp'
import DoSom from '../Interface/Product/DoSom'
import Login from '../Interface/Registration/Login'
import ShoppingCart from '../Interface/Product/ShoppingCart'
import Cate from '../Interface/HOME/Cate'
import AllCatFetch from '../Interface/Product/AllProduct/AllCatFetch'
import Profile from '../Interface/Profile/Profile'
import TransSuccess from '../Interface/Product/PaymentStatus/TransSuccess'
import NotSucces from '../Interface/Product/PaymentStatus/NotSucces'
import SendUsMessage from '../Interface/Registration/SendUsMessage'
// import Nav from '../Interface/Navbar/SecontNavber/Nav'
import FavoriteCart from '../Interface/Product/FavoriteCart'
import ViewOrders from '../Interface/Profile/ViewOrders'
import UserMessage from '../Interface/Profile/UserMessage'
function App() {
  const { alert, showAlert } = GlobalDisplayAlert()

  return (
    <>
      {
        alert.show && <DisplayAlertMessage {...alert} removeAlert={showAlert} />
      }


      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/BuyProduct/:id' element={<BuyProduct />}></Route>
          <Route path='/AllCatFetch/:id' element={<AllCatFetch />}></Route>
          <Route path='/DoSom' element={<DoSom />}></Route>
          <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
          <Route path='/FavoriteCart' element={<FavoriteCart />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Profile/:id' element={<Profile />}></Route>
          <Route path='/Cate' element={<Cate />}></Route>
          <Route path='/TransSuccess' element={<TransSuccess />}></Route>
          <Route path='/NotSucces' element={<NotSucces />}></Route>
          <Route path='/ViewOrders/:id' element={<ViewOrders />}></Route>
          <Route path='/SendUsMessage' element={<SendUsMessage />}></Route>
          <Route path='/UserMessage' element={<UserMessage />}></Route>
          <Route path='*' element={<Errorpage />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App