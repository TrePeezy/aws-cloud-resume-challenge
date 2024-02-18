//Javascript View Counter Code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5ujlilof3karm4gau65gddysr40pxdub.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ' Views: ${data}';
}

updateCounter();
