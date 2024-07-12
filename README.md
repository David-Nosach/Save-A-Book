# Save-A-Book

## Description

Save-A-Book is a full-stack MERN application that allows users to search for books using the Google Books API, save their favorite books, and manage their saved books. The application uses a GraphQL API built with Apollo Server, a React front end, MongoDB for the database, and Node.js/Express.js for the server and API.

<img width="1440" alt="Screenshot 2024-07-11 at 5 50 52 PM" src="https://github.com/user-attachments/assets/5df1eccb-e781-422b-809f-6e28f34b0af1">

## Table of Contents

- [Save-A-Book](#save-a-book)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Technologies](#technologies)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/save-a-book.git
   cd save-a-book
   ```
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```
4. Set up environment variables:

   - Create a `.env` file in the `server` directory and add the following variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/googlebooks
   ```

## Usage

1. Start the server:
   ```bash
   cd server
   npm start
   ```
2. Start the client:

   ```bash
   cd ../client
   npm start
   ```

3. Open your browser and navigate to http://localhost:3000

## Features

- **User Authentication**: Sign up and login with secure authentication.
- **Search Books**: Search for books using the Google Books API.
- **Save Books**: Save favorite books to your account.
- **Manage Saved Books**: View and remove saved books from your account.

## Technologies

- **Front End**: React, Bootstrap, Apollo Client
- **Back End**: Node.js, Express.js, Apollo Server, MongoDB, Mongoose
- **API**: Google Books API
- **Authentication**: JWT (JSON Web Tokens), bcrypt
