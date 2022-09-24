/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
 return `New sneakers ${sneakers} dropping soon!`

};

const isThatMichaelJordan = (name) => {
   return name.toLowerCase() == 'michael jordan' ? true : false

};

const areYouM = (name) => {
  return name.indexOf('M') == 0 ? true : false

};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {
  let biggestNum = 0

  for(let i = 0; i < arr.length;i++){
    if(arr[i] > biggestNum){
      biggestNum = arr[i]
    }
  }
  return biggestNum

};

const mostViews = (sneakerViews) => {
  // insert code
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithError = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};
