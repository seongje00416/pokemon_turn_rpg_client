import Router from "@/utils/Router.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </>
    )
}

export default App