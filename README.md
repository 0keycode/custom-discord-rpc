My Discord RPC

Custom Discord Rich Presence extension for Visual Studio Code. Shows your current project, file, and programming language in Discord status.
✨ Features

    Project time tracking - shows how long you've been working in the current project

    Automatic language detection - changes icon based on programming language

    File name only - shows only filename without path

    Anonymous mode - hides all data, shows only working time

    Support for all popular languages + txt files

🚀 Installation
Method 1: Install from VSIX

    Download .vsix file from releases

    In VSCode: Extensions → ... → Install from VSIX

    Select downloaded file

    Restart VSCode

Method 2: Build from source
bash

# Clone repository
git clone https://github.com/0keycode/custom-discord-rpc.git
cd custom-discord-rpc

# Install dependencies
npm install

# Build extension
npm install -g @vscode/vsce
vsce package

# Install
code --install-extension custom-discord-rpc-1.0.0.vsix

⚙️ Configuration
Discord App Setup

    Go to Discord Developer Portal

    Create new application

    Copy "Application ID" from "General Information"

    Upload images in "Rich Presence" → "Art Assets":

Required images:

    vscode - main VSCode icon

    lock_icon - lock icon for anonymous mode

    text - default text icon

Language icons (optional):

    python_icon, javascript_icon, typescript_icon, java_icon, cpp_icon

    html_icon, css_icon, rust_icon, go_icon, text_icon

VSCode Settings

Open Settings (Ctrl+,) and find "My Discord RPC":

    Anonymous Mode - hide file names and project info

🎯 Usage

Just install and start coding! The extension will automatically:

    Detect your current project

    Show current file name

    Display programming language icon

    Track time spent in project

📦 Project Structure
text

custom-discord-rpc/
├── extension.js          # Main extension code
├── package.json          # Extension manifest
├── node_modules/         # Dependencies
└── README.md            # This file

🛠️ Development
Prerequisites

    Node.js

    Visual Studio Code

    Discord

Building
bash

npm install
vsce package

Testing

    Press F5 to open Extension Development Host

    Test functionality in new VSCode window
