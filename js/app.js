/* const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[5])
    const container = document.getElementById('container')
    const countryHTML = countries.map(country => getCountryHtml(country));
    container.innerHTML = countryHTML.join(' ')
    console.log(countryHTML[0]);
}
const getCountryHtml = country => {
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <h4>${country.capital}</h4>
            <img src="${country.flag}">
        </div>        
    `
}
loadCountries() */


function loadData() {
    const api = `https://restcountries.eu/rest/v2/all`
    fetch(api)
    .then(res => res.json())
    .then(data => showData(data))
}
// loadData()

    const container = document.getElementById('container')

function showData(countries) {
    countries.forEach(country => {
        // console.log(country);
        const {name, flag, capital} = country
        const div = document.createElement('div')

        div.innerHTML=`
        <div class="card m-2" style="width: 14rem; height:300px">
                    <img src="${flag}" class="card-img-top" alt="Flag Picture">
                    <div class="card-body">
                        <h5 class="card-title">${name} </h5>
                        <p>City: ${capital}</p>
                        <button href="#" class="btn d-block mt-3  btn-primary">Details</button>
                    </div>
           </div>`
        container.appendChild(div)
    });
}

loadData()