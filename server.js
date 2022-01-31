const express = require ('express');
const { handle } = require('express/lib/application');
const mongoose = require ('mongoose');

const connectDB= require ('./configDB/config.js')
const PersonDB= require ('./Model/model.js')


// adding new person
// const person= new PersonDB({name: 'Monica', age:35, favoriteFood: ['burritos']}) 
// person.save((err)=>{
//     if (err) return handleError(err)
//     console.log('New person added')
// })


//adding multiple people
// PersonDB.create(
//     {name: 'Chris', age:32, favoriteFood: ['burritos']},
//     {name: 'Rami', age:16, favoriteFood: ['couscous', 'panini']},
//     {name: 'Firas', age:29, favoriteFood: ['fried chicken', 'pasta']} 
// )

// Searching all Data
// const searchAllData= async()=>{
//    try{
//     const data=await PersonDB.find({})
//     console.log (data)
//    }catch(error){
//        console.log(error)

//    }
// }
// searchAllData()

//searching one based on food
// const food= {favoriteFood:['couscous','panini']}
// const searchOne= async()=>{
 
//     try{
//     const data= await PersonDB.findOne(food)
// console.log(data);
// }catch (error){
//     console.log(error);
// }}
// searchOne()

//searching one based on ID
// const personId= {_id:"61f5422988ee22a63af47f3a" }
// const searchbyId= async()=>{
 
//     try{
//     const data= await PersonDB.findById(personId)
// console.log(data);
// }catch (error){
//     console.log(error);
// }}
// searchbyId()

//adding food to favorites
// const personId= {_id:"61f5422988ee22a63af47f3a" }
// const food= 'hamburger'
// const addfood= async()=>{
//  try {
//      const data= await PersonDB.findById(personId).exec()
//      await data.favoriteFood.push(food)
//      await data.save()
//      console.log(data)
//  }catch (error){
//      console.log(error)
//  }}

//  addfood()

//updating age
// const personName= {name:'Chris'}
// const updateAge= async()=>{
//     const data = await PersonDB.findOneAndUpdate(personName, {age:20},  { new:true} )
//     console.log(data);
// }

// updateAge()

//Removing one person by ID
// const personId='61f6de466c64447af4decdb6'
// const dltPersonById= async ()=>{
//      await PersonDB.findByIdAndRemove(personId)
//      console.log('person removed');
// }
//  dltPersonById()


//removing many
// var removemany = function done(){
//     var nameRemove = "Mary";
//     PersonDB.remove({name : nameRemove}, (error, result)=>{
//         if(error){
//             console.log(error.toString());
//         }else{
//             done(null, result);
//         }
//     })
// }
// removemany();


//fiding people who like burritos
const food = 'burritos';
const chainSearch =async()=> {

    PersonDB.find({favoriteFood:food}).sort({ name:1 }).limit(2).select({age:0}).exec()
    .then(doc => console.log(doc))
    .catch(err=>console.log(err))

  };
  chainSearch();


connectDB()

const app = express();

const port= process.env.PORT ;




app.listen(port, (err)=>{
    err ? console.log (err) :
    console.log(`server is running on port ${port}`)
})