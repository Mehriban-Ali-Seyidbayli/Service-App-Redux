import axios from "axios";

export default function UseApi() {
    axios.defaults.baseURL = "https://api.adoptez1artisan.com"

    return axios;
}