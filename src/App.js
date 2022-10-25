import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainView from './components/MainView'
import LoaderView from 'components/Loader/LoaderView'

export default function App() {
    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(MainView)

    if(!user) {
        return <LoaderView />
    }

    return user && (
        <>
            { showRoutes }
        </>
        
    )
}