import mongoose from 'mongoose';

const ConfigSchema = new mongoose.Schema({
  servicesGrayscaleBanners: {
    type: Boolean,
    default: true
  },
  servicesBannerOpacity: {
    type: Number,
    default: 3
  },
  colorPrimary: {
    type: String,
    default: '#dc2626' // red-600
  },
  colorSecondary: {
    type: String,
    default: '#0a0c10' // dark background
  },
  colorAccent: {
    type: String,
    default: '#0f1218' // lighter dark background
  },
  colorBase: {
    type: String,
    default: '#ffffff' // white
  },
  colorBaseText: {
    type: String,
    default: '#0f172a' // slate-900
  },
  colorDark: {
    type: String,
    default: '#020617' // slate-950
  },
  colorDarkText: {
    type: String,
    default: '#ffffff' // white
  }
}, { timestamps: true });

if (mongoose.models.Config) {
  delete mongoose.models.Config;
}

export default mongoose.model('Config', ConfigSchema);
