const CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLE_DRIVE_CLIENT_ID
const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_DRIVE_API_KEY

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive';

export {CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES}