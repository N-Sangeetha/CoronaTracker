// Init Corona
const corona = new Corona();

// Init UI
const ui = new UserInt();

//page load event
document.addEventListener("DOMContentLoaded", getCases);

//dropdown
const coronatrack = document.getElementById("coronatrack");

//search country
const searchCountry = document.getElementById("searchcountry");
// console.log(searchCountry);

// Get Cases
function getCases(e) {
  // console.log(e.target.value);
  const value = e.target.value;
  if (value == 2) {
    corona
      .getCountrycases(value)
      .then(data => ui.showIndia(data.indiaData))
      .catch(err => console.log(err));
  } else if (value == 3) {
    corona
      .getCountrycases(value)
      .then(data => ui.showUsa(data.usaData))
      .catch(err => console.log(err));
  } else {
    corona
      .get(
        "https://corona.lmao.ninja/v2/countries",
        "https://corona.lmao.ninja/v2/all"
      )
      .then(data => {
        ui.showCases(data.cases);
        ui.showTotal(data.total);
      })
      .catch(err => console.log(err));
  }

  e.preventDefault();
}

// debounce function
function debounce(func, delay) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    // clear timeout
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

var returnedFunction = debounce(e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    corona.getCountry(userText).then(data => {
      if (data.countryData.message) {
        // Show error message
        ui.showError(data.countryData.message);
      } else {
        // Show
        ui.showCase(data.countryData);
      }
    });
  } else {
    window.location.reload();
  }
}, 500);

// Search input event listener
searchCountry.addEventListener("keyup", returnedFunction);

//drop down event
coronatrack.addEventListener("change", getCases);
