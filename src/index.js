async function getWeather(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failure in network request!");
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function processWeather(data) {
  return data.currentConditions.conditions;
}

function displayWeather() {
  const submitBtn = document.querySelector("#submitBtn");
  const location = document.querySelector("#q");
  const message = document.querySelector(".weather-message");
  submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      const condition = await main(location.value);
      message.textContent = `The weather in ${location.value} is ${condition}.`;
    } catch {
      console.error("No location found.");
      message.textContent = "Failed to find location.";
    }
  });
}

async function main(location) {
  const apiKey = "JR587EKN4NF38SBRRCMR5B2M9";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=${apiKey}&contentType=json`;

  try {
    const json = await getWeather(url);
    const condition = processWeather(json);
    return condition;
  } catch (err) {
    console.log(err);
    throw new Error("Could not process response.");
  }
}

displayWeather();
