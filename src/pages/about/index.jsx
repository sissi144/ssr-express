import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';
import './style.css'

function About() {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(`1月26日下午，A股上市公司长安汽车发布公告称，已与华为签署《投资合作备忘录》。根据备忘录，华为拟将华为车BU的核心技术和资源整合至新公司，长安汽车及关联方将有意投资该公司。
这一操作堪称华为历史首次。
华为非上市公司，公司股份100%掌握在创始人任正非及全体员工手中，核心业务如ICT、终端、华为云、数字能源、海思（半导体）均为100%控股。即便为筹集资金，华为也是选择发债融资，而非稀释股权。`)
  },[])
  return (
    <div>
      <h1 className= "about">About</h1>
      <p className={styles.desc_text}>{ text}</p>
      <Link to ='/home'>Home</Link>
    </div>
  );
}

export default About;