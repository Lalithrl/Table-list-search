import axios from 'axios'
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function Home(){
    const [data,setData] = useState([])
    const [records,setRecords] = useState(data)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            setData(res.data)
            setRecords(res.data);
        })
        .catch(err => console.log(err));
    },[])

    const Filter = (event) =>{
            setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value) || f.email.toLowerCase().includes(event.target.value) || f.phone.includes(event.target.value))) 
            
    }

    return(
        <div className='p-5 bg-light'>
            <div className='bg-warning shadow border p-5'>
                <input type='text' className='form-control ' placeholder='Search' onChange={Filter} />
                <table className='m-auto fs-3 my-4'>
                    <thead className=''>
                    <tr className='border border-dark border-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody >
                        {records.map((d, i) => (
                            <tr key={i} className='border border-white border-3'>
                                <td className='p-2'>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home