const projects = [
    {
        name: "Breast Cancer Detection",
        image: "assets/projects/BreastCancer.png",
        description: "Machine learning model to predict the benignity or malignancy of breast tumors, optimizing early detection and accurate diagnosis of cancer through advanced data analysis and classification.",
        link: "https://breastcancer-vnl9.onrender.com/",
        github: "https://github.com/aszurita/BreastCancer",
        tools: ["Python", "CSS3", "GitHub", "scikit-learn", "CatBoost"],
    },
    {
        name: "WiDS Datathon 2024 Challenge #1",
        image: "assets/projects/WidsDatathon.png",
        description: "Interactive platform designed for the WiDS Datathon 2024 that allows users to perform Exploratory Data Analysis (EDA) in a visual and dynamic way, and apply optimized predictive models to explore and understand key data characteristics.",
        link: "https://wids2024.onrender.com/",
        github: "https://github.com/aszurita/BreastCancer",
        tools: ["Python", "CSS3", "GitHub", "scikit-learn", "CatBoost"],
    },
    {
        name: "Smart Tutor for ESPOL",
        image: "assets/projects/SmartTutor.png",
        description:
            "An innovative educational chatbot that leverages the ChatGPT API to assist beginner students in Programming Fundamentals with personalized, AI-powered support. It transforms student interaction with programming content, making learning more engaging and effective through conversational AI.",
        link: "",
        github: "https://github.com/Taws-Espol/Programming101-SmartTutor",
        tools: ["Python", "GitHub", "ChatGpt Api"],
    },
    {
        name: "WiDS ESPOL 2024 Website",
        image: "assets/projects/WidsEspol.png",
        description: "Official website of the WiDS (Women in Data Science) event.",
        link: "https://wids.espol.edu.ec/",
        github: "https://github.com/aszurita/BreastCancer",
        tools: [
            "Figma",
            "GitHub",
            "Node.js",
            "Tailwind CSS",
            "NPM",
            "Vite.js",
            "React",
        ],
    },
    {
        name: "Space Trainer : Eclipses Expeditions",
        image: "assets/projects/SpaceTrainer.png",
        description:
            "Space Trainer is an interactive graphic novel that teaches players about eclipses through an engaging story set at NASA. Players start their adventure with a brief introduction and explore a space station featuring an eclipse gallery and a classroom for learning.",
        link: "https://www.figma.com/proto/p26XhGdqoT7ZRoSDGqGSlB/Proyecto-Space-App-Challenge?type=design&node-id=7-2&t=P9fPcjaOqjM50xkp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2&show-proto-sidebar=1&mode=design",
        github: "https://github.com/Jonthz/Los-Swatmaniacos",
        tools: ["Figma", "GitHub"],
    },
];

const tools_info = [
    {
        name_tool: "Python",
        image: "assets/tools/python.png",
        link: "https://www.python.org/",
    },
    {
        name_tool: "Java",
        image: "assets/tools/java.png",
        link: "https://www.java.com/",
    },
    {
        name_tool: "C#",
        image: "assets/tools/c-.png",
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
        name_tool: "Vite.js",
        image: "assets/tools/Vite.js.png",
        link: "https://vitejs.dev/",
    },
    {
        name_tool: "Node.js",
        image: "assets/tools/Node.js.png",
        link: "https://nodejs.org/",
    },
    {
        name_tool: "JavaScript",
        image: "assets/tools/js.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name_tool: "HTML5",
        image: "assets/tools/html-5.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name_tool: "CSS3",
        image: "assets/tools/CSS3.png",
        link: "https://www.w3.org/Style/CSS/",
    },
    {
        name_tool: "Tailwind CSS",
        image: "assets/tools/TailwindCSS.png",
        link: "https://tailwindcss.com/",
    },
    {
        name_tool: "NPM",
        image: "assets/tools/NPM.png",
        link: "https://www.npmjs.com/",
    },
    {
        name_tool: "Git",
        image: "assets/tools/Git.png",
        link: "https://git-scm.com/",
    },
    {
        name_tool: "Azure SQL Database",
        image: "assets/tools/AzureSQLDatabase.png",
        link: "https://azure.microsoft.com/en-us/services/sql-database/",
    },
    {
        name_tool: "scikit-learn",
        image: "assets/tools/scikit-learn.png",
        link: "https://scikit-learn.org/",
    },
    {
        name_tool: "CatBoost",
        image: "assets/tools/CatBoostLogo.png",
        link: "https://catboost.ai/",
    },
    {
        name_tool: "SQL Server",
        image: "assets/tools/sql-server.png",
        link: "https://www.microsoft.com/en-us/sql-server",
    },
    {
        name_tool: "GitHub",
        image: "assets/tools/github.png",
        link: "https://github.com/",
    },
    {
        name_tool: "React",
        image: "assets/tools/React.png",
        link: "https://reactjs.org/",
    },
    {
        name_tool: "Figma",
        image: "assets/tools/figma.png",
        link: "https://www.figma.com/",
    },
    {
        name_tool: "ChatGpt Api",
        image: "assets/tools/ChatGptAPI.png",
        link: "https://openai.com/index/introducing-chatgpt-and-whisper-apis/",
    },
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const projectLink = document.createElement("a");
    projectLink.href = project.link || project.github;
    projectLink.target = "_blank";

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.name;
    projectImage.className="imageProject"

    projectLink.appendChild(projectImage);
    imageContainer.appendChild(projectLink);
    projectDiv.appendChild(imageContainer);

    const projectInfo = document.createElement("div");
    projectInfo.className = "project-info";

    const projectName = document.createElement("h2");
    projectName.textContent = project.name;

    const socialMedia = document.createElement("div");
    socialMedia.className = "social-media";

    if (project.github) {
        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.target = "_blank";
        const githubImage = document.createElement("img");
        githubImage.src = "./assets/tools/github.png";
        githubImage.alt = "GitHub";
        socialMedia.appendChild(githubLink);
        githubLink.appendChild(githubImage);
    }

    if (project.link) {
        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.target = "_blank";
        const linkImage = document.createElement("img");
        linkImage.src = "./assets/tools/link.png";
        linkImage.alt = "Link";
        socialMedia.appendChild(projectLink);
        projectLink.appendChild(linkImage);
    }

    projectInfo.appendChild(projectName);
    projectInfo.appendChild(socialMedia);

    const projectDescription = document.createElement("p");
    projectDescription.className = "project-description";
    projectDescription.textContent = project.description;

    projectInfo.appendChild(projectDescription);
    projectDiv.appendChild(projectInfo);

    const toolsContainer = document.createElement("div");
    toolsContainer.className ="toolsP_container";

    project.tools.forEach((toolName) => {
        const tool = tools_info.find((t) => t.name_tool === toolName);
        if (tool) {
            const toolDiv = document.createElement("div");
            toolDiv.className = "tool";
            const toolLink = document.createElement("a");
            toolLink.href = tool.link;
            toolLink.target = "_blank";
            toolLink.className = "a_tool";
            const toolImage = document.createElement("img");
            toolImage.src = tool.image;
            toolImage.alt = tool.name_tool;
            toolImage.className="img_tool_S";
            const toolNameElement = document.createElement("p");
            toolNameElement.textContent = tool.name_tool;
            toolName.className = "p_tool_S";
            toolLink.appendChild(toolImage);
            toolLink.appendChild(toolNameElement);
            toolDiv.appendChild(toolLink);
            toolsContainer.appendChild(toolDiv);
        }
    });

    projectDiv.appendChild(toolsContainer);
    projectsContainer.appendChild(projectDiv);
});
