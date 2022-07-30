import Image from "next/future/image";
import style from "../styles/Home.module.css";
import ContentBox from "../components/ContentBox";
import Head from "next/head";
import pic from "../public/images/profile_pic.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>James Z. Howes - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.content}>
        <ContentBox className={style.box}>
          <div className={style["image-div"]}>
            <Image className={style.image} src={pic} alt="Pic of me" />
          </div>
          <div className={style.text}>
            <h1>Hi I&apos;m James!</h1>

            <p>
              Welcome to my site! Feel free to look around. Take a look at my
              github to the source code of this site. While your there check out
              my other projects. If you have any questions send me a message on
              LinkedIn or send me a message on the contact form
            </p>
          </div>
        </ContentBox>
      </div>
      <Footer />
    </>
  );
};

export default Home;
