// __tests__/memberRoutes.test.js
const request = require('supertest');
const express = require('express');
const memberRoutes = require('../routes/memberRoutes');
const memberService = require('../domain/memberService');

// Mock express app
const app = express();
app.use(express.json());
app.use('/api', memberRoutes);

// Mock the member service
jest.mock('../domain/memberService');

describe('GET /api/members', () => {
  it('should return the list of members', async () => {
    const mockMembers = [
      { code: 'M001', name: 'Angga', borrowedBooks: [] },
      { code: 'M002', name: 'Ferry', borrowedBooks: [] }
    ];

    memberService.getMembers.mockResolvedValue(mockMembers);

    const response = await request(app).get('/api/members');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockMembers);
  });
});
