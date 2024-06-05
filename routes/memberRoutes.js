// routes/memberRoutes.js
const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - code
 *         - name
 *       properties:
 *         code:
 *           type: string
 *           description: The member code
 *         name:
 *           type: string
 *           description: The member name
 *         borrowedBooks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Borrow'
 *       example:
 *         code: "M001"
 *         name: "Angga"
 *         borrowedBooks:
 *           - bookId: 1
 *             borrowDate: "2024-06-05"
 *             returnDate: null
 *             penalty: 0
 */

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: The members managing API
 */

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Returns the list of all the members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */
router.get('/members', memberController.getMembers);

module.exports = router;
