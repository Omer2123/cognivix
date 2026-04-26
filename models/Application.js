import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  jobTitle: { type: String, required: true }, // Redundant but easier for quick display
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  cvUrl: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
