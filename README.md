# Archie - Mental Health Counseling App

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A mental health counseling application that enables users to interact with up to 5 AI agents simultaneously in a group chat environment. Built with Express.js backend and React frontend, powered by Letta AI.

## 🎯 Project Vision

Archie provides a unique AI-driven conversational experience where users can interact with multiple AI agents representing different perspectives:
- **Logic Agent**: Rational, analytical responses
- **Emotion Agent**: Empathetic, emotional intelligence
- **Instinct Agent**: Intuitive, gut-feeling responses
- **Custom Agents**: User-configurable agents with specific roles

## 🏗️ Current Status

**⚠️ EARLY DEVELOPMENT PHASE**

This repository currently contains:
- ✅ Project specifications and architecture docs
- ✅ Express.js backend skeleton
- ✅ React chat app foundation (vendored)
- ❌ AI agent integration (Letta)
- ❌ Multi-agent conversation system
- ❌ Agent configuration UI
- ❌ Session logging
- ❌ TypeScript conversion

## 📋 Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher
- **Letta Server** (local instance at `http://localhost:8283`)

## 🚀 Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/briggskellogg/Archie.git
cd Archie
npm install
```

### 2. Environment Configuration
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start Development Server
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## 🏛️ Architecture Overview

```
Archie/
├── app.js                 # Express application entry point
├── bin/www               # Server startup script
├── routes/               # API routes (basic)
├── docs/specs/           # Project specifications
├── src/vendor/           # Third-party components
│   └── react-chat-app/   # React chat interface
├── public/               # Static assets
├── views/                # Pug templates
└── tests/                # Test files (placeholder)
```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Build project (currently just npm install)
- `npm test` - Run tests (placeholder)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📚 Key Documentation

- [Build Prompt](docs/specs/Archie%20-%20Build%20Prompt.md) - Detailed technical requirements
- [Basic Design](docs/specs/Archie%20-%20Basic%20Design.md) - System architecture and design
- [Project Theme](docs/specs/Archie%20-%20Project%20Theme.md) - Vision and requirements

## 🛣️ Next Steps (Development Roadmap)

### Phase 1: Foundation
- [ ] Set up Letta server integration
- [ ] Convert to TypeScript
- [ ] Implement basic agent management
- [ ] Connect Express backend with React frontend

### Phase 2: Core Features
- [ ] Multi-agent conversation system
- [ ] Agent configuration UI
- [ ] Session logging and memory
- [ ] Error handling and recovery

### Phase 3: Enhancement
- [ ] Light/dark theme support
- [ ] File upload and attachments
- [ ] Advanced agent customization
- [ ] Performance optimization

## 🔒 Security Considerations

- Updated all dependencies to latest secure versions
- Added Helmet.js for security headers
- Implemented rate limiting
- Environment variable configuration

## 🤝 Contributing

This is currently in early development. Contributions welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Current Limitations

- **No AI Integration**: Letta server integration not implemented
- **Separate Frontend**: React app not integrated with Express backend
- **Basic Routing**: Only placeholder routes exist
- **No Authentication**: User management not implemented
- **No Database**: No persistent storage configured

---

**Note**: This is a proof-of-concept in active development. The current codebase serves as a foundation for the full implementation described in the project specifications.
