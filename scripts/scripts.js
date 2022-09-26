const URL = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector("p");
const advice = document.querySelector("h1");
const article = document.querySelector("article");
const button = document.querySelector("button");

axios
  .get(URL)
  .then((res) => {
    // pull in data from response using dot notation.
    let adviceIdContent = res.data.slip.id;
    let adviceContent = res.data.slip.advice;

    // needed to conver the straight single quote with the fancy one.
    let convertedAdvice = adviceContent.replace(/'/g, "&rsquo;");

    // setting innerHTML of empty tags with the generated advice data.
    adviceId.innerHTML = `Advice #${adviceIdContent}`;
    advice.innerHTML = `&#8220;${convertedAdvice}&#8221;`;

    // during refresh, needed to show entire article component instead of seeing an empty one before data loads.
    article.style.display = "flex";
  })
  .catch((error) => console.log("Error: ", error));
