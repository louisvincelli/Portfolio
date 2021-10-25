import '../contactme.css';
import Pdf from '../images/LouieV.pdf'

function ContactMe() {
    return(
        <div id="contactme">
            <h1>Contact Me</h1>
            <div className="contactme">
                <h2>Email</h2>
                <ul>
                    <li>louisvincelli@gmail.com</li>
                </ul>
                <h2>Github</h2>
                <ul>
                    <li><a href="https://github.com/louisvincelli" target="_blank">https://github.com/louisvincelli</a></li>
                </ul>
                <h2>Linked In</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/louis-vincelli-224940205/" target="_blank">https://www.linkedin.com/in/louis-vincelli-224940205/</a></li>
                </ul>
                <h2>Resume (PDF downloadable)</h2>
                <ul>
                    <li><a href={Pdf} target="_blank" download="resume">Download Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactMe;