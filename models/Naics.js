import mongoose from 'mongoose';

const NaicsSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  label: { type: String },
}, { timestamps: true });

export default mongoose.models.Naics || mongoose.model('Naics', NaicsSchema);
