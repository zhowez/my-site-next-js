import style from "../styles/Resume.module.css";
import ContentBox from "../components/ContentBox";
import Head from "next/head";
import Footer from "../components/Footer";
import React, { useRef } from "react";

const Resume = () => {
  const educationRef = useRef();
  const coursesRef = useRef();
  const skillsRef = useRef();
  const workRef = useRef();

  const scrollToRef = (reference) => {
    const offset = reference.current.offsetTop - 100;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>James Z. Howes - Resumé</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.main}>
        <h1>RESUMÉ</h1>
        <hr />

        <div className={style["column-rules"]}>
          <ContentBox className={style["left-column"]}>
            <button onClick={() => scrollToRef(educationRef)}>
              <i className="bi bi-person-lines-fill"></i> {" Education"}
            </button>

            <button onClick={() => scrollToRef(coursesRef)}>
              <i className="bi bi-book-half"></i>
              {" Courses"}
            </button>

            <button onClick={() => scrollToRef(skillsRef)}>
              <i className="bi bi-tools"></i>
              {" Skills"}
            </button>

            <button onClick={() => scrollToRef(workRef)}>
              <i className="bi bi-briefcase-fill"></i>
              {" Work"}
            </button>
          </ContentBox>
          <div className={style["right-column"]}>
            <div className={style.education}>
              <ContentBox className={style.box}>
                <h2 ref={educationRef}>
                  <i className="bi bi-person-lines-fill"></i> {"Education"}
                </h2>
                <hr />
                <h3>Clemson University</h3>
                <h3>2018-2022</h3>
                <h3>Bachelor of Science: Computer Science</h3>
                <h4>GPA: 3.52</h4>
                <h4>
                  Dean&apos;s List: Fall 2019, Fall 2020, Fall 2021, Spring 2022
                </h4>
              </ContentBox>

              <ContentBox className={style.box}>
                <h2 ref={coursesRef}>
                  <i className="bi bi-book-half"></i>
                  {" Relevent Courses"}
                </h2>
                <hr />
                <div className={style.organize}>
                  <ContentBox>Software Development Foundations</ContentBox>
                  <ContentBox>Software Engineering</ContentBox>
                  <ContentBox>Network Programming</ContentBox>
                  <ContentBox>Web Application Development</ContentBox>
                  <ContentBox>Cloud Computing Architecture</ContentBox>
                  <ContentBox>Computer Security Principles</ContentBox>
                </div>
              </ContentBox>
            </div>

            <ContentBox className={style.skills}>
              <h2 ref={skillsRef}>
                <i className="bi bi-tools"></i>
                {" Skills"}
              </h2>
              <hr />
              <div className={style.organize}>
                <ContentBox>C/C++</ContentBox>
                <ContentBox>Java</ContentBox>
                <ContentBox>JavaScript</ContentBox>
                <ContentBox>React.JS</ContentBox>
                <ContentBox>SQL - MySQL</ContentBox>
                <ContentBox>Amazon Web Services (AWS) </ContentBox>

                <ContentBox>EC2</ContentBox>
                <ContentBox>RDS</ContentBox>
                <ContentBox>VPC</ContentBox>
                <ContentBox>Security Groups</ContentBox>

                <ContentBox>Agile/Scrum</ContentBox>
                <ContentBox>GIT</ContentBox>
                <ContentBox>Azure DevOps</ContentBox>
              </div>
            </ContentBox>

            <ContentBox className={style.jobs}>
              {/* TODO: ReWrite all jobs */}
              <h2 ref={workRef}>
                <i className="bi bi-briefcase-fill"></i>
                {" Work"}
              </h2>
              <hr />
              <div className={style["jobs-organize"]}>
                <ContentBox className={style.box}>
                  <h2>Southern Tide - Greenville, SC</h2>
                  <h2>2014 - 2020</h2>

                  <h3>Sales Associate/ Associate Store Manager</h3>

                  <ul>
                    <li>Training new employees in company standards</li>
                    <li>
                      Responsible for creating a fun and inviting atmosphere
                    </li>
                    <li>Delegate responsible to team members</li>
                  </ul>
                </ContentBox>
                <ContentBox className={style.box}>
                  <h2>Walt Disney World Resort - Lake Buena Vista, FL</h2>
                  <h2>Spring of 2020</h2>

                  <h3>Disney College Program</h3>

                  <ul>
                    <li>Providing Excellent Customer Service</li>
                    <li>Resolve guests concerns</li>
                    <li>Keep a balanced register</li>
                  </ul>
                </ContentBox>
                <ContentBox className={style.box}>
                  <h2>Build - A - Bear Workshop - Greenville, SC</h2>
                  <h2>2014 - 2020</h2>

                  <h3>Sales Associate/ Associate Store Manager</h3>

                  <ul>
                    <li>Training new employees in company standards</li>
                    <li>
                      Responsible for creating a fun and inviting atmosphere
                    </li>
                    <li>Delegate responsible to team members</li>
                  </ul>
                </ContentBox>
              </div>
            </ContentBox>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
