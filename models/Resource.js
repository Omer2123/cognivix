import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String },
  desc: { type: String },
  bullets: { type: String }, // Storing as newline-separated string for easy admin editing
  cta: { type: String, default: 'Learn More' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
