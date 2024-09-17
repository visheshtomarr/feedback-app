import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";

function App() {
    return (
        <>
            <Header text="Feedback UI" bgColor="hsl(238, 35%, 15%)" />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}

export default App;