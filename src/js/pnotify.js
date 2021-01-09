import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const myPnotify = (title) => error({ title, delay: 500 })

const tooManyCountries = () => myPnotify('Too many Matches Found')

const notFound = () => myPnotify('Not Found')

const somethingWrong = () => myPnotify('Something happened')

const errorMassege = (status) => {
    status === 404 ? notFound() : somethingWrong()
}

export default {
    tooManyCountries,
    error: errorMassege
}