import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  slug:       { type: String, required: true, unique: true },
  excerpt:    { type: String },
  content:    { type: String },
  coverImage: { type: String },
  author:     { type: String },
  tags:       [{ type: String }],
  published:  { type: Boolean, default: false },
  createdAt:  { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
