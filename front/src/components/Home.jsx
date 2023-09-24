import {Link, Outlet} from 'react-router-dom'
function Home(){
    return (
        <div>
            <h1>HOME | <Link to="/employees">Employees</Link></h1>
            <Outlet></Outlet>
        </div>
    )
}

export default Home