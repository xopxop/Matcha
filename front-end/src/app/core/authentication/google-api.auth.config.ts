import { AuthConfig } from "angular-oauth2-oidc";

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '529408499968-r57nqsq6gtqjebcsbs7l64jbnikrmudv.apps.googleusercontent.com',
  scope: 'openid profile email',
}