import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This text is from Context',
        }
    ])

    return (
        <FeedbackContext.Provider value={{ feedback }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;