import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // Declare loading state and set-state method.
    const [isLoading, setIsLoading] = useState(true);

    // Declare global feedback state object and set-state method.
    const [feedback, setFeedback] = useState([]);

    // Declare global feedback edit function and set-state method.
    const [feedbackEdit, setFeedbackEdit] = useState({
        // The default states consist of an empty feedback item and an 'edit' boolean
        // which will be set to true when the edit button is clicked.
        item: {},
        edit: false
    })

    // Fetch data from the 'db.json' backend server.
    // The dependency array is empty as we only want this action to take place
    // once when the page loads.
    useEffect(() => {
        fetchFeedback()
    }, [])

    // Function to fetch data from the 'db.json' backend server.
    const fetchFeedback = async () => {
        const response = await fetch(
            // Fetch the data in sorted descending order with respect to 'id'.
            "/feedback?_sort=id&_order=desc"
        );
        const data = await response.json();
        
        setFeedback(data);
        setIsLoading(false);
    }

    // Function to edit a feedback.
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // Function to update the feedbacks list.
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        });

        const data = await response.json();

        // console.log(id, updatedItem);
        // If the id of the feedback we were trying to edit matches the
        // id of an item present the feedback list, then, we update the data
        // we are fetching from the json-server. 
        setFeedback(feedback.map((item) => item.id === id ?  data : item ));
        
        // Reset the state of feedbackEdit after we have edited a feedback,
        // so that we can add a new feedback. 
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    // Function to delete feedback.
    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            });

            // Filters the 'Feedback' array and removes the item that has 'id'.
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    // Function to add a new feedback.
    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();

        // We will use whatever feedbacks were already present in the state and add our new feedback.
        setFeedback([data, ...feedback]);
    }

    return (
        <FeedbackContext.Provider 
            value={{ 
                feedback,
                // State that consists of the feedback item to be edited.
                feedbackEdit,
                // Could be used in any feedback item while it loads.
                isLoading,
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