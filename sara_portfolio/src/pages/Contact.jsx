import Style from "./grid.module.css";
import style from "./card.module.css";
import Box from "./box.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// contact page component
export default function ContactPage() {
    return (
        <div className={Style.container}>
            <h1>MY CONTACT INFO</h1>
            <div className={Box.box}>
                <p>Email: wusara87@csu.fullerton.edu</p>
                <p>Phone: +1 (951) 427-0568</p>
                <a href="https://www.linkedin.com/in/sara-wu-784578294" className={style.projectLink} target="_blank" rel="noopener noreferrer">LinkedIn<FontAwesomeIcon icon={faExternalLinkAlt} className={style.externalLinkIcon}/></a>
            </div>
        </div>
    );
}
