import "./components/navbar.css";
function navbar(){
    return (
       <>
        <div id="navbar">
        <div id="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
        </div>
        <h1>React</h1>
        <div id="a">
        <a href="index.html">Home</a>
        </div>
        <div id="b">
            <a href="documentation.html">Documentation</a>
            <a href="signup.html">Signup</a>    
            <a href="login.html">Login</a>    
        </div>
        </div>
        
        </>
    );   
}

export default navbar;