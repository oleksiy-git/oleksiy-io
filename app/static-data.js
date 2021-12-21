// color palette
const aquaColor = "#00ffff";
const blackColor = "#000000";
const blueDarkColor = "#000080";
const blueLiteColor = "#0000ff";
const brownColor = "#808000";
const brownGreenColor = "#008000";
const greenDarkColor = "#008080";
const greenLiteColor = "#00ff00";
const greyDarkColor = "#808080";
const greyLiteColor = "#c0c0c0";
const pinkDarkColor = "#800080";
const pinkLiteColor = "#ff00ff";
const redDarkColor = "#800000";
const redLiteColor = "#ff0000";
const whiteColor = "#ffffff";
const yellowColor = "#ffff00";

// top left folder paths
const siteFolderPath = `FTP:@oleksiy.io&#92;site`;
const rootFolderPath = `FTP:@oleksiy.io`;
const gamesFolderPath = `FTP:@oleksiy.io&#92;games`;
const webProjectsFolderPath = `FTP:@oleksiy.io&#92;web projects`;

// top right quick view labels
const quickViewLabel = "Quick View";
const infoLabel = "Info";
const systemLabel = "System";
const pictureLabel = "Picture";
const statusLabel = "Status";
const treeLabel = "Tree";

// popup window titles
const popUpTitles = {
  INFO_TITLE: "Info",
  QUIT_TITLE: "Quit",
  ERROR_TITLE: "Error",
  ALERT_TITLE: "Alert",
  DELETE_TITLE: "Delete",
  WARNING_TITLE: "Warning",
};

// popup window buttons
const popUpButtons = {
  OK_BUTTON: "{ Ok }",
  YES_BUTTON: "{ Yes }",
  NO_BUTTON: "[ NO ]",
  CANCEL_BUTTON: "[ Cancel ]",
  CLOSE_BUTTON: "[ Close ]",
};

// popup window messages
const popUpMessages = {
  NOT_IMPL_MSG: "This feature is not yet implemented",
  QUIT_MSG: "Are you sure that you want to quit?",
  DELETE_MSG: "One does not delete a single file.<br>Delete a whole Web Site?",
  LOREM_MSG:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, amet nisi? Reprehenderit, veniam, aperiam dolor neque adipisci repudiandae debitis odio cupiditate sequi est iste consectetur quisquam vel. Et, accusantium minus?",
};

// Quick View messages
const siteRootQuickView = `<span>Folder "FTP:@oleksiy-git.github.io&#92;site"</span>
<p><span>Folders: <span style="color: var(--yellow-font-clr);">0</span></span>
<br><span>Files: <span style="color: var(--yellow-font-clr);">6</span></span>
<br><span>Files Size: <span style="color: var(--yellow-font-clr);">4.4 M</span></span></p>`;
const aboutTxtQuickView = "Some About text will be added";
const blogTxtQuickView = "Some Blog text will be added";
const contactExeQuickView = `<p class="center">*** Quick View is not available for Executable programme ***
<br>*** Please double click or Press Enter ***</p>`;
const resumePdfQuickView = "this is resume pdf";
const profilePhotoQuickView = "this is photo";
const workExpQuickView = `<p class="center">*******************<br>
* Work Experience *<br>*******************</p>
<p><span style="color: var(--yellow-font-clr)";>2015 - present:</span><br>
<span>Lead QA Analyst at Luxoft UK LTD (London)</span></p>
<p><span style="color: var(--yellow-font-clr);">2013 - 2015:</span><br>
<span>Senior QA Engineer at Luxoft Ukraine (Kyiv)</span></p>
<p><span style="color: var(--yellow-font-clr);">2012 - 2013:</span><br>
<span>QA Engineer at Samsung R&D Ukraine (Kyiv)</span></p>
<p><span style="color: var(--yellow-font-clr);">2009 - 2012:</span><br>
<span>Software Engineer at Orneon LTD (Vinnytsya)</span></p>
<p><span style="color: var(--yellow-font-clr);">2008 - 2009:</span><br>
<span>Financial adviser at UkrSibBank BNP Paribas (Vinnytsya)</span></p>
<p class="center">*******************</p>`;
const ticTacToeGameQuickView = `<p class="center">*** Quick View is not available for Executable programme ***
<br>*** Please double click or Press Enter ***</p>`;

// 'SITE' folder: list items (folders & files)
const siteFolderFileList = `<ul>
<li id="site-to-root-folder" class="file-item">
  <span class="file-name left">..</span>
  <span class="file-size center">&#60; UP &#62;</span>
  <span class="file-date center">04:04:1986</span>
</li>
<li id="about-txt" class="file-item">
  <span class="file-name file-name-extension">
    <span>About</span>
    <span>txt</span>
  </span>
  <span class="file-size right">39.20 K</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="blog-txt" class="file-item">
  <span class="file-name file-name-extension">
    <span>Blog</span>
    <span>txt</span>
  </span>
  <span class="file-size right">16.29 K</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="contact-exe" class="file-item exe-ext">
  <span class="file-name file-name-extension">
    <span>Contact</span>
    <span>exe</span>
  </span>
  <span class="file-size right">1.44 M</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="resume-pdf" class="file-item">
  <span class="file-name file-name-extension">
    <span>Resume</span>
    <span>pdf</span>
  </span>
  <span class="file-size right">896.12 K</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="profile-photo-bmp" class="file-item">
  <span class="file-name file-name-extension">
    <span>Profile photo</span>
    <span>bmp</span>
  </span>
  <span class="file-size right">1.2 M</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="work-experience-txt" class="file-item">
  <span class="file-name file-name-extension">
    <span>Work Experience</span>
    <span>txt</span>
  </span>
  <span class="file-size right">35.39 K</span>
  <span class="file-date center">18:02:2021</span>
</li>
</ul>`;

// 'ROOT' folder: list items (folders & files)
const rootFolderFileList = `<ul style="color: var(--white-font-clr);">
<li id="games-folder" class="file-item">
  <span class="file-name file-name-extension">
    GAMES
  </span>
  <span class="file-size center">&#60;FOLDER&#62;</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="site-folder" class="file-item">
  <span class="file-name file-name-extension">
    SITE
  </span>
  <span class="file-size center">&#60;FOLDER&#62;</span>
  <span class="file-date center">18:02:2021</span>
</li>
<li id="web-projects-folder" class="file-item">
  <span class="file-name file-name-extension">
    WEB PROJECTS
  </span>
  <span class="file-size center">&#60;FOLDER&#62;</span>
  <span class="file-date center">18:02:2021</span>
</li>
</ul>`;

// 'ROOT' folder: list items (folders & files)
const gamesFolderFileList = `<ul>
<li id="games-to-root-folder" class="file-item">
  <span class="file-name left">..</span>
  <span class="file-size center">&#60; UP &#62;</span>
  <span class="file-date center">04:04:1986</span>
</li>
<li id="tic-tac-toe-exe" class="file-item exe-ext">
  <span class="file-name file-name-extension">
    <span>Tic-tac-toe</span>
    <span>exe</span>
  </span>
  <span class="file-size right">2.38 M</span>
  <span class="file-date center">04:12:2021</span>
</li>
</ul>`;

// 'WEB PROJECTS' folder: list items (folders & files)
const webProjectsFolderFileList = `<ul>
<li id="web-projects-to-root-folder" class="file-item">
  <span class="file-name left">..</span>
  <span class="file-size center">&#60; UP &#62;</span>
  <span class="file-date center">04:04:1986</span>
</li>
<li id="readme-txt" class="file-item">
  <span class="file-name file-name-extension">
    <span>ReadMe</span>
    <span>txt</span>
  </span>
  <span class="file-size right">39.20 K</span>
  <span class="file-date center">18:02:2021</span>
</li>
</ul>`;

const blackScreen = `<div id="black-screen" class="black-screen"></div>`;

// Tic-tac-toe static data
let ticTacToeGameLayout = `<div class="game-wrap">
<div id="message-id" class="message"></div>
<div id="table" class="table">
  <table>
    <tr>
      <td id="0" onclick="myMove(this,'0')"></td>
      <td id="1" onclick="myMove(this,'1')"></td>
      <td id="2" onclick="myMove(this,'2')"></td>
    </tr>
    <tr>
      <td id="3" onclick="myMove(this,'3')"></td>
      <td id="4" onclick="myMove(this,'4')"></td>
      <td id="5" onclick="myMove(this,'5')"></td>
    </tr>
    <tr>
      <td id="6" onclick="myMove(this,'6')"></td>
      <td id="7" onclick="myMove(this,'7')"></td>
      <td id="8" onclick="myMove(this,'8')"></td>
    </tr>
  </table>
</div>
<div id="start-new-game"></div>
</div>`;
