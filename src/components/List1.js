import React, { useState } from "react";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import "./List.css";

const List1 = (props) => {
  const popup = {
    borderBottom: "solid",
    borderWidth: "1px",
    borderColor: "gainsboro",
  };
  const [open, setOpen] = useState(false);
  const [val, setval] = useState([]);
  const handleServiceRemove = (index) => {
    const list = [...props.arr];
    list.splice(index, 1);
    props.handle(list);
  };
  return (
    <div className="mliscomp">
      {props.arr.map((Users, index) => {
        return (
          <div className="lm">
            <div className="lr" style={popup}>
              <img src={Users.img} className="li" />
              <div className="lit lit1">
                <div className="lhead">{Users.name}</div>
                <p className="lpara">{Users.exp}</p>
              </div>

              {open && Users.id === val ? (
                <div
                  className="popi"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "13px",
                      borderBottom: "solid",
                      borderWidth: "1px",
                      borderColor: "gainsboro",
                      paddingBottom: "4.2px",
                    }}
                  >
                    Lead
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "13px",
                    }}
                    onClick={handleServiceRemove}
                  >
                    Remove
                  </p>
                </div>
              ) : null}
              <ListSharpIcon
                onClick={() => {
                  setOpen(true);
                  setval(Users.id);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List1;
