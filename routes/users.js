import express from 'express'

import {
  getAllUsers,
  createUser,
  getUserWithId,
  partialUpdateUserWithId,
  deleteUserWithId,
} from '../controllers/users.js'

// get router
const router = express.Router()

// GET all users
router.get('/', getAllUsers)

// POST single user
router.post('/', createUser)

// GET one user
router.get('/:userIdToGet', getUserWithId)

// DELETE one user
router.delete('/:userIdToDelete', deleteUserWithId)

// PATCH partially update one user
router.patch('/:userIdToUpdate', partialUpdateUserWithId)

export default router
