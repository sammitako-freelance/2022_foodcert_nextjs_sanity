"use client";
import React from "react";
import Link from "next/link";
// import Seo from "../components/Seo";

const PageNotFound = () => {
  return (
    <>
      {/* <Seo title={'Page Not Found'} /> */}
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>Looks like the page you’re looking for doesn’t exist.</p>
          <Link className="home" href="/">
            Back To Homepage
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          #notfound {
            position: relative;
            height: 100vh;
          }

          #notfound .notfound {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          .notfound {
            max-width: 920px;
            width: 100%;
            line-height: 1.4;
            text-align: center;
            padding-left: 15px;
            padding-right: 15px;
          }

          .notfound .notfound-404 {
            position: absolute;
            height: 100px;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            z-index: -1;
          }

          .notfound .notfound-404 h1 {
            font-family: "Noto Sans KR", sans-serif;
            color: #ececec;
            font-weight: 900;
            font-size: 276px;
            margin: 0px;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          .notfound h2 {
            font-family: "Noto Sans KR", sans-serif;
            font-size: 46px;
            color: #000;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0px;
          }

          .notfound p {
            font-size: 16px;
            color: #000;
            font-weight: 400;
            text-transform: uppercase;
            margin-top: 15px;
            margin-bottom: 30px;
          }

          @media only screen and (max-width: 480px) {
            .notfound .notfound-404 h1 {
              font-size: 162px;
            }
            .notfound h2 {
              font-size: 26px;
            }
          }
        `}
      </style>
    </>
  );
};

export default PageNotFound;
