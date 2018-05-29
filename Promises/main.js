

const p1 = new Promise((resolve,reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .done(res => {
        const url = $(res).find('url').text();
        resolve(url);
    })
    .fail(()=>{
        reject("Network Problem");
    })
})

const p2 = new Promise((resolve,reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .done(res => {
        const url = $(res).find('url').text();
        resolve(url);
    })
    .fail(()=>{
        reject("Network Problem");
    })
})

const p3 = new Promise((resolve,reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .done(res => {
        const url = $(res).find('url').text();
        resolve(url);
    })
    .fail(() => reject("Network Problem"));
})


Promise.all([p1,p2,p3])
    .then(resolvedData => {
        resolvedData.forEach(url => {
            const imgElement = $(`<img src="${url}" alt="cat">`);
            $('body').append(imgElement);
        })
    })
    .catch(error => {
        const errorElement = $(`<p>${error}</p>`);
        $('body').append(errorElement);
    })


