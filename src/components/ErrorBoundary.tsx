import React, { type ReactNode } from 'react'
import { Component } from 'react'

interface Props {
  children: ReactNode
  fallback?: (error: Error) => ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}
void React

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary:', error, info)
  }

  render() {
    const { hasError, error } = this.state

    if (hasError && error) {
      if (this.props.fallback) {
        return this.props.fallback(error)
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="max-w-xl rounded-lg bg-white p-6 shadow">
            <h1 className="mb-2 text-xl font-semibold text-red-600">Error</h1>

            <p className="mb-4 text-gray-700">{error.message}</p>

            {import.meta.env.DEV && (
              <pre className="overflow-auto rounded bg-gray-900 p-3 text-xs text-red-300">
                {error.stack}
              </pre>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
