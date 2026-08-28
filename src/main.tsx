
import React, { Component, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("React Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px 24px", color: "#f87171", background: "#0b0f19", minHeight: "100vh", fontFamily: "monospace", zIndex: 99999, position: "relative" }}>
          <h1 style={{ fontSize: "24px", color: "#ef4444", marginBottom: "16px" }}>⚠️ Runtime Error Rendering Page</h1>
          <p style={{ fontSize: "16px", color: "#fca5a5", marginBottom: "20px" }}>{this.state.error?.toString()}</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "12px", color: "#cbd5e1" }}>
            {this.state.error?.stack}
          </pre>
          <pre style={{ marginTop: "16px", background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "12px", color: "#94a3b8" }}>
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
  