import React from "react";


class ErrorBoundary extends React.Component {

    props: { children: JSX.Element }

    state: {
        hasError: boolean;
        message: string;
    }

    constructor(props: { children: JSX.Element }) {
        super(props);
        this.state = { hasError: false, message: '' };
        this.props = props;
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, message: error.message };
    }

    componentDidCatch(error: Error, errorInfo: unknown) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <h1>Something went wrong.</h1>;
                    <p>{this.state.message}</p>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary