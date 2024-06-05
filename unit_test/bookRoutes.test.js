// __tests__/bookRoutes.test.js
const request = require('supertest');
const express = require('express');
const bookRoutes = require('../routes/bookRoutes');
const bookService = require('../domain/bookService');

// Mock express app
const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

// Mock the book service
jest.mock('../domain/bookService');


describe('GET /api/books', () => {
  it('should return the list of books', async () => {
    const mockBooks = [
      { code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1, availableStock: 1 },
      { code: 'SHR-1', title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1, availableStock: 1 }
    ];

    bookService.getAvailableBooks.mockResolvedValue(mockBooks);

    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBooks);
  });
});
