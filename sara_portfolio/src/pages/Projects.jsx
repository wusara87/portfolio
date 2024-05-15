import Style from "./card.module.css";
import canto from "/canto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        title: 'CantoConnect',
        description: 'CantoConnect aims to captivate and enhance the Cantonese proficiency of young users with interactive features, such as flashcard lessons and mini-games.',
        image: canto,
        technologies: ['SvelteKit', 'HTML', 'CSS', 'Javascript'],
        githubLink: 'https://github.com/wusara87/CantoConnect',
        deployedLink: 'http://canto-connect.vercel.app/'
    }
]

export default function Projects() {
    return (
        <div className={Style.container}>
            <h1>MY PROJECTS</h1>
            <div className={Style.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={Style.projectCard}>
                        <img src={project.image} alt={project.title} className={Style.projectImage} />
                        <div className={Style.projectInfo}>
                            <h2 className={Style.projectTitle}>{project.title}</h2>
                            <p className={Style.projectDescription}>{project.description}</p>
                            <p className={Style.projectTechnologies}>
                                Technologies: {project.technologies.join(', ')}
                            </p>
                            <div className={Style.projectLinks}>
                                <a href={project.githubLink} className={Style.projectLink} target="_blank" rel="noopener noreferrer">GitHub<FontAwesomeIcon icon={faExternalLinkAlt} className={Style.externalLinkIcon}/></a>
                                <a href={project.deployedLink} className={Style.projectLink} target="_blank" rel="noopener noreferrer">Live Demo<FontAwesomeIcon icon={faExternalLinkAlt} className={Style.externalLinkIcon}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}