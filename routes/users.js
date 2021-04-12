import express from 'express'

import uniqfy from '../utils/uniqueId-generator.js'

// get router
const router = express.Router()

// mock data
const mockUsers = [
  {
    id: uniqfy(),
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
  },
  {
    id: uniqfy(),
    firstName: 'Jane',
    lastName: 'Doey',
    age: 26,
  },
]

// GET all users
router.get('/', (req, res) => {
  res.send(mockUsers)
})

// POST single user
router.post('/', (req, res) => {
  const newUser = { id: uniqfy(), ...req.body }

  mockUsers.push(newUser)

  res.send(newUser)
})

// GET one user
router.get('/:userIdToGet', (req, res) => {
  const { userIdToGet } = req.params

  const userToGet = mockUsers.find(user => user.id === userIdToGet)

  res.send(userToGet ? userToGet : 'No such user!!')
})

// DELETE one user
router.delete('/:userIdToDelete', (req, res) => {
  const { userIdToDelete } = req.params

  const indexToDelete = mockUsers.findIndex(user => user.id === userIdToDelete)

  if (indexToDelete < 0) {
    res.send(`No user with id: ${userIdToDelete} exists!!!`)
  } else {
    mockUsers.splice(indexToDelete, 1)

    res.send(`User with id: ${userIdToDelete} deleted`)
  }
})

// PATCH partially update one user
router.patch('/:userIdToUpdate', (req, res) => {
  const { userIdToUpdate } = req.params
  const { firstName, lastName, age } = req.body

  const userToUpdate = mockUsers.find(user => user.id === userIdToUpdate)

  if (userToUpdate) {
    if (firstName) userToUpdate.firstName = firstName
    if (lastName) userToUpdate.lastName = lastName
    if (age) userToUpdate.age = age

    res.send(`Successfully updated user with id: ${userIdToUpdate}`)
  } else {
    res.send(`No user with id: ${userIdToUpdate} exists!!!`)
  }
})

export default router
