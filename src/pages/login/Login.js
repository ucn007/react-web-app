import React, { useEffect , useState } from "react";
import "./login.scss";
function Login() {
    const [email,setEmail]=useState("");
  const history = userHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/add");
    }
  }, []);
  async function login(){

  }
  return (
    <div>
      <div>
        <form action="">
          <div>
            <label> Emai</label>
            <input type="email" onChange={}/>
          </div>
          <div>
            <label> password</label>
            <input type="password" />
          </div>
          <div>
            <button onChange={} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
