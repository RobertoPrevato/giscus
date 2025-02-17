const fallbacks = {
  gsw: 'de',
  'zh-Hans': 'zh-CN',
  'zh-Hant': 'zh-TW',
};

module.exports = {
  locales: [
    'ar',
    'de',
    'en',
    'es',
    'fr',
    'gsw',
    'id',
    'it',
    'ja',
    'ko',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'th',
    'tr',
    'vi',
    'zh-CN',
    'zh-Hans',
    'zh-Hant',
    'zh-TW',
  ],
  fallbacks,
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['config'],
  },
  loadLocaleFrom: async (lang, ns) => require(`./locales/${fallbacks[lang] ?? lang}/${ns}.json`),
};
