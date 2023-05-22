import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <div className="errorPage">
        <h1>404</h1>
        <p>
          The page you're looking for
          <span> does not exist.</span>
        </p>
        <Link to="/">Go back to the landing page</Link>
      </div>
    </main>
  );
}
