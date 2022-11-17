
import { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { GoogleLogin } from "react-google-login";

const GOOGLECLIENTID = "979909028362-m77kbte3cel9jompo35lvn4fsg3vv882.apps.googleusercontent.com"

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:3001/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

async function doLoginWithGoogle(token) {
  const response = await fetch("http://localhost:8000/api/v1/auth/google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const data = await response.json();
  return data.token;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
          localStorage.setItem("token", token);
          setIsLoggedIn(token);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  };
  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  return (
    // <div className='container form_login'>
    //   <h4>LOGIN</h4>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label for="email" className="form-label">Email</label>
    //       <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
    //     </div>
    //     <div className="mb-3">
    //       <label for="password" className="form-label">Password</label>
    //       <input type="password" className="form-control" id="password" onChange={(e)=>setPasword(e.target.value)}/>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input type="submit" value={isLoading ? "Loading" : "Login"} />
            <GoogleLogin
              clientId={GOOGLECLIENTID}
              buttonText="Login with Google"
              onSuccess={haldleSuccessGoogle}
              onFailure={haldleFailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        ) : (
          <input type="submit" value="Logout" onClick={handleLogout} />
        )}
      </header>
    </div>
  );
}

export default Login;
