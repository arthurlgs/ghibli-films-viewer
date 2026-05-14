import { Link } from 'react-router-dom';

interface ErrorMessageProps {
    message?: string;
    showHomeLink?: boolean; // A switch to turn the "Back" link on or off
}

export const ErrorMessage = ({ 
    message = "An error occurred. Please try again.", 
    showHomeLink = false 
}: ErrorMessageProps) => {
    return (
        <div>
            <p>{message}</p>
            {/* If showHomeLink is true, draw the link! */}
            {showHomeLink && <Link to="/">&larr; Back to catalog</Link>}
        </div>
    )
}