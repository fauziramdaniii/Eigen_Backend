// __tests__/borrowRoutes.test.js
const request = require('supertest');
const express = require('express');
const borrowRoutes = require('../routes/borrowRoutes');
const borrowService = require('../domain/borrowService');

// Mock express app
const app = express();
app.use(express.json());
app.use('/api', borrowRoutes);

// Mock the borrow service
jest.mock('../domain/borrowService');

describe('POST /api/borrow', () => {
  it('should borrow a book', async () => {
    const mockResponse = { message: 'Book borrowed successfully' };

    borrowService.borrowBook.mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/api/borrow')
      .send({ memberId: 1, bookId: 1, borrowDate: '2024-06-05' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});

describe('POST /api/return', () => {
  it('should return a book', async () => {
    const mockResponse = { message: 'Book returned successfully' };

    borrowService.returnBook.mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/api/return')
      .send({ memberId: 1, bookId: 1, returnDate: '2024-06-12' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});
