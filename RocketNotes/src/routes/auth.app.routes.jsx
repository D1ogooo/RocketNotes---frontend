import { Route, Routes } from 'react-router-dom'

import Signin from '../pages/Signin'
import SignUp from '../pages/SignUp'

function AuthRoutes() {
    return (
      <Routes>
         <Route path='/' element={<Signin/>}/>
         <Route path='/register' element={<SignUp/>}/>
      </Routes>
    )
}

export default AuthRoutes