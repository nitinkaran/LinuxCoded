import { HANDLE_NEXT, HANDLE_PREV } from './ActionConstants';

export const nextButton = (page) => {
    return {
        type : HANDLE_NEXT,
        payload : page
    }
}

export const prevButton = (page) => {
    return {
        type : HANDLE_PREV,
        payload : page
    }
}