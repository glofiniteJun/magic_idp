# Magic Auth Example

## Overview
Magic Auth Example is a full-stack application demonstrating the integration of Magic's Bring Your Own IDP feature with Auth0. This project showcases how users can authenticate using Auth0 and, upon successful authentication, have a non-custodial wallet created using Magic's OIDC extension and Thirdweb SDK.

## Features
- Integration with Auth0 for user authentication.
- Creation of non-custodial wallets using Magic's OIDC extension.
- Backend server built with Node.js and Express.
- Frontend built with React.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/glofiniteJun/magic_idp.git
   cd magic_idp
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```
     MAGIC_SECRET_KEY=<your_magic_secret_key>
     REACT_APP_AUTH0_DOMAIN=<your_auth0_domain>
     REACT_APP_AUTH0_CLIENT_ID=<your_auth0_client_id>
     REACT_APP_MAGIC_PROVIDER_ID=<your_magic_provider_id>
     ```
   - Replace the placeholders with your actual credentials.

## Running the Application
1. Start the frontend React application:
   ```sh
   npm start
   ```
   The frontend will be accessible at `http://localhost:3000`.

2. In a separate terminal, start the backend server:
   ```sh
   npm run start-server
   ```
   The server will run on `http://localhost:3001`.

## Usage
- Navigate to `http://localhost:3000` in your browser.
- Use the Login button to authenticate via Auth0.
- Upon successful authentication, a wallet will be created.



