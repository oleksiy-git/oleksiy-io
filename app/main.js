// default screen mode (color)
let isColorScreenOn = true;

// returns a current Year for "Copyright" section to make this app more dinamic :)
function getCurrentYear() {
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById("current-year").innerHTML = year;
}
getCurrentYear();

const test22 = new OpenNewFolder(siteFolderPath, siteFolderFileList);
// const test = new OpenNewFolder(rootFolderPath, rootFolderFileList);

function setQuickViewContent(quickViewContent) {
  document.getElementById("right-panel-content").innerHTML = quickViewContent;
}

// select default file name on site load (about-txt)
onload = () => {
  document.getElementById("about-txt").classList.add("active-item");
  setQuickViewContent(aboutTxtQuickView);
  setSelectedFileName("about-txt");
};

// Adding Event Listener for User click on files
var userMenubuttons = document.querySelectorAll(".file-item").length;

for (i = 0; i < userMenubuttons; i++) {
  document
    .querySelectorAll(".file-item")
    [i].addEventListener("click", function () {
      var userMenuBtnId = this.id;
      callUserMenuBtn(userMenuBtnId);
      // console.log(this.id);
    });
}

// Adding Event Listener for User dblclick on folders and files

for (i = 0; i < userMenubuttons; i++) {
  document
    .querySelectorAll(".file-item")
    [i].addEventListener("dblclick", function () {
      var userMenuBtnId = this.id;
      openFolder(userMenuBtnId);
      // callUserMenuBtn(userMenuBtnId);
      // console.log(this.id);
    });
}

// Adding Event Listener for User key presses
document.addEventListener("keydown", function (e) {
  callUserMenuBtn(e.code);
  console.log(e.code);
});

// Calling user menu buttons
function callUserMenuBtn(userMenuBtnId) {
  var screenLock = document.querySelector(".screen-lock");

  if (!screenLock) {
    switch (userMenuBtnId) {
      case "site-to-root-folder":
        setQuickViewContent(siteRootQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "about-txt":
        setQuickViewContent(aboutTxtQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "blog-txt":
        setQuickViewContent(blogTxtQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "contact-exe":
        setQuickViewContent(contactExeQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "resume-pdf":
        setQuickViewContent(resumePdfQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "profile-photo-bmp":
        setQuickViewContent(profilePhotoQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "work-experience-txt":
        setQuickViewContent(workExpQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "games-folder":
        setQuickViewContent(workExpQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        break;

      case "tic-tac-toe-exe":
        setQuickViewContent(ticTacToeGameQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);
        runGame(userMenuBtnId);
        break;

      case "site-folder":
        // setQuickViewContent(workExpQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);

        break;
      case "web-projects-folder":
        // setQuickViewContent(workExpQuickView);
        selectFile(userMenuBtnId);
        setSelectedFileName(userMenuBtnId);

        break;
      case "Enter":
        openFolder();
        break;

      case "ArrowUp":
        selectPrevFile();
        break;

      case "ArrowDown":
        selectNextFile();
        break;

      default:
        console.log("This feature is not yet implemented..");
    }
  } else {
    switch (userMenuBtnId) {
      case "Escape":
        closeWindow();
        break;
      default:
        console.log("This feature is not yet implemented..");
    }
  }
}

// takes the name of selected file (Name + extension) and sets into the Right Panel > bottom file name section
function setSelectedFileName(fileName) {
  let rightBottomFileName = document.getElementById("selected-file-name");
  let selectedFileName = document
    .getElementById(fileName)
    .getElementsByTagName("span");

  rightBottomFileName.innerHTML = `${selectedFileName.item(1).innerHTML}.${
    selectedFileName.item(2).innerHTML
  }`;
}

// closes any Popup window message
function closeWindow() {
  var screenLock = document.querySelector(".screen-lock");
  if (screenLock) {
    document.querySelector(".page-wrapper").removeChild(screenLock);
  }
}

// this Constructor opens a folder and sets the content (file list, default file)
function OpenNewFolder(folderPath, fileList) {
  let folderPathTopElement = document.getElementById("top-current-folder-path");
  let folderPathBottomElement = document.getElementById(
    "bottom-current-folder-path"
  );
  let fileListElement = document.getElementById("file-list");

  this.folderPath = folderPath;
  this.fileList = fileList;

  folderPathTopElement.innerHTML = folderPath;
  folderPathBottomElement.innerHTML = folderPath + ">";
  fileListElement.innerHTML = fileList;

  // attaching eventListener for dinamically created elements
  userMenubuttons = document.querySelectorAll(".file-item").length;

  for (i = 0; i < userMenubuttons; i++) {
    document
      .querySelectorAll(".file-item")
      [i].addEventListener("click", function () {
        var userMenuBtnId = this.id;
        callUserMenuBtn(userMenuBtnId);
        console.log(this.id);
      });
  }

  // Adding Event Listener for User dblclick on folders and exe files

  for (i = 0; i < userMenubuttons; i++) {
    document
      .querySelectorAll(".file-item")
      [i].addEventListener("dblclick", function () {
        var userMenuBtnId = this.id;
        openFolder(userMenuBtnId);
        console.log(this.id);
      });
  }
}

function selectNextFile() {
  var el = document.querySelector(".active-item");
  var index = Array.from(document.getElementsByClassName("file-item")).indexOf(
    el
  );
  var arrayLenght = document.getElementsByClassName("file-item").length;

  if (index < arrayLenght - 1) {
    el.classList.remove("active-item");
    var b = el.nextElementSibling;
    b.classList.add("active-item");
    callUserMenuBtn(b.id);
  }
}

function selectPrevFile() {
  var el = document.querySelector(".active-item");
  var index = Array.from(document.getElementsByClassName("file-item")).indexOf(
    el
  );
  if (index > 0) {
    el.classList.remove("active-item");
    var b = el.previousElementSibling;
    b.classList.add("active-item");
    callUserMenuBtn(b.id);
  }
}

function selectFile(userMenuBtnId) {
  let activeItem = document.querySelector(".active-item");
  if (activeItem) {
    activeItem.classList.remove("active-item");
    document.getElementById(userMenuBtnId).classList.add("active-item");
  } else {
    document.getElementById(userMenuBtnId).classList.add("active-item");
  }
}

function openFolder() {
  let activeItem = document.querySelector(".active-item");
  if (activeItem.id === "site-to-root-folder") {
    createRootFolder = new OpenNewFolder(rootFolderPath, rootFolderFileList);
    document.getElementById("site-folder").classList.add("active-item");
  }
  if (activeItem.id === "site-folder") {
    createRootFolder = new OpenNewFolder(siteFolderPath, siteFolderFileList);
    document.getElementById("site-to-root-folder").classList.add("active-item");
  }
  if (activeItem.id === "games-to-root-folder") {
    createRootFolder = new OpenNewFolder(rootFolderPath, rootFolderFileList);
    document.getElementById("games-folder").classList.add("active-item");
  }
  if (activeItem.id === "games-folder") {
    createRootFolder = new OpenNewFolder(gamesFolderPath, gamesFolderFileList);
    document
      .getElementById("games-to-root-folder")
      .classList.add("active-item");
  }
  if (activeItem.id === "web-projects-to-root-folder") {
    createRootFolder = new OpenNewFolder(rootFolderPath, rootFolderFileList);
    document.getElementById("web-projects-folder").classList.add("active-item");
  }
  if (activeItem.id === "web-projects-folder") {
    createRootFolder = new OpenNewFolder(
      webProjectsFolderPath,
      webProjectsFolderFileList
    );
    document
      .getElementById("web-projects-to-root-folder")
      .classList.add("active-item");
  }
}

// game
function runGame(userMenuBtnId) {
  runExeFile(userMenuBtnId);
  setTimeout(() => {
    document.getElementById("black-screen").innerHTML = ticTacToeGameLayout;
  }, 5000);
}

// run new exe file - sets black screen
function runExeFile(userMenuBtnId) {
  document.getElementById("main").insertAdjacentHTML("beforeend", blackScreen);

  setTimeout(() => {
    let selectedFileName = document
      .getElementById(userMenuBtnId)
      .getElementsByTagName("span");

    document
      .getElementById("bottom-current-folder-path")
      .insertAdjacentHTML(
        "beforeend",
        `${selectedFileName.item(1).innerHTML}.${
          selectedFileName.item(2).innerHTML
        }`
      );
  }, 1000);

  setTimeout(() => {
    document
      .getElementById("page-content")
      .insertAdjacentHTML("beforeend", blackScreen);
  }, 2000);
}
