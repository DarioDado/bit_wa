
import Show from '../entities/Show.js';

export const fetchShows = () => {
    const jsonListShow = window.localStorage.getItem('listShow');
    const listShow = JSON.parse(jsonListShow)
    if (listShow) {
        return new Promise((resolve, reject) => {
            resolve(listShow);
        });
    }
    return fetch('http://api.tvmaze.com/shows')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const listShow = data.slice(0, 50)
                .map(({ id, name, image }) => {
                    return new Show(id, name, image.original);
                });
            window.localStorage.setItem('listShow', JSON.stringify(listShow));
            return listShow;
        });
}

export const fetchShowInfo = id => {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const imageSrc = data.image
                ? data.image.original
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
            const show = new Show(data.id, data.name, imageSrc);
            show.summary = data.summary;
            data._embedded.seasons.forEach(({ premiereDate, endDate }) => {
                const seasonString = (premiereDate && endDate)
                    ? `${premiereDate} - ${endDate}`
                    : "Data Not Available";
                show.seasons.push(seasonString);
            });
            data._embedded.cast.forEach(({ person }) => {
                show.cast.push(person.name);
            });
            return show;
        })
}

export const fetchSearchedShows = searchValue => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            const listShow = data.map(({ show }) => {
                const imageSrc = show.image
                    ? show.image.original
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";

                return new Show(show.id, show.name, imageSrc);
            });
            return listShow;

        })

}
