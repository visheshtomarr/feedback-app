import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from "./shared/Card";
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackItem({ item }) {
    // Catch the function to delete a feedback using FeedbackContext.
    const {deleteFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='#202142' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}



FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;