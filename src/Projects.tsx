import './App.css';
import Menu from './menu/Menu';

const Projects = () => {
    const projects = [
        {
            name: "Docs Generator",
            url: "https://docs.matej.app/",
            github: "",
            icon: "🗣️",
            description: "Speach to documentation generator"
        },
        {
            name: "Rijecle",
            url: "https://rijecle.matej.app/",
            github: "https://github.com/Mats01/rijecle",
            icon: "📝",
            description: "Random connection network application"
        },
        {
            name: "Pomodoro Timer",
            url: "",
            isOffline: true,
            github: "https://github.com/yourusername/pomodoro-timer", // Replace with actual GitHub URL
            icon: "⏰",
            description: "A productivity timer app using the Pomodoro Technique"
        },
        {
            name: "RCN",
            url: "https://rcn.farmoredifferent.com/",
            github: "https://github.com/yourusername/rcn", // Replace with actual GitHub URL
            icon: "🔗",
            description: "Random connection network application"
        },
        {
            name: "CSS Color Game",
            url: "https://csscolorgame.farmoredifferent.com/",
            github: "https://github.com/yourusername/css-color-game", // Replace with actual GitHub URL
            icon: "🎨",
            description: "Interactive game to learn CSS colors"
        },
        {
            name: "Dayty",
            url: "/",
            github: "https://github.com/yourusername/dayty", // Replace with actual GitHub URL
            icon: "📅",
            description: "Daily task management tool",
            isOffline: true
        }
    ];

    return (
        <div className="projects_grid">
            {projects.map((project, index) => (
                <div key={index} className="project_card">
                    <div className="project_icon">
                        {project.icon}
                    </div>
                    <h3 className="project_title">{project.name}</h3>
                    <p className="project_description">{project.description}</p>
                    <div className="project_links">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project_link ${project.isOffline ? 'offline' : ''}`}
                        >
                            {project.isOffline ? '🚫 Offline' : '🌐 Live Demo'}
                        </a>
                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github_link"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        ) :
                            <div className="github_link">
                                <p>In progress...</p>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Projects;


export const ProjectsPage = () => {
    return (
        <div className="App">
      <Menu />
      <div className="content_wrapper">
      <div className="main_content">
          <div className="massive_title">farmoredifferent.com</div>

              <h2>
                Projects:
              </h2>
              <Projects />
        </div>
      </div>
    </div>
    );
};