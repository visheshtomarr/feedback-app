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

// Type of props that can be passed to 'Header' component.
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Header;
