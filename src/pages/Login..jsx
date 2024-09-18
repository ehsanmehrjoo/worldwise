import {   useNavigate } from "react-router-dom";
import PageNav from "../Component/PageNav.";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import {useEffect, useState} from "react"
import Button from "../Component/Button";
import button from '/src/Component/Button.module.css';


export default function Login() {
const {login , isAuthenticated , error}  = useAuth()
const navigate = useNavigate();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  useEffect(function(){
    if(isAuthenticated === true)
      navigate(`/App`, {replace : true});
  },[isAuthenticated, navigate])

  function handleSubmit (e){
    e.preventDefault();
   if(email && password) login(email , password)
  }
 

  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
       
        <div className={button[`btn-div`]}>
  <Button type="primary" onClick={handleSubmit}>Login</Button>
  <Button type="primary">Registration</Button>
</div>
      </form>
      {error && <h1 className={styles['error-message']}>{error}</h1>}

    </main>
  );
}
