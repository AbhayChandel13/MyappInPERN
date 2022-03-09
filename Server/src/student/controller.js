const { parse } = require('pg-protocol');
const pool = require('../../db');

const queries = require('./queries');

const getStudents = (req,res)=>{
    pool.query(queries.getStudents, (error,results)=>{ 
        if (error) throw error;
        res.status(200).json(results.rows);
    })  
}

const getStudentById =(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addStudent = (req, res) => {
  const {name,email,age,dob}= req.body;

  //check if the email is already exits:
  pool.query(queries.checkEmailExits,[email],(error,results)=>{
      if(results.rows.length){
          res.send("email already exits");
           }
   // add students to db:
    pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>{
        if(error) throw error;
        res.status(201).send("Student added successful !");
            
    })

  });
};

//Deleting student:

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {  
      const  noStudentFound = !results.rows.length;
    if (noStudentFound) {
        res.send("Student does not exits in the database");
    }

    pool.query(queries.removeStudent,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Student removed Successfully");
    }); 
  });
};

//update Student:
 const updateStudent =(req,res)=>{
     const id = parseInt(req.params.id); 
     const {name}=req.body;
     
     pool.query(queries.getStudentById, [id], (error, results) => {  
      const  noStudentFound = !results.rows.length;
    if (noStudentFound) {
        res.send("Student does not exits in the database");
    }

       pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student Updated Successfully");
}); 

  })
 }

module.exports ={
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};