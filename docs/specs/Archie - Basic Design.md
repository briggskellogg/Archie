
# Design & Architecture Document: Mental Health Counseling App "Archie"

## Overview
"Archie" is a mental health counseling app where users interact with up to 5 AI agents in a group chat. The app will be built in TypeScript, leveraging modular components for scalability and reusability. It will use a combination of Letta API (`letta-node`) for AI interactions and a customized React Chat App interface.

---

## System Components
### 1. Frontend (User Interface)
- Built using React and TypeScript.
- Based on the React Chat App [https://github.com/matt765/react-chat-app](https://github.com/matt765/react-chat-app).
- Features a group chat interface that supports Markdown, images, and file attachments.
- Light and dark mode support.

### 2. Backend (AI Communication)
- Managed by a local Letta server running at `http://localhost:8283`.
- Handles AI interactions via `letta-node`.
- Provides APIs for agent selection, configuration, and communication.

### 3. Data Storage
- Session logs stored as local files.
- Configuration settings stored in a JSON or SQLite database for quick read/write operations.

---

## Application Flow
1. **User Launches App:**
   - App loads with predefined agents fetched dynamically from the Letta server.
   - The UI initializes and renders a chat interface with configurable agents.

2. **Agent Selection & Configuration:**
   - Users can configure agents from the UI, selecting:
     - Name, avatar, instructions, and prompts.
     - Activate/deactivate status.
   - Configurations are sent to the Letta server via the `letta-node` API.

3. **Chat Interaction:**
   - Users type messages in the input box.
   - Messages are sent to active agents, which respond based on their configurations.
   - Agent responses and user messages are displayed in the chat window.

4. **Session Logging:**
   - Conversations are logged locally if logging is enabled.
   - Logs include timestamps, agent responses, and any configuration changes.

5. **Error Handling:**
   - If an agent fails to respond or an API call fails, an error message is displayed.
   - Errors are logged in a separate log file.

---

## Technical Design

### 1. Frontend Components
**Key Components:**
- Chat Interface:
  - Reuses and extends components from React Chat App.
  - Renders user messages and agent responses (Markdown-supported).
  - Supports file attachments and image rendering.
- Agent Configuration Panel:
  - Dynamically lists all available agents from the Letta server.
  - Editable fields for:
    - Name, avatar, system instructions, and prompts.
    - Enable/disable toggle.
- Settings Panel:
  - Allows API key entry and logging configuration.
- Theme Toggle:
  - Switch between light and dark modes.

### 2. Backend Services
- **Letta Server:**
  - Local instance hosted at `http://localhost:8283`.
- **APIs:**
  - Provide agent configuration and chat communication.

### 3. Data Management
- **Configuration Storage:**
  - Agent settings stored locally in JSON or SQLite.
- **Session Logs:**
  - Stored as timestamped `.txt` or `.json` files.

---

## User Interface (UI) Wireframe

### 1. Main Chat Screen
```
+-------------------------------------------+
|  [Light/Dark Toggle]  [Settings]          |
|-------------------------------------------|
|  Chat Window (Markdown/Images Supported)  |
|-------------------------------------------|
|  [Message Input Box] [Attach] [Send]      |
+-------------------------------------------+
```

### 2. Agent Configuration Panel
```
+-------------------------------------------+
|  Agent Configuration                      |
|-------------------------------------------|
|  [Agent 1] [Name: Editable] [Avatar: Img] |
|  [System Instructions: Text Box]          |
|  [Prompt Text: Text Box]                  |
|  [Enable/Disable Switch]                  |
+-------------------------------------------+
```

---

## Technologies & Libraries
- **Frontend:**
  - React, TypeScript, Tailwind CSS (or styled-components), Markdown rendering library.
- **Backend:**
  - Letta Server (`@letta-ai/letta`), SQLite or JSON for local storage.
- **Logging:**
  - Winston or similar logging library.

---

## Key Design Considerations
- **Modularity:** Components should be self-contained for easier maintenance.
- **Scalability:** Backend should handle up to 5 simultaneous agent interactions.
- **Error Resilience:** App should fail gracefully and notify users of issues.
- **Accessibility:** Ensure compliance with WCAG standards (e.g., keyboard navigation, ARIA labels).

---

## Next Steps
1. Set up the Letta server and integrate `letta-node`.
2. Clone and extend the React Chat App interface.
3. Develop the agent configuration and logging modules.
4. Build and test the integration between frontend and backend.
