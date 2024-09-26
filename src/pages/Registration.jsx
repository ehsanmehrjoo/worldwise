import React, { useState } from 'react'
 
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import insex from "../Component/AppNav.module.css";
import Button from '../Component/Button';
import button from '/src/Component/Button.module.css';
import { useAuth } from '../contexts/FakeAuthContext';
import { useCities } from '../contexts/CitiesContext';
import PageNav from '../Component/PageNav';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(""); 
  console.log(typeof avatar);
  const navigate = useNavigate("");
  const { registrat, isAuthenticated } = useAuth();
  const { cities } = useCities();

  
  async function handleAddUser(e) {
    e.preventDefault();
    if (!name || !email || !password || !avatar) return; // بررسی فیلدهای خالی

    const newUser = {
      name,
      email,
      password,
      avatar,
      cities: [],
    };

    registrat(newUser); // ثبت نام کاربر
    navigate("/App/cities"); // هدایت به صفحه شهرها
  }

  return (
    <main className={styles.login} onSubmit={handleAddUser}>
      <PageNav />
      <form className={styles.form}>
        <div className={insex.nav}>
          <ul>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Registration">Registration</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

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

        <div className={styles.row}>
          <label htmlFor="avatar">Avatar</label>
          <input
            style={{ color: "#0F1213" }}
            type="file"
            id="avatar"
            onChange={(e) => setAvatar(e.target.files[0])} // تغییر به e.target.files[0]
          />
        </div>

        <div className={button[`btn-div`]}>
          <Button type="primary" onClick={handleAddUser}>Registration</Button> {/* اضافه کردن onClick */}
        </div>
      </form>
    </main>
  );
}

export default Registration;
