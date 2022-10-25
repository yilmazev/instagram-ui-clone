import PrivateRoute from 'components/PrivateRouter'
import HomeView from 'components/Home/HomeView'
import SignUpView from 'components/SignUp/SignUpView'
import SignInView from 'components/SignIn/SignInView'
import Footer from 'components/Footer/FooterView'

const MainView = [
    {
        path: '/',
        element: <HomeView />,
        auth: true
    },
    {
        path: '/accounts',
        children: [
            {
                path: 'sign-up',
                element: <><SignUpView /><Footer /></>
            },
            {
                path: 'sign-in',
                element: <><SignInView /><Footer /></>
            }
        ]
    }
]

const authCheck = MainView => MainView.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }

    if(route?.children) {
        route.children = authCheck(route.children)
    }

    return route
})

export default authCheck(MainView)