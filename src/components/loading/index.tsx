// We define the "Contract" for the Props. 
// The "?" means the message is optional.
interface LoadingProps {
    message?: string;
}

// We set a default value ("Loading...") just in case we forget to pass a message!
export const Loading = ({ message = "Loading..." }: LoadingProps) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}