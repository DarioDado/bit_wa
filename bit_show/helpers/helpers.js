export const createCard = (id, title, cover) => {
    return $(`
        <div class="col-md-6 col-lg-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${cover}" alt="Card image cap">
            <div class="card-body">
            <a href="#" id="${id}">${title}</a>
            </div>
            </div>
        </div>`);
}

export const updateShowInfoHtml = (cover, length) => {
    return (`
        <div class="col-md-7">
            <img src="${cover}" alt="" class="img-fluid poster">
        </div>
        <div class="col-md-4 offset-md-right-1 show-info">
            <div class="season">
                <h2>Seasons (${length})</h2>
                <ul>
                    
                </ul>
            </div>
            <div class="cast">
                <h2>Cast</h2>
                <ul>
                    
                </ul>
            </div>
        </div>
        `);
}

export const updateSummaryHtml = (summary) => {
    return (`
        <div class="col-12 details">
            <h2>Show Details</h2>
            <p>${summary}</p>
        </div>
        `);
}

export const createLi = (id, title) => $(`<li><a href="#" id="${id}">${title}</a></li>`);