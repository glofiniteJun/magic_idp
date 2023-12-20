import React, { useEffect } from 'react';
import { Magic } from 'magic-sdk';
import { OpenIdExtension } from '@magic-ext/oidc';
import { useAuth0 } from "@auth0/auth0-react";

const magic = new Magic('pk_live_CC508AE07CC19E8F', {
  extensions: [new OpenIdExtension()],
});

function App() {
  const { loginWithRedirect, getIdTokenClaims, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      handleLogin();
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    const tokenClaims = await getIdTokenClaims();
    const didToken = await magic.openid.loginWithOIDC({
      jwt: tokenClaims.__raw,
      providerId: process.env.REACT_APP_MAGIC_PROVIDER_ID,
    });

    // Send DID token to the server to create a wallet
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ magicToken: didToken }),
    });

    const data = await response.json();
    console.log('Wallet info:', data.wallet);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/Magic_Logo.jpeg" alt="Magic logo" />
        <p>Welcome to Magic Auth Example</p>
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Login</button>
        ) : (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        )}
      </header>
    </div>
  );
}

export default App;