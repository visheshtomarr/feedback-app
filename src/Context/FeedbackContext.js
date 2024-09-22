import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // Declare global feedback state object and set-state method.
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is first feedback.',
        },
        {
            id: 2,
            rating: 8,
            text: 'This is second feedback.',
        },
        {
            id: 3,
            rating: 9,
            text: 'This is third feedback.',
        }
    ])

    // Declare global feedback edit function and set-state method.
    const [feedbackEdit, setFeedbackEdit] = useState({
        // The default states consist of an empty feedback item and an 'edit' boolean
        // which will be set to true when the edit button is clicked.
        item: {},
        edit: false
    })

    // Function to edit a feedback.
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // Function to delete feedback.
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            // Filters the 'Feedback' array and removes the item that has 'id'.
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    // Function to add a new feedback.
    const addFeedback = (newFeedback) => {
        // This will generate a random id for every new feedback we create.
        newFeedback.id = uuidv4();
        // We will use whatever feedbacks were already present in the state and add our new feedback.
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <FeedbackContext.Provider 
            value={{ 
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                // State that consists of the feedback item to be edited.
                feedbackEdit
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;