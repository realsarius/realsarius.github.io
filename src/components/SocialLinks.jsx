import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SocialLinks = ({ style, flexAndGap }) => {
  return (
    <div className={flexAndGap}>
      {' '}
      <a href='https://github.com/realsarius/' className={style}>
        <FaGithub aria-label='github-icon' size={'1.5em'} /> GitHub
      </a>
      <a href='https://www.linkedin.com/in/berkansozer/' className={style}>
        <FaLinkedin aria-label='linkedin-icon' size={'1.5em'} /> LinkedIn
      </a>
    </div>
  );
};

SocialLinks.propTypes = {
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  flexAndGap: PropTypes.string,
};

export default SocialLinks;
