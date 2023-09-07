import { Route, Routes } from 'react-router-dom'
import Details from '../pages/Details/Details'
import Home from '../pages/Home/index'
import New from '../pages/New/index'
import Profile from '../pages/Profile/index'

function AppRoutes() {
    return (
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/new' element={<New/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    )
}

export default AppRoutes