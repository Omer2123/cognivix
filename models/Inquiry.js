import mongoose from 'mongoose';

// models/Inquiry.js (Update)
const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  serviceCategory: { 
    type: String, 
    enum: ['Infrastructure', 'Security', 'Development', 'Federal Support', 'AI/Data'] 
  },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);