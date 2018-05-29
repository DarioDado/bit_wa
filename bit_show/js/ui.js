import {createCard,createLi,updateShowInfoHtml,updateSummaryHtml} from '../helpers/helpers.js';

export const DOMSelectors = {
    divShowHolder: ".show-holder",
    divContainer: "main .container",
    ulSeason: ".season ul",
    ulCast: ".cast ul",
    inputSearch: "input",
    divSearchResult: ".search-result",
    divTitle: ".title",
    divSingleShowInfo: ".single-show-info",
    divSummary: ".summary",
    aLogo: ".navbar-brand",
    divAlertDanger: ".alert-danger",
    divAlertDark: ".alert-dark"
};



const $searchResultElement = $(DOMSelectors.divSearchResult);
const $container = $(DOMSelectors.divContainer);
const $inputElement = $(DOMSelectors.inputSearch);
const $showHolderElement = $(DOMSelectors.divShowHolder);
const $title = $(DOMSelectors.divTitle);
const $singleShowInfo = $(DOMSelectors.divSingleShowInfo);
const $summary = $(DOMSelectors.divSummary);
const $alert = $(DOMSelectors.divAlertDark);



export const displayShows = listShows => {
    clearErrors();
    $showHolderElement.html("");
    $singleShowInfo.html("");
    $summary.html("");
    $title.html(`<h1>Popular Shows</h1>`);
    if (listShows.length === 0) {
        $alert.html("No Results Found");
        $alert.css("display", "block");
        clearInput();
        return;
    }
    listShows.forEach(({ id, title, cover }) => {
        const $showElement = createCard(id,title, cover);
        $showHolderElement.append($showElement);
    });
    $searchResultElement.css("display", "none");
    clearInput();
}



export const getShowId = event => {
    return $(event.target).attr("id");
}

const clearErrors = () => {
    $alert.html("");
    $alert.css("display", "none");
}



const clearInput = () => {
    $inputElement.val("");
}

export const formPreventDefault = () => {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
}



export const displayShowInfo = (show) => {
    const { id, title, cover, seasons, cast, summary } = show;
    clearErrors();
    $showHolderElement.html("");
    $title.html(`<h1>${title}</h1>`);

    const showInfoHtml = updateShowInfoHtml(cover,seasons.length);
    $singleShowInfo.html(showInfoHtml);
    const $ulSeasonElement = $(DOMSelectors.ulSeason);
    const $ulCastElement = $(DOMSelectors.ulCast);
    seasons.forEach(season => {
        let $liElement = $('<li>').text(season);
        $ulSeasonElement.append($liElement);
    });
    cast.forEach(actor => {
        let $liElement = $('<li>').text(actor);
        $ulCastElement.append($liElement);
    });
    const summaryHtml = updateSummaryHtml(summary);
    $summary.html(summaryHtml);
    $searchResultElement.css("display", "none");
    clearInput();
}



export const collectInputData = () => {
    return $inputElement.val();
}



export const displaySearchedList = showList => {
    if (!showList.length) {
        return $searchResultElement.css("display", "none");
    }
    $searchResultElement.css("display", "block");
    const $ulElement = $searchResultElement.find('ul');
    $ulElement.html("");
    showList.forEach(({ id, title }) => {
        const $liElement = createLi(id, title);
        $ulElement.append($liElement);
    })
}



export const displayError = error => {
    $alert.html(error);
    $alert.css("display", "block");
}