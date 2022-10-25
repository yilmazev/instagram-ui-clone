import store from "store"
import { setUser } from "store/Authentication"

export const userHandle = data => {
    store.dispatch(setUser(data))
}