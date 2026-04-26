import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, default: 'Remote / On-site' },
  type: { type: String, default: 'Full-time' },
  department: { type: String, default: 'Operations' },
  description: { type: String, required: true },
  requirements: { type: String }, // Storing as a string for simplicity in the form
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
