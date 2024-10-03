import './App.css'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import GoogleLoginPage from './GoogleLoginPage'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<GoogleLoginPage/>}/>
    <Route path='/' element={<Navigate to='/login'/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
