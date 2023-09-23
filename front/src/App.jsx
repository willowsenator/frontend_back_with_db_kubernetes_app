import {QueryClient, QueryClientProvider} from 'react-query'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Employees from './components/Employees.jsx'

const client = new QueryClient()

function App(){
    return (
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="employees" element={<Employees/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App