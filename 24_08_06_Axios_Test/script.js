const title = document.querySelector('h1');
const img = document.querySelector('img');

const getData = () => {
    axios.get('http://www.omdbapi.com/?apikey=fe7c029d&s=marvel')
        .then((response) => {
            title.innerHTML = response.data.Search[0].Title;
            img.src = response.data.Search[0].Poster;
        })
}


getData();
//fe7c029d