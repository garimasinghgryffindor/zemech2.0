import React, { useEffect, useState } from "react";
import "./Book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Book() {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://zemech-garima-singhs-projects.vercel.app/api/waitingList")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeFName = (event) => {
    setfname(event.target.value);
  };

  const changeLName = (event) => {
    setlname(event.target.value);
  };

  const changeEmail = (event) => {
    setemail(event.target.value);
  };

  const changeAddress = (event) => {
    setaddress(event.target.value);
  };

  const onSubmit = function (event) {
    //event.preventDefault();

    let time = new Date();

    //console.log("I AM THE LENGTH OF THE COLLECTION :   " + users.length)
    //console.log("THE LAST USER IS :  ");
    //if(users.length===0){
    //    console.log("Empty database");
    //} else {
    //    console.log(users[users.length-1]);
    //}
    console.log("END OF THE SENTENCE");

    if(users.length === 0 ){
        time = new Date();
        console.log("FIRST BLOCK GOT TRIGGERED")
        time.setHours(time.getHours() + 1);
        time.setMinutes(0 , 0 , 0);
    }
    else if(new Date(users[users.length-1].slot_allot_end).getTime() >= new Date().getTime()){
        time = new Date(users[users.length-1].slot_allot_end);
        console.log("SECOND BLOCK GOT TRIGGERED");
    } else {
        time = new Date();
        console.log("THIRD BLOCK GOT TRIGGERED");
        time.setHours(time.getHours() + 1);
        time.setMinutes(0 , 0 , 0);
    }
    console.log(time.toLocaleTimeString());
    let time2 = new Date(time);
    time2.setHours(time2.getHours() + 1);
    console.log(time2.toLocaleTimeString());

    const registered = {
      fName: fname,
      lName: lname,
      email: email,
      address: address,
      slot_allot: time,
      slot_allot_end: time2
    };

    axios
      .post("https://zemech-garima-singhs-projects.vercel.app/api/book", registered)
      .then((response) => console.log(response.data));

    //  console.log("Current date & time is :  "+Date.now());
    //  console.log(time.toLocaleTimeString());
    setfname("");
    setlname("");
    setemail("");
    setaddress("");
  };

  //OUTPUT
  return (
    <div className="book">
      <div className="form-div">
        <form onSubmit={onSubmit}>
          <input
            className="form-control form-group item"
            type="text"
            id="fname"
            name="fName"
            placeholder="First Name"
            onChange={changeFName}
            value={fname}
            autoComplete="off"
            required
            autoFocus
          />
          <input
            className="form-control form-group item"
            type="text"
            id="lname"
            name="lName"
            placeholder="Last Name"
            onChange={changeLName}
            value={lname}
            autoComplete="off"
            required
          />
          <input
            className="form-control form-group item"
            type="email"
            id="floatingInput"
            name="email"
            placeholder="Email"
            onChange={changeEmail}
            value={email}
            autoComplete="off"
            autoFocus="off"
            required
          />
          <input
            className="form-control form-group item"
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            onChange={changeAddress}
            value={address}
            autoComplete="off"
            required
          />

          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Book Slot"
          />
        </form>
      </div>
    </div>
  );
}

export default Book;
