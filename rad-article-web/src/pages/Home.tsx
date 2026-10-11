import { Link, Navigate, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'

function Home() {

  // const {user, loading} = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(!loading) {
  //     if(!user){
  //       navigate("/login")
  //     }
  //   }
  // })

  // if(!loading){
  //   if(!user){
  //     return <Navigate to={"/login"} replace />
  //   }
  // }



  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          RAD Article
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-indigo-600">
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to RAD Article</h1>
        <p className="mt-4 text-lg text-gray-600">
          Read, write and share articles. Log in or create an account to get started.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/login"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg border border-indigo-600 px-6 py-3 font-medium text-indigo-600 hover:bg-indigo-50 transition"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
