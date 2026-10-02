import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AuthLayoutProps = {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <Link to="/" className="block text-center text-2xl font-bold text-indigo-600 mb-6">
          RAD Article
        </Link>
        <h1 className="text-xl font-semibold text-gray-900 text-center">{title}</h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">{subtitle}</p>
        {children}
        <p className="text-sm text-gray-600 text-center mt-6">{footer}</p>
      </div>
    </div>
  )
}

export default AuthLayout
