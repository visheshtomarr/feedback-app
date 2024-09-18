import PropTypes from 'prop-types';

function Card({ children, reverse }) {
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'hsl(238, 35%, 15%)' : '#fff',
            color: reverse ? '#fff' : '#333',
        }}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card;
