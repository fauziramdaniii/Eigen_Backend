// controllers/memberController.js
const MemberService = require('../domain/memberService');

exports.getMembers = async (req, res) => {
  try {
    const members = await MemberService.getMembers();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
