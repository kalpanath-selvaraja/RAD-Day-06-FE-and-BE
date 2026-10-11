import AuthProvider from './context/AuthContext.tsx'
import AppRouter from './router/index.tsx'

function App() {
    return (
       <AuthProvider>
        {/* Full Appication */}
        <AppRouter />
       </AuthProvider>
    )
}

export default App