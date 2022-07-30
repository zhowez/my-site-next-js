import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style["footer-box"]}>
      <p>© 2022 James Z. Howes. All rights reserved.</p>
      <div>
        <a href="https://github.com/zhowez">
          <i className="bi bi-github" />
          {" Check Out My Github"}
        </a>
        <a href="https://www.linkedin.com/in/jameszhowes/">
          <i className="bi bi-linkedin" />
          {" Let's Connect!"}
        </a>
      </div>
    </div>
  );
};

export default Footer;
