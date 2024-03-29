# Google Drive Files Organizer

### How to run

1. Create a google developer project
2. Add Google Drive Api
3. Put the VITE_REACT_APP_GOOGLE_DRIVE_API_KEY and VITE_REACT_APP_GOOGLE_DRIVE_CLIENT_ID into the .env file.
4. Run 'npm install'
5. Run 'npm run dev'

### Current Status

1. Connects to the Google Drive API and gets all the relevant information as json file.

### TODO

1. Let user pick one of three (suppose) standardized folder structure formats. (Can also let users decide what they want using a prompt.)
2. Analyze all the existing files and folder structure and suggest a better solution.
3. If the user picks the format make changes to the Google Drive.