import {Outlet} from 'react-router-dom'
function Home(){
    return (
        <div>
            <h1>HOME</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default Home