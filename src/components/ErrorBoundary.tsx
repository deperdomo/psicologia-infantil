import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
              Algo salió mal
            </h2>
            
            <p className="text-[var(--muted-text)] mb-6">
              Ha ocurrido un error inesperado. Por favor, intenta recargar la página o contacta con nosotros si el problema persiste.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-[var(--highlight)] text-[var(--button-text)] px-6 py-3 rounded-lg hover:bg-[var(--button-hover)] transition-colors duration-300"
              >
                Recargar página
              </button>
              
              <a
                href="/contacto"
                className="block w-full border-2 border-[var(--highlight)] text-[var(--highlight)] px-6 py-3 rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--button-text)] transition-colors duration-300"
              >
                Ir a contacto
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
