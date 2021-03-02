'use strict';

function showAd(message = 'Ad') {
    console.log('----------');
    console.log(`--- ${message} ---`);
    console.log('----------');
}

showAd('Header ad');
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('Ad');
showAd();
console.log('Stave is great!');
console.log('Richard is great!');
showAd('Footer Ad');