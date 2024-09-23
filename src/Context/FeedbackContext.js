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

    // Function to update the feedbacks list.
    const updateFeedback = (id, updatedItem) => {
        // console.log(id, updatedItem);
        // If the id of the feedback we were trying to edit matches the
        // id of an item present the feedback list, then, we update the 
        // 'text' and 'rating' of that item to the 'text' and 'rating' present
        // in the updatedItem coming from the FeedbackForm component. 
        setFeedback(feedback.map((item) => item.id === id ? { ...item, 
            ...updatedItem } : item ));
        
        // Reset the state of feedbackEdit after we have edited a feedback,
        // so that we can add a new feedback. 
        setFeedbackEdit({
            item: {},
            edit: false,
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
                // State that consists of the feedback item to be edited.
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;