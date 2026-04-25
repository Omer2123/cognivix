import mongoose from 'mongoose';

// models/Inquiry.js (Update)
const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  serviceCategory: {
    type: String,
    enum: [
      'Urban Modernization',
      'Strategic Energy Grid',
      'Federal Logistics Hubs',
      'Cyber Governance',
      'National Infrastructure',
      'Defense Systems',
      'Technical Writing',
      'GIS & Remote Sensing',
      'Business Development Intern',
      'Proposal Writing Intern',
      'Other Services',
    ],
  },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);