import * as ui from './ui.js';
import * as data from './data.js';

const setEventListener = () => {
    const $cardHolderElement = $(ui.DOMSelectors.divShowHolder);
    const $inputElement = $(ui.DOMSelectors.inputSearch);
    const $logoElement = $(ui.DOMSelectors.aLogo);
    const $searchResultElement = $(ui.DOMSelectors.divSearchResult);
    $cardHolderElement.on("click", cardHandler);
    $inputElement.on("keyup", searchHandler);
    $logoElement.on("click", homeButtonHandler);
    $searchResultElement.on("click", cardHandler);
}

const homeButtonHandler = event => {
    data.fetchShows()
        .then(listShow => {
            ui.displayShows(listShow);
        })
        .catch(() => {
            ui.displayError("Network problem, try again later.");
        });
}

const cardHandler = event => {
    if (event.target.tagName === "A") {
        const id = ui.getShowId(event);
        data.fetchShowInfo(id)
            .then(show => {
                ui.displayShowInfo(show);
            })
            .catch(() => {
                ui.displayError("Network problem, try again later.");
            })
    }
}

const searchHandler = event => {
    const searchValue = ui.collectInputData();
    if (event.key === "Enter") {
        if (searchValue === "") {
            return;
        }
        event.preventDefault();
        data.fetchSearchedShows(searchValue)
            .then (listShow =>{
                ui.displayShows(listShow);
            }) 
            .catch(() => {
                ui.displayError("Network problem, try again later.");
            })
        return ui.displaySearchedList([]);
    }
    if (searchValue === "") {
        return ui.displaySearchedList([]);
    }

    data.fetchSearchedShows(searchValue)
        .then (listShow =>{
            ui.displaySearchedList(listShow);
        }) 
        .catch(() => {
            ui.displayError("Network problem, try again later.");
        })
}


export const initHomepage = () => {
    ui.formPreventDefault();
    setEventListener();
    data.fetchShows()
        .then(listShow => {
            ui.displayShows(listShow);
        })
        .catch(() => {
            ui.displayError("Network problem, try again later.");
        });
}

