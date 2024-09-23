import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Header({ text, bgColor }) {
    const headerStyles = {
        backgroundColor: bgColor, 
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                    <h2>{text}</h2>
                </Link>
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
