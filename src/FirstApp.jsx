
import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
    if(!title) throw new Error('Title not exist')
  return (
    <>
     <h2>{ title}</h2>
     <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
 title: 'No title',
  subtitle: 'No subtitle',
}
