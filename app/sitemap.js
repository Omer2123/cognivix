const BASE_URL = 'https://cognivix.in';

export default function sitemap() {
  const routes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/services/proposal`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/cyber`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/cloud`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/governance`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/gis`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/sectors`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/capabilities`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contractors-corner`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${BASE_URL}/careers`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/solutions/smart-cities`, priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
