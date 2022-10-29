import React from "react";
import Button from "@mui/material/Button";
import "./List.css";
const List = (props) => {
  const popup = {
    borderBottom: "solid",
    borderWidth: "1px",
    borderColor: "gainsboro",
  };
  return (
    <div className="mliscomp">
      {props.menu.map((Users, index) => {
        return (
          <div className="lm">
            <div className="lr" style={Users.id == 6 ? null : popup}>
              <img src={Users.img} className="li" />
              <div className="lit">
                <div className="lhead">{Users.name}</div>
                <p className="lpara">{Users.exp}</p>
              </div>
              <Button
                variant="contained"
                className="lb"
                style={{ backgroundColor: "#545479" }}
                onClick={() => props.handle([...props.arr, Users])}
              >
                Add
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
