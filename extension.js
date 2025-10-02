const vscode = require("vscode");
const { Client } = require("discord-rpc");

let rpc;
let activityTimer;
let projectStartTime;
let currentProject = "";

function activate(context) {
  console.log("My Discord RPC is now active!");

  updateCurrentProject();

  setTimeout(() => {
    initializeRPC();
  }, 2000);

  vscode.window.onDidChangeActiveTextEditor((editor) => {
    updateActivity(editor);
  });

  vscode.workspace.onDidChangeWorkspaceFolders(() => {
    updateCurrentProject();
    updateActivity(vscode.window.activeTextEditor);
  });

  activityTimer = setInterval(() => {
    updateActivity(vscode.window.activeTextEditor);
  }, 15000);

  updateActivity(vscode.window.activeTextEditor);
}

function initializeRPC() {
  const clientId = "";

  rpc = new Client({ transport: "ipc" });

  rpc.on("ready", () => {
    console.log("Discord RPC connected!");
  });

  rpc.on("error", (error) => {
    console.error("Discord RPC error:", error);
  });

  rpc.login({ clientId }).catch((error) => {
    console.error("Failed to login to Discord RPC:", error);
  });
}

function updateCurrentProject() {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length > 0) {
    const newProject = workspaceFolders[0].name;

    if (newProject !== currentProject) {
      currentProject = newProject;
      projectStartTime = Date.now();
    }
  } else {
    currentProject = "No Project";
    projectStartTime = Date.now();
  }
}

function updateActivity(editor) {
  if (!rpc) return;

  updateCurrentProject();

  const config = vscode.workspace.getConfiguration("myDiscordRPC");
  const anonymousMode = config.get("anonymousMode") || false;

  let activity = {
    largeImageKey: "vscode",
    largeImageText: "Visual Studio Code",
    startTimestamp: projectStartTime,
    instance: false,
  };

  if (anonymousMode) {
    // Анонимный режим - только время и замок
    activity.details = "Private Mode";
    activity.state = "Editing files";
    activity.largeImageKey = "lock_icon"; // Иконка замка
    activity.smallImageKey = "vscode";
    activity.smallImageText = "VS Code";
  } else if (editor) {
    // Обычный режим
    const language = editor.document.languageId;
    const fileName = editor.document.fileName.split(/[\\/]/).pop();

    activity.details = `${fileName}`;
    activity.state = `${currentProject}`;
    activity.smallImageKey = getLanguageImage(language);
    activity.smallImageText = `${language.toLowerCase()}`;
  } else {
    activity.details = `${currentProject}`;
    activity.state = "No file opened";
  }

  rpc.setActivity(activity).catch((error) => {
    console.error("Failed to set activity:", error);
  });
}

function getLanguageImage(language) {
  const imageMap = {
    python: "python_icon",
    javascript: "javascript_icon",
    typescript: "typescript_icon",
    java: "java_icon",
    cpp: "cpp_icon",
    html: "html_icon",
    css: "css_icon",
    rust: "rust_icon",
    go: "go_icon",
    json: "json_icon",
    markdown: "markdown_icon",
    yaml: "yaml_icon",
    xml: "xml_icon",
    txt: "text_icon",
    text: "text_icon",
    plaintext: "text_icon",
  };

  return imageMap[language] || "text";
}

function deactivate() {
  if (activityTimer) {
    clearInterval(activityTimer);
  }
  if (rpc) {
    rpc.destroy();
  }
}

module.exports = { activate, deactivate };
