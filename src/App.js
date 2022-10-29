import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import List1 from "./components/List1";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "@fontsource/roboto/700.css";

const obj1 = [
  {
    name: "John Terry",
    id: 1,
    exp: "3 yrs Exp",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/JohnTerry.JPG/170px-JohnTerry.JPG",
  },
  {
    name: "Robertson",
    id: 2,
    exp: "6 yrs Exp",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Maria",
    id: 3,
    exp: "2 yrs Exp",
    img: "https://starsunfolded.com/wp-content/uploads/2021/11/Maria-Ryaboshapka.jpg",
  },
  {
    name: "Alexander",
    id: 4,
    exp: "8 yrs Exp",
    img: "https://www.worldhistory.org/img/r/p/500x600/13337.jpeg?v=1654040539",
  },
  {
    name: "Serina",
    id: 5,
    exp: "2 yrs Exp",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Frank",
    id: 6,
    exp: "6 yrs Exp",
    img: "data:image/jpeg;base64,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",
  },
];
function App() {
  const [users, setUser] = useState(obj1);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  const [show8, setShow8] = useState(true);
  const [show9, setShow9] = useState(true);
  const [show10, setShow10] = useState(true);
  const [show11, setShow11] = useState(true);
  const [show12, setShow12] = useState(true);
  const [show13, setShow13] = useState(true);
  const [show14, setShow14] = useState(true);
  const [arr1, setarr1] = useState([]);
  const [arr2, setarr2] = useState([]);
  const [arr3, setarr3] = useState([]);
  const [arr4, setarr4] = useState([]);
  const [arr5, setarr5] = useState([]);
  const [arr6, setarr6] = useState([]);
  const [arr7, setarr7] = useState([]);

  const co1 = {
    borderRadius: "8px",

    marginBottom: "0px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };
  const co2 = {
    borderRadius: "8px",
    marginBottom: "30px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const co3 = {
    borderRadius: "8px",

    marginBottom: "0px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    backgroundColor: "#545479",
    borderColor: "#545479",
  };
  return (
    <div className="mainhome">
      <div className="maindiv">
        <h1 className="header">Categories</h1>
        <left>
          <div>
            <div className="mainlist" style={show1 == false ? co1 : co2}>
              ProjectManager{" "}
              {show1 ? (
                <ControlPointIcon
                  className="icondes"
                  onClick={() => {
                    setShow1(false);
                  }}
                />
              ) : (
                <RemoveCircleOutlineIcon
                  className="icondes"
                  onClick={() => {
                    setShow1(true);
                  }}
                />
              )}
            </div>
            {show1 ? null : (
              <>
                <List menu={obj1} arr={arr1} handle={setarr1} />
              </>
            )}
          </div>
          <div>
            <div>
              <div className="mainlist" style={show2 == false ? co1 : co2}>
                UI/UX Designer{" "}
                {show2 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow2(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow2(true)}
                  />
                )}
              </div>
              {show2 ? null : (
                <>
                  <List menu={obj1} arr={arr2} handle={setarr2} />
                </>
              )}
            </div>

            <div>
              <div className="mainlist" style={show3 == false ? co1 : co2}>
                Front End Developer{" "}
                {show3 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow3(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow3(true)}
                  />
                )}
              </div>
              {show3 ? null : (
                <>
                  <List menu={obj1} arr={arr3} handle={setarr3} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show4 == false ? co1 : co2}>
                Back End Developer{" "}
                {show4 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow4(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow4(true)}
                  />
                )}
              </div>
              {show4 ? null : (
                <>
                  <List menu={obj1} arr={arr4} handle={setarr4} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show5 == false ? co1 : co2}>
                QA/Tester"{" "}
                {show5 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow5(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow5(true)}
                  />
                )}
              </div>
              {show5 ? null : (
                <>
                  <List menu={obj1} arr={arr5} handle={setarr5} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show6 == false ? co1 : co2}>
                Mobile Developers{" "}
                {show6 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow6(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow6(true)}
                  />
                )}
              </div>
              {show6 ? null : (
                <>
                  <List menu={obj1} arr={arr6} handle={setarr6} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show7 == false ? co1 : co2}>
                DevOps{" "}
                {show7 ? (
                  <ControlPointIcon
                    className="icondes"
                    onClick={() => {
                      setShow7(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes"
                    onClick={() => setShow7(true)}
                  />
                )}
              </div>
              {show7 ? null : (
                <>
                  <List menu={obj1} arr={arr7} handle={setarr7} />
                </>
              )}
            </div>
          </div>
        </left>
      </div>
      <div className="maindiv1">
        <h1
          className="header"
          style={{ marginTop: "40px", fontFamily: "Roboto Slab" }}
        >
          Team Members
        </h1>
        <left>
          <div>
            <div className="mainlist" style={show8 == false ? co3 : co2}>
              ProjectManager{" "}
              {show8 ? (
                <ControlPointIcon
                  className="icondes1"
                  onClick={() => {
                    setShow8(false);
                  }}
                />
              ) : (
                <RemoveCircleOutlineIcon
                  className="icondes1"
                  onClick={() => {
                    setShow8(true);
                  }}
                />
              )}
            </div>
            {show8 ? null : (
              <>
                <List1 menu={obj1} arr={arr1} handle={setarr1} />
              </>
            )}
          </div>
          <div>
            <div>
              <div className="mainlist" style={show9 == false ? co3 : co2}>
                UI/UX Designer{" "}
                {show9 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow9(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow9(true)}
                  />
                )}
              </div>
              {show9 ? null : (
                <>
                  <List1 menu={obj1} arr={arr2} handle={setarr2} />
                </>
              )}
            </div>

            <div>
              <div className="mainlist" style={show10 == false ? co3 : co2}>
                Front End Developer{" "}
                {show10 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow10(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow10(true)}
                  />
                )}
              </div>
              {show10 ? null : (
                <>
                  <List1 menu={obj1} arr={arr3} handle={setarr3} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show11 == false ? co3 : co2}>
                Back End Developer{" "}
                {show11 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow11(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow11(true)}
                  />
                )}
              </div>
              {show11 ? null : (
                <>
                  <List1 menu={obj1} arr={arr4} handle={setarr4} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show12 == false ? co3 : co2}>
                QA/Tester"{" "}
                {show12 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow12(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow12(true)}
                  />
                )}
              </div>
              {show12 ? null : (
                <>
                  <List1 menu={obj1} arr={arr5} handle={setarr5} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show13 == false ? co3 : co2}>
                Mobile Developers{" "}
                {show13 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow13(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow13(true)}
                  />
                )}
              </div>
              {show13 ? null : (
                <>
                  <List1 menu={obj1} arr={arr6} handle={setarr6} />
                </>
              )}
            </div>
            <div>
              <div className="mainlist" style={show14 == false ? co3 : co2}>
                DevOps{" "}
                {show14 ? (
                  <ControlPointIcon
                    className="icondes1"
                    onClick={() => {
                      setShow14(false);
                    }}
                  />
                ) : (
                  <RemoveCircleOutlineIcon
                    className="icondes1"
                    onClick={() => setShow14(true)}
                  />
                )}
              </div>
              {show14 ? null : (
                <>
                  <List1 menu={obj1} arr={arr7} handle={setarr7} />
                </>
              )}
            </div>
          </div>
        </left>
      </div>
    </div>
  );
}

export default App;
