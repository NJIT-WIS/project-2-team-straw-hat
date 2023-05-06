const { i18n } = require("./next.config");

module.exports = {
  i18n,
  defaultLanguage: "en",
  locales: ["en", "es"],
  react: { useSuspense: false },
};
