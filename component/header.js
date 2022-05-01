function header() {
  return `
              <div>
                <a href="./index.html"><img src="./images.jpg" id="logo" alt="logo" /></a>
              </div>
              <div id="search">
                <input type="text" id="searchBox" placeholder="Search Your Recipes">
              </div>
              <div id="options">
                <a href="./receipe.html"><h3>Random Receipe</h3></a>
                <a href="./login.html"><h3>Login</h3></a>
                <a href="./signup.html"><h3>Signup</h3></a>
              </div>`;
}

export default header;
