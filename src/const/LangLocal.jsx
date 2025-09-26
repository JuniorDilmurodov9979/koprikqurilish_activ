export const langLocal = () => {
  const lang = localStorage.getItem("i18nextLng");
  if (lang === "УЗ") {
    return "UZ";
  } else {
    return lang;
  }
};
