//const environment = getEnvironment();

let apiURL = "http://localhost:3001";
// if (environment === "staging") apiURL = "https://api-dev.champerche.fr";
// if (environment === "production") apiURL = "https://api-prod.champerche.fr";

// let SENTRY_URL = "https://b01f98eb451448a999cf89c34e456702@sentry.selego.co/17";
// if (environment === "production") SENTRY_URL = "https://9ca92ab94e7342f5b1c1e4e64e8ce1d1@sentry.selego.co/16";

// function getEnvironment() {
//   if (window.location.href.indexOf("sms-dev") !== -1) return "staging";
//   if (window.location.href.indexOf("localhost") !== -1 || window.location.href.indexOf("127.0.0.1") !== -1) return "development";
//   return "production";
// }

// export { apiURL, SENTRY_URL, environment };
export { apiURL };
