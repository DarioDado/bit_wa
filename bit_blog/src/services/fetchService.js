export const getData = (url) => {
    return fetch(url)
        .then(res => res.json())
}


export const postData = (url, data) => {
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  })
  .then(response => response.json())
}


export const deleteData = (url) => {
  return fetch(url, {
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE',
    mode: 'cors'
  })
  .then(response => response.json())
}
