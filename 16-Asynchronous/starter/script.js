'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

////////////NOT WORKING///////////////////////////

/**
 * PROMISE DEFINITONS
 * - An object that is used as a placeholder for the future
 * result of an async operation 
 * - A container for an async delivered value
 * - A container for a future value i.e a response from an
 AJAX call
 Promise fullfilled means sucessful but rejected means there
 was an error
 * //BETTER: If buy a lottery ticket then it's a PROMISE
 that I will receive money if I guess the correct outcome so
 PROMISE: I buy lottery ticket(promise)
 Lottey draw happens asynchronously
 If correct outcome, I receive money because it was promised. If I
 wasn't correct then I will not get any money .i.e rejected(an error
  occurred in APP f.ex in real ex)
- In our code we will be able to handle these different states, ie
fulfilled/rejected*/

/*const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request)

const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response){//handle fulfilled promise - .then()
    console.log(response);
    return response.json();//to read the data must call json()
  }).then(function(data) {//then another promise with then()
    console.log(data);
    renderCountry(data[0]);
  })
};
getCountryData('portugal');*/

/*OR BETTER

const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(function (response) {
      console.log(response);
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         renderCountry(data[0]);
      });
};*/

//ASYNC AWAIT

const whereAmI = async function(country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(response);//instead being stored in a variable
  const data = await response.json();
  console.log(data)
  renderCountry(data[0]);

}
whereAmI('portugal');
console.log('First')
