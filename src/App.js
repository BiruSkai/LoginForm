import React, {useState} from "react";
import LoginForm from "./components/LoginForm";


function App() {
  const adminUser = {
    email: "admin@email.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("")

  const Login = details => {
    if( details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Login successful")
      setUser({name:details.name, email: details.email})
    } else {
      console.log("Details do not match")
    }
  };

  const Logout = () => {
    setUser({name:"", email:""})
  };

  return (
    <div className="App">
      {
        (user.email != "") ? (
          <div className= "welcome">
            <h2>Welcome <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )
      }  
    </div>
  );
}

export default App;