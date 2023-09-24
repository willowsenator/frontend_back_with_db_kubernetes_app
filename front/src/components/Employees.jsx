import {useQuery} from 'react-query'

const getEmployees= async() => {
    const protocol = window.location.protocol
    const url = protocol + "//api.server.com/employees"
    const response = await fetch(url)
    return await response.json()
}

function Employees(){
    const {isLoading, error, data} = useQuery("customers", getEmployees)
    const header = <h2>EMPLOYEES</h2>

    if(isLoading){
        return (
            <div>
                {header}
                Loading...
            </div>
        )
    }
    return (
        <div>
            {header}
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>HIRE DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=>{
                            return <tr key={index}>
                                <td>{item.employee_id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.hire_date}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default Employees