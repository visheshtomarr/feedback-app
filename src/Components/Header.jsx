import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// Type of prop that can be passed to 'Header' component.
Header.protoTypes = {
    text: PropTypes.string,
}

export default Header;
