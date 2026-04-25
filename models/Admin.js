// models/Admin.js
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  lastLogin: { type: Date }
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);