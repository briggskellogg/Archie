# Project: Mental Health Counseling App "Archie" (Proof of Concept)

## Overview

Develop a mental health counseling app named "Archie" using TypeScript. This app will provide a single chat window where a human user can interact with up to 5 AI agents simultaneously. The app should be modular, support both macOS and Safari browser, and include light and dark mode interfaces.

---

## Functional Requirements

### Chat Window Interface

- **Base Implementation:**

  - Clone the React Chat App from the repository: [https://github.com/matt765/react-chat-app](https://github.com/matt765/react-chat-app).
  - Modify the cloned app to support group chat functionality for 1 user and up to 5 AI agents.

- **Agent Interaction:**
  - All 5 AI agents can independently interact with the user and communicate with each other in real-time.

### Agent Configuration

- Each agent should be configurable via the app interface with the following settings:
  - **Image Avatar**: Customizable avatar for each agent.
  - **Name**: Editable agent name.
  - **Agent Selection**: Dynamically generated list based on agents predefined in the local Letta server instance.
  - **System Instruction**: Editable text box to define the agent's behavior.
  - **Prompt Text**: Editable text box for custom prompts.
  - **Enable/Disable Switch**: Toggle to activate or deactivate individual agents.
  - **Long-term Memory**: Handled by Letta.

_Note: Agent names, tools, and other attributes will be predefined in the local Letta server instance using `@letta-ai/letta`. System instructions and prompts must be applied via `letta-node`._

- **References:**
  - Letta Node Library: [https://github.com/letta-ai/letta-node](https://github.com/letta-ai/letta-node)
  - Install Letta Node: `npm i @letta-ai/letta`
  - Local Letta Server URL: `http://localhost:8283`

### Logging

- Include comprehensive logging features:
  - **Session Logs**: Option to enable or disable logging.
  - **File Storage**: Save session logs to a local file.
  - **Error Reporting**: Each agent should provide detailed status or error feedback in case of configuration issues or failures.

### API & Libraries

- Use the `letta-node` API for managing AI agent communication.
- Clone and customize the React Chat App as the interface foundation: [https://github.com/matt765/react-chat-app](https://github.com/matt765/react-chat-app).

---

## Platform Requirements

- **Programming Language**: TypeScript.
- **Platforms**: macOS and Safari browser.
- **App Modes**: Support both **dark mode** and **light mode**.

---

## Additional Notes

1. **Error Handling**: Ensure the app gracefully handles errors such as API failures, network issues, or invalid user inputs.
2. **Modular Architecture**: Build the app with extensibility in mind to support additional agents, APIs, or features in the future.
3. **Testing**: Include unit tests and integration tests for all core features to ensure app stability.
4. **Dynamic Agent Selection**: Retrieve agent options from the Letta server's predefined pool dynamically.
5. **Review Documentation**: Familiarize yourself with the Letta API before proceeding. Documentation is available at: [https://docs.letta.com/api-reference/](https://docs.letta.com/api-reference/).
