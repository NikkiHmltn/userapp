
// add all models 
const { response } = require('express');
const db = require('./models');

// // create a user inside user table
// db.user.create({
//     firstName: 'Rome', 
//     lastName: 'Bell',
//     age: 32,
// }).then(createdUser => {
//     console.log(createdUser.get())
// })

// REad from users table
// db.user.findOne({
//     where: {firstName: 'Nikki'}
// }).then(foundUser => {
//     console.log(foundUser.get())
// })

// db.user.findAll().then(allUsers => {
//     console.log(allUsers)
//     console.log(allUsers[0].get())

// })

// db.user.update({
//     lastName: 'DelFava'
// }, {
//     where: { firstName: 'Nikki'}
// }).then(numRowsChange => {
//     console.log(numRowsChange)
// })

// delete a user

// db.user.destroy({
//     where: { lastName: 'Bell' }
// }).then(numRowsDelete => {
//     console.log(numRowsDelete)
// })

// // race condition where two creates compete to be created first. sometimes the first create is created first, sometimes its the second

// db.user.findOne()
// .then((foundUser) => {
//     foundUser.createPet({
//         name: 'Violet',
//         species: 'Pit mix'
//     })
// })

// db.user.findOne().then((foundUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet)=> {
//     violet.getUser().then((foundUser)=> {
//         console.log(foundUser)
//     })
// })

// db.pet.create({
//     name: 'Hercules',
//     species: 'Min Pin'
// }).then((herc)=> {
//     console.log(herc)
// })

// db.pet.findOne({
//     where: {
//         name: 'Hercules'
//     }
// }).then((herc)=> {
//     //86 wil run before 85 is finished
//     // const user = db.user.findOne()
//     // herc.addUser(user)

//     db.user.findOne().then((foundUser)=> {
//         herc.setUser(foundUser)
//     })
// })

// db.toy.create({
//     type: 'squeaky',
//     color: 'red'
// })

// db.pet.findOne({
//     where: {
//         name: 'Moose'
//     }
// })
// .then((moose) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//         }
//     }).then((foundToy) => {
//         moose.addToy(foundToy)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// })
// .then((violet) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//         }
//     }).then((foundToy) => {
//         violet.addToy(foundToy)
//     })
// })

db.toy.findOne({
    where: {
        color: 'red'
    }
}).then((foundToy) => {
        foundToy.getPets().then((pets)=> {
            console.log(pets)
        })
})

