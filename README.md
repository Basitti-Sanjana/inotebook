# NoteHaven

NoteHaven is a notebook application that allows users to create, save, and manage their personal notes effortlessly. Each user gets a dedicated personal space to securely store their notes, which can be easily retrieved whenever needed. With its intuitive interface, organizing and accessing notes has never been more convenient.

## Features

- **User Authentication**: Secure login and registration for personalized note management.
- **Personalized Notes**: Each user has a dedicated space for their notes.
- **CRUD Operations**: Create, read, update, and delete notes easily.
- **Responsive Design**: Access your notes seamlessly on different devices.

## Screenshots

### Login
![image alt](https://github.com/Basitti-Sanjana/inotebook/blob/367444f586a1c97751f9d65d8a48c87f1a8102c3/NoteBookLogin.png)

### Add Note
![image alt](https://github.com/Basitti-Sanjana/inotebook/blob/367444f586a1c97751f9d65d8a48c87f1a8102c3/AddNote.png)


### Update Note
![image alt](https://github.com/Basitti-Sanjana/inotebook/blob/367444f586a1c97751f9d65d8a48c87f1a8102c3/UpdateNotes.png)


## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation and Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- A package manager (npm or yarn)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Basitti-Sanjana/NoteHaven.git
   cd NoteHaven
   ```

2. **Install dependencies**:

   Navigate to the root directory and install backend dependencies:

   ```bash
   npm install
   ```

   Then navigate to the `client` folder and install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application**:

   - To start the backend:

     ```bash
     npm start
     ```

   - To start the frontend:

     ```bash
     cd client
     npm start
     ```

   The app will be accessible at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## How to Use

1. **Sign Up or Log In**:
   - Navigate to the login page.
   - Create a new account or log in with your existing credentials.

2. **Create a Note**:
   - Click the "Add Note" button.
   - Fill in the note title and content.
   - Click "Save" to store your note.

3. **View Notes**:
   - Access all your saved notes from the notebook interface.
   - Click on a note to view its details.

4. **Edit a Note**:
   - Click the "Edit" button on any note.
   - Update the title or content.
   - Save the changes.

5. **Delete a Note**:
   - Click the "Delete" button on a note to remove it permanently.

6. **Log Out**:
   - Click the "Log Out" button to securely end your session.

## Folder Structure

```
NoteHaven
├── client          # Frontend code
│   ├── public      # Static files
│   └── src         # React components and assets
├── server          # Backend code
│   ├── models      # MongoDB models
│   ├── routes      # Express routes
│   └── controllers # Logic for route handling
├── .env.example    # Example environment file
├── package.json    # Backend dependencies
└── README.md       # Project documentation
```





