import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <div className="about-card">
      <Card>
        <h2>About The Priority Handler Project</h2>
        <p>
          This is a react app to handle your priorities. Self explanatory right
          🤓 <br />
          Version 1.0.0
        </p>
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </Card>
    </div>
  );
}

export default AboutPage;
