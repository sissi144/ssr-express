import React from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
       <p className={styles.desc_about}>About123</p>
      <Link to="/about"> About</Link>
    </div>
  );
}

export default Home;