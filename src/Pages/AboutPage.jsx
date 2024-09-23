import Card from "../Components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card reverse={false}>
            <div className="about">
                <h1>About this Project:</h1>
                <p>This is a React app to provide feedback for a product or service.</p>
                <p>Version: 1.0</p>

                <Link to="/">Back to Project</Link>
            </div>
        </Card>
    )
}

export default AboutPage;
