// routes/borrowRoutes.js
const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Borrow:
 *       type: object
 *       required:
 *         - memberId
 *         - bookId
 *         - borrowDate
 *       properties:
 *         memberId:
 *           type: integer
 *           description: The ID of the member borrowing the book
 *         bookId:
 *           type: integer
 *           description: The ID of the book being borrowed
 *         borrowDate:
 *           type: string
 *           format: date
 *           description: The date when the book is borrowed
 *         returnDate:
 *           type: string
 *           format: date
 *           description: The date when the book is returned
 *         penalty:
 *           type: integer
 *           description: The penalty applied to the member
 *       example:
 *         memberId: 1
 *         bookId: 1
 *         borrowDate: "2024-06-05"
 *         returnDate: null
 *         penalty: 0
 */

/**
 * @swagger
 * tags:
 *   name: Borrow
 *   description: The borrowing and returning API
 */

/**
 * @swagger
 * /api/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Borrow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Borrow'
 *     responses:
 *       200:
 *         description: The borrow was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book borrowed successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Book already borrowed or other validation error
 */

/**
 * @swagger
 * /api/return:
 *   post:
 *     summary: Return a borrowed book
 *     tags: [Borrow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Borrow'
 *     responses:
 *       200:
 *         description: The return was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book returned successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Validation error or other issue
 */
router.post('/borrow', borrowController.borrowBook);
router.post('/return', borrowController.returnBook);

module.exports = router;
