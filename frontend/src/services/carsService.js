import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const carsService = {
    getAll: () => axiosService.get(urls.cars)
}

export {
    carsService
}