import uniqfy from '../utils/uniqueId-generator.js'

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

const getAllUsers = (req, res) => {
  res.send(mockUsers)
}

const createUser = (req, res) => {
  const newUser = { id: uniqfy(), ...req.body }

  mockUsers.push(newUser)

  res.send(newUser)
}

const getUserWithId = (req, res) => {
  const { userIdToGet } = req.params

  const userToGet = mockUsers.find(user => user.id === userIdToGet)

  res.send(userToGet ? userToGet : 'No such user!!')
}

const partialUpdateUserWithId = (req, res) => {
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
}

const deleteUserWithId = (req, res) => {
  const { userIdToDelete } = req.params

  const indexToDelete = mockUsers.findIndex(user => user.id === userIdToDelete)

  if (indexToDelete < 0) {
    res.send(`No user with id: ${userIdToDelete} exists!!!`)
  } else {
    mockUsers.splice(indexToDelete, 1)

    res.send(`User with id: ${userIdToDelete} deleted`)
  }
}

export {
  getAllUsers,
  createUser,
  getUserWithId,
  partialUpdateUserWithId,
  deleteUserWithId,
}
