import { configureStore } from '@reduxjs/toolkit'
import auth from 'store/Authentication'

const store = configureStore ({
    reducer: {
        auth
    }
})

export default store