import {useState} from 'react'

function FeedbackItem() {
    // The value passed inside the 'useState()' hook is the default value of
    // the state it is being used for.
    //
    // Defining state and set-state method for rating.
    const [rating, setRating] = useState(7);
    
    // Defining state and set-state method for 'feedback-text'.
    const [text, setText] = useState('This is an example for a feedback item.');

    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedbackItem;