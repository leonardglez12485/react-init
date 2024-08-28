
import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
    if(!title) throw new Error('Title not exist')
  return (
    <>
     <h2>{ title}</h2>
     <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string
};

// FirstApp.defaultProps = {
//  title: 'No title',
//   subtitle: 'No subtitle',
//   name: 'Leonard',
// }
