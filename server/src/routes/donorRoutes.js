import { Router } from 'express';
import { Donor } from '../models/Donor.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

const router = Router();

// GET /api/donors
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const donors = await Donor.find({ isAvailable: true }).select('-__v');
    res.json({ success: true, data: donors });
  })
);

// POST /api/donors
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { name, bloodGroup, age, phone, city } = req.body;

    if (!name || !bloodGroup || !age || !phone || !city) {
      throw new ApiError(400, 'All required fields must be provided');
    }

    const donor = await Donor.create({
      name,
      bloodGroup,
      age,
      phone,
      city,
    });

    res.status(201).json({ success: true, data: donor });
  })
);

export default router;