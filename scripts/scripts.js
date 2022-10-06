const URL = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector("p");
const advice = document.querySelector("h1");
const article = document.querySelector("article");
const button = document.querySelector("button");

async function generateAdvice() {
  let res = await axios.get(URL);
  let data = res.data.slip;
  let adviceIdContent = data.id;
  let adviceContent = data.advice;

  // needed to convert the straight single quote with the fancy one.
  let convertedAdvice = adviceContent.replace(/'/g, "&rsquo;");

  adviceId.innerHTML = `Advice #${adviceIdContent}`;
  advice.innerHTML = `&#8220;${convertedAdvice}&#8221;`;

  // during refresh, needed to show entire article component instead of seeing an empty one before data loads.
  article.style.display = "flex";
}

generateAdvice();

button.addEventListener("mousedown", generateAdvice);
