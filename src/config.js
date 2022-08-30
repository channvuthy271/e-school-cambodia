const apiUrl = process.env.VUE_APP_API_URL;
const baseUrl = process.env.VUE_APP_BASE_URL;
const webViewUrl = process.env.VUE_APP_WEB_VIEW_URL;
const basicAuthUsername = process.env.VUE_APP_BASIC_AUTH_USERNAME;
const basicAuthPassword = process.env.VUE_APP_BASIC_AUTH_PASSWORD;
const urlSocket = process.env.VUE_APP_URL_SOCKET;
const auth = process.env.VUE_APP_BASIC_AUTH_TOKEN;
const appVersion = process.env.VUE_APP_VERSION;
const checkingVersionUrl = process.env.VUE_APP_CHECKING_URL;
const liveStreamUrl = process.env.VUE_APP_LIVE_STREAM;
const microserviceUrl = process.env.VUE_APP_MICRO_SERVICE_URL
const customProtocolUrl = process.env.VUE_APP_CUSTOM_PROTOCOL_URL
const secretKey = process.env.VUE_APP_SECRET_KEY

export default {
    apiUrl,
    basicAuthUsername,
    basicAuthPassword,
    baseUrl,
    appVersion,
    auth,
    urlSocket,
    webViewUrl,
    checkingVersionUrl,
    liveStreamUrl,
    microserviceUrl,
    customProtocolUrl,
    secretKey
}