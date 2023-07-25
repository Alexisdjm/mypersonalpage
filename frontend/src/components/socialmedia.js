import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function SocialMenu() {
    return(
        <div className='social-media-menu'>
        <a className='social-media-link' href="https://wa.me/584127615686?text=Hi%20Alexis%20how%20are%20you?"><FaWhatsapp/></a>
        <a className='social-media-link' href='https://instagram.com/alexisdjm__?igshid=ZDdkNTZiNTM='><FaInstagram /></a>
        <a className='social-media-link' href='https://github.com/Alexisdjm'><FaGithub/></a>
        <a className='social-media-link' href='https://www.linkedin.com/in/alexis-jimenez-42083823a'><FaLinkedin/></a>
      </div>
    )
}

export default SocialMenu