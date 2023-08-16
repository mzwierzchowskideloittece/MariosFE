import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'deloitte',
        clientId: 'marios-fe'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 1
      }
    });
}
