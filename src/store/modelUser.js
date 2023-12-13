import { action } from "easy-peasy"

const modelUser = {
    isLogin: false,
    user: {},
    setUser: action((state, payload) => {
        state.user = payload
    })
}

export default modelUser