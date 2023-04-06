import { api } from "../api/requestApi"

const getCrawled = async () => {
    return await api.get();
}

export {
    getCrawled
}