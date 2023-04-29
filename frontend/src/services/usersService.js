import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const usersService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    usersService
}