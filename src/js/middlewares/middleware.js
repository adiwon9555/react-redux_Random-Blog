import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
import { displayErrorMessage } from "../action/action";

const forbiddenWords = ["spam", "money"]

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_ARTICLE) {
                const foundWords = forbiddenWords.filter(word => action.payload.title.includes(word))
                if (foundWords.length) {
                    return dispatch(displayErrorMessage("Cannot Use Forbidden Words"));
                }
            }
            return next(action)

        }
    }
}