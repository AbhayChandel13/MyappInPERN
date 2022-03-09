import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddStudent.css";

const AddStudent = () => {
const history = useHistory();

  const [student, setStudent] = useState({
    id:"",
    name:"",
    email:"",
    age:"",
    dob:"",
  });
 
  let  name,value;
  const handleInputs =(e) =>{
  //  console.log(e);
   name = e.target.name;
   value = e.target.value;

   setStudent({...student,[name]:value});
  }

  const addData = async(e)=>{
    e.preventDefault();

    const {id,name,email,age,dob} =  student;

    const res = await fetch("http://localhost:8000/api/v1/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        email,
        age,
        dob,
      }),
    });
     window.location = "/";
     console.log(res);

const data = await res.json();
if(data.status===422 || !data) {
window.alert("Invalid data");
console.log("Invalid data");
}else{
  window.alert("data send");
  console.log(" data ok ");  

  history.push("/home");
}
  }


 


  return (
    <>
      <p>Welcome to AddStudent page </p>

      <div className="wrapper rounded bg-white">
        <div className="h3"> Add Student </div>
        <div className="form">
          <form method="POST" />
          <div className="col-md-12 mt-md-0 mt-3">
            {" "}
            <label>id</label>{" "}
            <input
              type="number"
              name="id"
              id="id"
              className="form-control"
              value={student.id}
              onChange={handleInputs}
              placeholder="Enter_ID"
              required
            />{" "}
          </div>

          <div className="col-md-12 mt-md-0 mt-3">
            {" "}
            <label> Name </label>{" "}
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter_Name"
              value={student.name}
              onChange={handleInputs}
              required
            />{" "}
          </div>
          <div className="col-md-12 mt-md-0 mt-3">
            {" "}
            <label>Email</label>{" "}
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter_Email"
              value={student.email}
              onChange={handleInputs}
              required
            />{" "}
          </div>
        </div>
        {/* <div class="row"> */}
        <div className="col-md-12 mt-md-0 mt-3">
          {" "}
          <label>Age</label>{" "}
          <input
            type="age"
            className="form-control"
            name="age"
            id="age"
            value={student.age}
            onChange={handleInputs}
            placeholder="Enter_Age"
            required
          />{" "}
        </div>

        <div className="col-md-12 mt-md-0 mt-3">
          {" "}
          <label>Birthday</label>{" "}
          <input
            type="date"
            className="form-control"
            name="dob"
            id="dob"
            value={student.dob}
            onChange={handleInputs}
            required
          />{" "}
        </div>
        {/* </div> */}
        <div className="row"></div>

        <div className="btn btn-primary mt-3">
          <input type="submit" name="add" id="add"  className="form-submit"  value="Add" onClick={addData}
/>        
     
          </div>

      </div>
     
    </>
  );
};

export default AddStudent;
