import PropTypes from 'prop-types';

function Header({ text, bgColor }) {
    const headerStyles = {
        backgroundColor: bgColor, 
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'hsl(238, 35%, 15%)',
}

// Type of props that can be passed to 'Header' component.
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Header;
