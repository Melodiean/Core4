import {React, useState} from "react";

function Login() {

  const userInfo = {
    email: "",
    password: "",
  };

  const [info, setInfo] = useState(userInfo);


  const handleChange = (el) => {
    const { name, value } = el.target;
    setInfo({...info,[name]:value,})
  };

  const handleSubmit = (elm) => {
    const url = "https://devquestapi.herokuapp.com/api/v1/auth/login";

    const Qdata = {
      email: info.email,
      password: info.password
    };

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Qdata),
    };

    fetch(url, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((er) => console.log({ Error: er.message }));

    elm.preventDefault();
  };

  return (
    <div className="log">
      <h5>Please Login</h5>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="email" name="email" 
          value={info.email}
          placeholder="Enter Email" onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" 
          value={info.password}
          placeholder="Enter Password" onChange={handleChange} />
        </label>
        <button
          type="submit"
          className="btn-small waves-effect waves-light teal"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
