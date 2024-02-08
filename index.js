const connection=require('./connection')
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/student', (req,res) => { 
    connection.query('SELECT * FROM student', (err,rows) => {
        if(err){
            console.log(err)
        }else {
            //console.log(rows)
            res.send(rows)
        }
    })
})
//get student information
app.get('/student/:id', (req,res) => { 
    connection.query('SELECT * FROM student WHERE id=?',[req.params.id], (err,rows) => {
        if(err){
            console.log(err)
        }else {
            //console.log(rows)
            res.send(rows)
        }
    })
})
//DELETE student
app.delete('/student/:id', (req,res) => { 
    connection.query('DELETE FROM student WHERE id=?',[req.params.id], (err,rows) => {
        if(err){
            console.log(err)
        }else {
            //console.log(rows)
            res.send(rows)
        }
    })
})

app.post('/student', (req,res) => { 
    var student = req.body
    var studentData = [student.nom, student.prenom, student.adress, student.email, student.telephone]
    connection.query('INSERT INTO student(nom, prenom, adresse, email, telephone) values(?)',[studentData],(err,rows) => {
        if(err){
            console.log(err)
        }else {
            //console.log(rows)
            res.send(rows)
        }
    })
})

app.patch('/student', (req,res) => { 
    var student = req.body
    connection.query('UPDATE student SET ? WHERE id='+student.id,[student],(err,rows) => {
        if(err){
            console.log(err)
        }else {
            //console.log(rows)
            res.send(rows)
        }
    })
})

app.listen(3000,()=>console.log('Express listening on port 3000 '));