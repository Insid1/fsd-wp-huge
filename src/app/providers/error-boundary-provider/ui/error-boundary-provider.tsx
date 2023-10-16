import { Component, type ErrorInfo, type ReactNode } from 'react'
import { types } from 'sass'
import Error = types.Error

interface IErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<IErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
