import mongoose from 'mongoose';

const ThemePresetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  config: {
    servicesGrayscaleBanners: Boolean,
    servicesBannerOpacity: Number,
    colorPrimary: String,
    colorSecondary: String,
    colorAccent: String,
    colorBase: String,
    colorBaseText: String,
    colorDark: String,
    colorDarkText: String
  }
}, { timestamps: true });

export default mongoose.models.ThemePreset || mongoose.model('ThemePreset', ThemePresetSchema);
