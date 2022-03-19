'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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

const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request)
