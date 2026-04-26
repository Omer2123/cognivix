import mongoose from 'mongoose';

const AgencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true }, // This will be the URL to the image
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Agency || mongoose.model('Agency', AgencySchema);
