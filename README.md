## Tech Stack

- **Frontend**: React
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB (viewed with MongoDB Compass)
- **Authentication**: Simple password protection

## Features

- Password-protected access to the form
- Secure submission of responses
- Responses stored in MongoDB
- Clean and simple UI built with React


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
cd server
npm install

create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
FORM_PASSWORD=your_form_password

npm run dev
cd ../client
npm install
npm start

The React app will run on http://localhost:3000 and interact with the Express server on http://localhost:5000.
