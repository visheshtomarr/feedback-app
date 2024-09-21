import Card from "../Components/shared/Card";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Project:</h1>
                <p>This is a React app to provide feedback for a product or service.</p>
                <p>Version: 1.0</p>

                <a href="/">Back to Project</a>
            </div>
        </Card>
    )
}

export default AboutPage;
