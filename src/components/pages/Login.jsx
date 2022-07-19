import { gql, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const getUserId = gql`
query MyQuery($_eq: String, $_eq1: String) {
  auth(where: {name: {_eq: $_eq}, password: {_eq: $_eq1}}, limit: 1) {
    id
    name
    level
    username
    password
  }
}
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getData, {data, loading, error}] = useLazyQuery(getUserId)
  let navigate = useNavigate();

  useEffect (() =>{
    if(data?.auth.length === 1){
      console.log("data", data);
      return navigate("/")
    }
  }, [data]);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    getData({ variables:{_eq: email, _eq1:password}})
  };
  
  if(loading){
    return<h1>Loading..</h1>
  };
  if(error){
    return<h3>something Wrong..</h3>
  }
  
  console.log(`${email} ===  ${password}`)

  

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "50rem" }}>
        <div className="card-body">
        <form >  
        {data && <h3>gagal</h3>}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleEmail}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handlePassword}
              />
            </div>
          
            <button className="btn btn-primary" type="button" onClick={handleLogin}>
              Submit
            </button>
      </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
