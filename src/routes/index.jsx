import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./app.routes";
import { useAuth } from '../hooks/useAuth'
import AuthRoutes from "./auth.app.routes";

export function Routes(){
 const { user } = useAuth()

 return (
    <>
     <BrowserRouter>
      { user ? <AppRoutes /> : <AuthRoutes />}
     </BrowserRouter>
    </>
 )
}