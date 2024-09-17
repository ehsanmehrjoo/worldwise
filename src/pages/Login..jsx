import {   useNavigate } from "react-router-dom";
import PageNav from "../Component/PageNav.";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import {useState} from "react"
 


export default function Login() {
const {login }  = useAuth()
const navigate = useNavigate();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  async function handleLogin(e) {
    e.preventDefault(); // Prevents form submission and page reload
    const result = await login(email, password); // Pass email and password
    if (result) {
      navigate(`/App/cities`);
    }
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

        <div>
        {/* <button className="cta">Registration</button> */}
          <button   onClick={handleLogin}>Login</button>
        </div>
      </form>
    </main>
  );
}
