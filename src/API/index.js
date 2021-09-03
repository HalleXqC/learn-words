import { API } from "./api";
import { createNewRoute, deleteCardsRoute, editCardsRoute , cardIsRememberedRoute} from "./routes";
import { getCardsRoute } from "./routes";

export const createNewCard  = (data, userId) => {
    return API.post(JSON.stringify(data), createNewRoute, userId)
}

export const getCards = (userId) => {
    return API.get(getCardsRoute, userId)

}
export const deleteCards = (userId, id) => {
    return API.delete(deleteCardsRoute, userId, id)
}

export const changeCardIsRemembered = (data, userId, id) => {
    return API.patch(JSON.stringify(data), cardIsRememberedRoute, userId, id)
}