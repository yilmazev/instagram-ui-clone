import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRouter({ children }) {
    const user = useSelector(state => state.auth.user)
    const location = useLocation()

    if(!user) {
        return <Navigate to="/accounts/sign-up" replace={true} state={{
            return_url: location.pathname
        }} />
    }

    return children
}