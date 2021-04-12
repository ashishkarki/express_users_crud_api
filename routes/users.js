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

export default router
