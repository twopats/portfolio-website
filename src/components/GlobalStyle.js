import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        color:black;
        /* overflow: hidden; */
    }

    html{
        /* overflow-x: hidden; */
        background: #464648;
    }
    .section{
        position: relative;
        /* height: 100vh; */
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
            }
    .strong {
        font-weight: bold;
        text-shadow: 0.05em 0.035em 10px rgb(141, 141, 141);
    }
    .line {
        border-bottom: 2px solid #00b7c7;
        display: flex;
        margin: 1.6rem 0;
        width: 100px;
    }

    .img-lg-container {
      max-width: 1280;
      margin: 0 auto auto 0;
      width: 75%;
      box-shadow: 0px 0px 2px #414141;
    }
    .img-md-container {
      max-width: 768px;
      margin: 0;
      bottom: 0;
      right: 13%;
      width: 29%;
      z-index: 10;
      box-shadow: 0px 0px 10px #414141;
      position: absolute;
    }
    .img-sm-container {
      max-width: 736px;
      margin: 0;
      bottom: 0;
      right: 0;
      width: 19%;
      z-index: 11;
      box-shadow: 0px 0px 10px #414141;
      position: absolute;
    }
    




`;

export default Globalstyle;
