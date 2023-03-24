fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(quote => {

        const number = Math.floor(Math.random()*10)
        const quoteText = quote[number].text;
        const author = '- ' + quote[number].author;
        const textElement = document.getElementById('text');
        const authorElement = document.getElementById('author');

        textElement.innerHTML = quoteText;
        authorElement.innerHTML = author;
    })