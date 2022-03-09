import React, { Fragment, useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";

const Home = () => {
  const [students, setStudent] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/students");
      const jsonData = await response.json();

      setStudent(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Fragment>
      <div className="Homepage">
        {/* <p className="pt-5">Welcome to home page </p> */}
        <h1>
          {" "}
          Student Data App <FaApple />
        </h1>
        <table className="table mt-5 text-center table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Dob</th>
            </tr>
          </thead>
          <tbody>
            {students.map((students) => (
              <tr>
                <td>{students.id}</td>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.age}</td>
                <td>{students.dob}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
