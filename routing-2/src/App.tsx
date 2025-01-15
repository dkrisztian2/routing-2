import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Header from './components/Header'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/ :id' element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
