import mongoose from 'mongoose';

const SectorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Sector || mongoose.model('Sector', SectorSchema);
