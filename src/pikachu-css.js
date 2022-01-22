const string = `
#skin-wrapper {
  position: fixed;
  top: 0;
  right: 0;
}

#html {
  position: fixed;
  overflow-x: hidden;
  left: 0;
}

@media (min-width: 500px) {
  #skin-wrapper {
    height: 100%;
    width: 50vw;
  }

  #html {
    height: 100%;
    width: 50vw;
    top: 0;
  }
  .nose:hover {
    animation: wave 1s infinite linear;
  }
}

@media (max-width: 500px) {   
    #html {
        height: 55vh;
        width: 100%;
        top: 35vh;

    }

    #skin-wrapper {
        height: 35vh;
        width: 100%;
    }
}

#skin-wrapper {
  background: #ffe600;
  border: 1px solid black;
}

#html {
  border: 1px solid black;
}

.nose {
  border-width: 10px 10px;
  border-style: solid;
  border-color: black transparent transparent;
  /*border-bottom: none;*/
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 3;
}

.oval {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}

.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50% 50%;
}

.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 14px;
  top: 2px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up .lip {
  top: -10px;
  border: 5px solid black;
  height: 30px;
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  z-index: 1;
  background-color: #ffe600;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-15deg) translateX(-53px);

}

.mouth .up .lip::before {
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background-color: #ffe600;

}

.mouth .up .lip::after {
  content: '';
  display: block;
  width: 90px;
  height: 7px;
  position: absolute;
  top: 0;
  background-color: #ffe600;

}

.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.left::after {
  top: -6px;
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .up .lip.right::after {
  top: -6px;
}


.mouth .down {
  height: 180px;
  position: absolute;
  top: 12px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .circle1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .circle1 .circle2 {
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
  background: #ff485f;
}

.skin .face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 2;
}

.skin .face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}

.skin .face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}

`
export default string;