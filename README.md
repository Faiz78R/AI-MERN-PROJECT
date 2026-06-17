# 🎙️ AI Interview Agent

An intelligent, full-stack AI-powered interview platform built with the **MERN** stack. It simulates real job interviews by generating dynamic questions, parsing resumes, conducting voice and chat-based interviews, and providing real-time feedback and scoring — all powered by AI.

---

## ✨ Features

- 🤖 **AI-Generated Interview Questions** — Tailored questions based on job role, tech stack, and experience level using LLM APIs (e.g., OpenAI GPT)
- 🎤 **Voice / Speech Recognition** — Candidates can answer questions verbally; speech is transcribed in real time
- 💬 **Chat-Based Interview** — Text-based conversational interview mode for flexible access
- 📄 **Resume Parsing** — Upload a resume (PDF) and the AI extracts skills, experience, and auto-customizes the interview
- 📊 **Real-Time Feedback & Scoring** — Instant AI evaluation of answers with scores, strengths, and improvement suggestions
- 🔐 **Authentication** — Secure JWT-based user auth (candidates & recruiters)
- 🗃️ **Interview History** — Save and review past interview sessions

---

## 🗂️ Project Structure

```
AI-Interview-Agent/
├── client/                  # React.js frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Route-level pages
│       ├── context/         # Global state (Auth, Interview)
│       ├── hooks/           # Custom React hooks
│       ├── services/        # API call handlers
│       └── App.jsx
├── server/                  # Node.js + Express backend
│   ├── config/              # DB and environment config
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Auth & error middleware
│   ├── utils/               # Helper functions (AI, parsing)
│   └── index.js
└── README.md
```

---

## 🛠️ Tech Stack

| Layer           | Technology                                  |
|-----------------|---------------------------------------------|
| Frontend        | React.js, Tailwind CSS                      |
| Backend         | Node.js, Express.js                         |
| Database        | MongoDB, Mongoose                           |
| AI / LLM        | OpenAI GPT API                              |
| Speech-to-Text  | Web Speech API / Whisper API                |
| Resume Parsing  | pdf-parse / Multer                          |
| Auth            | JWT, bcrypt.js                              |
| Language        | JavaScript (ES6+)                           |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [npm](https://www.npmjs.com/)
- OpenAI API Key → [platform.openai.com](https://platform.openai.com)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Faiz78R/AI-Interview-Agent.git
   cd AI-Interview-Agent
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

---

## ▶️ Running the App

Run the client and server in **separate terminal sessions**.

**Start the server:**

```bash
cd server
npm run dev
```

**Start the client:**

```bash
cd client
npm start
```

| Service | URL                    |
|---------|------------------------|
| Client  | http://localhost:3000  |
| Server  | http://localhost:5000  |

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| POST   | `/api/auth/register`  | Register a new user  |
| POST   | `/api/auth/login`     | Login & get JWT      |

### Interview
| Method | Endpoint                     | Description                          |
|--------|------------------------------|--------------------------------------|
| POST   | `/api/interview/start`       | Start a new interview session        |
| POST   | `/api/interview/answer`      | Submit an answer & get AI feedback   |
| GET    | `/api/interview/history`     | Get past interview sessions          |

### Resume
| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| POST   | `/api/resume/upload`  | Upload & parse a resume (PDF)    |

---

## 🧠 How It Works

```
1. User uploads resume (PDF)
        ↓
2. AI parses skills, experience & role
        ↓
3. GPT generates tailored interview questions
        ↓
4. Candidate answers via voice 🎤 or chat 💬
        ↓
5. AI evaluates answers in real-time
        ↓
6. Score + detailed feedback is displayed 📊
        ↓
7. Session saved to MongoDB for review
```

---

## 📦 Build for Production

```bash
cd client
npm run build
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Faiz78R**  
GitHub: [@Faiz78R](https://github.com/Faiz78R)
