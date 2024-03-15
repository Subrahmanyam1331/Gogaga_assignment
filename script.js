let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let resultHeading = document.getElementById("resultHeading");
let resultUrl = document.getElementById("resultUrl");
let bookmarksList = document.getElementById("bookmarksList");

let bookMark = {
    sitename: "google",
    siteUrl: ""
};

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    bookMark.sitename = event.target.value;
});


siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
    bookMark.siteUrl = event.target.value;
});

function validate(bookMark) {
    let {
        siteName,
        siteUrl
    } = bookMark;

    if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        resultHeading.textContent = siteName;
    }
    if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        resultUrl.textContent = siteUrl;
    }
}



bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validate(bookMark);
});

function redirectToForms() {
    var formsContainer = document.getElementById("formsSection");
    formsContainer.scrollIntoView({
        behavior: "smooth"
    });
}

function redirectToPackages() {
    var packagesContainer = document.getElementById("packagesSection");
    packagesContainer.scrollIntoView({
        behavior: "smooth"
    });
}