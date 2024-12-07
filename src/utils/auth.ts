import { Auth0ContextInterface } from '@auth0/auth0-react';

export const loginWithGoogle = async (auth0: Auth0ContextInterface<any>) => {
  await auth0.loginWithRedirect({
    authorizationParams: {
      connection: 'google-oauth2',
      prompt: 'login',
    },
  });
};

export const loginWithMicrosoft = async (auth0: Auth0ContextInterface<any>) => {
  await auth0.loginWithRedirect({
    authorizationParams: {
      connection: 'windowslive',
      prompt: 'login',
    },
  });
};