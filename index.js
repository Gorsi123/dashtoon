async function query(data) {
    // try {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: {
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
    // }
    // catch (error) {
    //     let errorMessage = document.createElement("p");
    //     errorMessage.textContent = "Error";
    //     container.appendChild(errorMessage);
    //     container.style.display = 'flex';
    //     container.style.alignItems = 'center';
    //     container.style.justifyContent = 'center';
    //     console.error("Error:", error.message);
    // }
}
let input;
var cnt=1;
const container = document.getElementById("image-container");
let h1 = document.querySelector('h1');
for(var i=1;i<=10;i++){
let search = document.getElementById(`button-addon${i}`);
search.addEventListener("click", function () {
    input = document.querySelector("#msg").value;
    const crel=document.getElementById(`${cnt}`);
    console.log(input);
    crel.remove();
    cnt++;
    query({ "inputs": input }).then((blob) => {
        let imageUrl = URL.createObjectURL(blob);
        let imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        let comic=document.createElement('div');
        comic.className="comic";
        comic.innerHTML=`<p>${input}</p>`;
        container.appendChild(imageElement);
        container.appendChild(comic);
    })
    .catch((err)=>{
        alert(err);
    })
}
);
}

const themeToggleBtn = document.getElementById("topRightButton");
const body = document.body;
const searchbar = document.querySelector('#msg');
const submit = document.querySelector('#button-addon2');
themeToggleBtn.addEventListener("click", function () {
    if (themeToggleBtn.classList.contains("dark-theme")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
function enableDarkMode() {
    body.classList.add("dark-theme");
    searchbar.classList.add("dark-theme");
    submit.classList.add("dark-theme");
    themeToggleBtn.classList.add("dark-theme");
    h1.classList.add("dark-theme");
    themeToggleBtn.innerHTML = "LIGHT";

}
function disableDarkMode() {
    body.classList.remove("dark-theme");
    searchbar.classList.remove("dark-theme");
    submit.classList.remove("dark-theme");
    themeToggleBtn.classList.remove("dark-theme");
    h1.classList.remove("dark-theme");
    themeToggleBtn.innerHTML = "DARK";
}

