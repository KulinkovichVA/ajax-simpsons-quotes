function fetchSimpsonQuote() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios
        .get(url)
        .then(function (response) {
            return response.data;
        })
        .then(function (quote) {
            const simpsonHtml = `
              <p><strong>${quote[0].character}</strong></p>
              <img src="${quote[0].image}" />
              <p>${quote[0].quote}</p>
            `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });
}

fetchSimpsonQuote();
document.querySelector('#showBtn').addEventListener('click', (event) => {
    fetchSimpsonQuote();
});
