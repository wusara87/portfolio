import Style from "./grid.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faBrain, faComments, faClock } from '@fortawesome/free-solid-svg-icons';

// array of skills with name, icon, and description
const skills = [
    { 
        name: 'HTML/CSS', 
        icon: faCode,
        description: 'Proficient in creating and styling web pages using HTML and CSS to achieve responsive and visually appealing designs.'
    },
    { 
        name: 'JavaScript', 
        icon: faCode,
        description: 'Skilled in programming interactive and dynamic features for websites using JavaScript, including DOM manipulation and event handling.'
    },
    { 
        name: 'SvelteKit', 
        icon: faGlobe,
        description: 'Familiar with building web applications using the SvelteKit framework, which offers efficient and easy-to-use tools for front-end development.'
    },
    { 
        name: 'Problem-Solving', 
        icon: faBrain,
        description: 'Strong problem-solving skills, capable of analyzing complex issues, identifying effective solutions, and implementing them efficiently.'
    },
    { 
        name: 'Communication', 
        icon: faComments,
        description: 'Excellent communication skills, both verbal and written, with the ability to convey ideas clearly and collaborate effectively within teams.'
    },
    { 
        name: 'Time Management', 
        icon: faClock,
        description: 'Effective time management abilities, capable of prioritizing tasks, meeting deadlines, and managing workloads efficiently.'
    },
];

// skills component
export default function Skills() {
    return (
        <>
            <div className={Style.container}>
                <h1>MY SKILLS</h1>
                <div className={Style.grid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={Style.box}>
                            <FontAwesomeIcon icon={skill.icon} className={Style.icon}/>
                            <p className={Style.name}>{skill.name}</p>
                            <p className={Style.description}>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}