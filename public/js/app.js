// cliet-side JS file
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#p1");
const messageTwo = document.querySelector("#p2");

const searchHandler = (address) => {
  fetch("/weather?address=" + address)
    .then((response) => {
      response.json().then((data) => {
        if (data.error) {
            messageOne.innerText = data.error;
            messageTwo.innerText = " ";
            return null
        }
        messageOne.innerText = "Location: " + data.location
        messageTwo.innerText = "Temperature: " + data.weather.temperature
      });
    })
    .catch((error) => {
      console.log(error);
    });
};



weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  searchHandler(search.value);
});
