import Link from "next/link";
import React from "react";

type Props = {};

const ServerError = (props: Props) => {
  return (
    <div className="" id="noserver">
      <div className="noserver">
        <div className="noserver-500">
          <h1>Oops!</h1>
          <h2>500 - OUR SERVER IS ON A BREAK</h2>
        </div>
        <Link href="/">GO TO HOMEPAGE</Link>
      </div>
      <style jsx>
        {`
          #noserver {
            position: relative;
            height: 100vh;
          }

          #noserver .noserver {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          .noserver {
            max-width: 520px;
            width: 100%;
            line-height: 1.4;
            text-align: center;
          }

          .noserver .noserver-500 {
            position: relative;
            height: 200px;
            margin: 0px auto 20px;
            z-index: -1;
          }

          .noserver .noserver-500 h1 {
            font-size: 236px;
            font-weight: 200;
            margin: 0px;
            color: #211b19;
            text-transform: uppercase;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          .noserver .noserver-500 h2 {
            font-size: 28px;
            font-weight: 400;
            text-transform: uppercase;
            color: #211b19;
            background: #fff;
            padding: 10px 5px;
            margin: auto;
            display: inline-block;
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
          }

          @media only screen and (max-width: 767px) {
            .noserver .noserver-500 h1 {
              font-size: 148px;
            }
          }

          @media only screen and (max-width: 480px) {
            .noserver .noserver-500 {
              height: 148px;
              margin: 0px auto 10px;
            }
            .noserver .noserver-500 h1 {
              font-size: 86px;
            }
            .noserver .noserver-500 h2 {
              font-size: 16px;
            }
            .noserver a {
              padding: 7px 15px;
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServerError;
