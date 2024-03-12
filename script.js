const randomH1Color = document.getElementById("randomH1Color");
const randomButton = document.getElementById("random");
const buttons = document.querySelectorAll(".color-button");
const lineTop = document.getElementById("line-top");
const lineBottom = document.getElementById("line-bottom");

setInterval(() => {
  const randomColorValue = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  randomH1Color.style.color = randomColorValue;
  randomButton.style.color = randomColorValue;
  randomButton.style.borderColor = randomColorValue;
  lineTop.style.backgroundColor = randomColorValue;
  lineBottom.style.backgroundColor = randomColorValue;
}, 2500);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.id;
    if (color === "random") {
      document.body.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )})`;
    } else {
      document.body.style.backgroundColor = color;
    }
    if (color !== "random") {
      button.style.color = "inherit";
    }
  });
});

function handleMouseOver(event) {
  const targetElement = event.target;
  if (targetElement === lineTop || targetElement === lineBottom) {
    targetElement.style.width = "100%";
  }
}

function handleMouseOut(event) {
  const targetElement = event.target;
  if (targetElement === lineTop || targetElement === lineBottom) {
    targetElement.style.width = "20%";
  }
}

lineTop.addEventListener("mouseover", handleMouseOver);
lineTop.addEventListener("mouseout", handleMouseOut);
lineBottom.addEventListener("mouseover", handleMouseOver);
lineBottom.addEventListener("mouseout", handleMouseOut);

document.onselectstart = () => {
  return false;
};
