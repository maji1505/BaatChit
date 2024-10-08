import { Toaster } from 'react-hot-toast';
import { Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
const {authUser}=useAuthContext();
console.log(authUser);
  return (

    <div className='p-4 h-screen flex items-center justify-center'>
     
    <Routes>
      <Route path='/' element={authUser? <Home/>:<Login/>}/>
      <Route path='/login' element={authUser?<Navigate to={'/'}/> : <Login/>}/>
      <Route path='/signup' element={authUser?<Navigate to={'/'}/> : <Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
