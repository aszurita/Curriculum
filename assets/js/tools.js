const tools = [
  { name_tool: "Python", image: "assets/tools/python.png", link: "https://www.python.org/" },
  { name_tool: "Java", image: "assets/tools/java.png", link: "https://www.java.com/" },
  { name_tool: "C#", image: "assets/tools/c-.png", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name_tool: "Vite.js", image: "assets/tools/Vite.js.png", link: "https://vitejs.dev/" },
  { name_tool: "Node.js", image: "assets/tools/Node.js.png", link: "https://nodejs.org/" },
  { name_tool: "JavaScript", image: "assets/tools/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name_tool: "HTML5", image: "assets/tools/html-5.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name_tool: "CSS3", image: "assets/tools/CSS3.png", link: "https://www.w3.org/Style/CSS/" },
  { name_tool: "Tailwind CSS", image: "assets/tools/TailwindCSS.png", link: "https://tailwindcss.com/" },
  { name_tool: "NPM", image: "assets/tools/NPM.png", link: "https://www.npmjs.com/" },
  { name_tool: "Git", image: "assets/tools/Git.png", link: "https://git-scm.com/" },
  { name_tool: "Azure SQL Database", image: "assets/tools/AzureSQLDatabase.png", link: "https://azure.microsoft.com/en-us/services/sql-database/" },
  { name_tool: "scikit-learn", image: "assets/tools/scikit-learn.png", link: "https://scikit-learn.org/" },
  { name_tool: "CatBoost", image: "assets/tools/CatBoostLogo.png", link: "https://catboost.ai/" },
  { name_tool: "SQL Server", image: "assets/tools/sql-server.png", link: "https://www.microsoft.com/en-us/sql-server" },
  { name_tool: "GitHub", image: "assets/tools/github.png", link: "https://github.com/" },
  { name_tool: "React", image: "assets/tools/React.png", link: "https://reactjs.org/" },
  { name_tool: "Figma", image: "assets/tools/figma.png", link: "https://www.figma.com/" },
  { name_tool: "ChatGpt Api", image: "assets/tools/ChatGptAPI.png", link: "https://openai.com/index/introducing-chatgpt-and-whisper-apis/" }
];

const toolsContainer = document.getElementById("tools-container");

tools.forEach(tool => {
  const toolDiv = document.createElement("div");
  toolDiv.className = "tool";
  
  const toolLink = document.createElement("a");
  toolLink.href = tool.link;
  toolLink.target = "_blank";
  toolLink.className = "a_tool";

  const toolImage = document.createElement("img");
  toolImage.src = tool.image;
  toolImage.alt = tool.name_tool;
  toolImage.className="img_tool";

  const toolName = document.createElement("p");
  toolName.textContent = tool.name_tool;
  toolName.className = "p_tool";

  toolLink.appendChild(toolImage);
  toolLink.appendChild(toolName);
  toolDiv.appendChild(toolLink);
  toolsContainer.appendChild(toolDiv);
});
