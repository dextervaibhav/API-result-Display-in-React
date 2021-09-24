import React, { useEffect, useState } from 'react'
import Read from './Read'

const Create = () => {
    const [data, setData] = useState([])
    const [nextdata,setNextData] = useState([]);
    const [page, setPage] = useState(1)
    const [disable,setDisable] = useState(false)
    const [disable2,setDisable2] = useState(false)



    const fun = async () => {
        const url = `https://reqres.in/api/users?page=${page}`
        let data1 = await fetch(url);
        let parsedData = await data1.json();
        setData(parsedData.data);

        const url1 = `https://reqres.in/api/users?page=${page+1}`
        let data2 =  await fetch(url1);
        let parsedData1 = await data2.json();
        setNextData(parsedData1.data);


    }
    
    useEffect(() => {fun();})

    const fun1 = ()=>{
        setPage(page+1);
        setDisable(false);
        console.log(page,data);
        fun();

    }



    const fun2 =()=>{
        setPage(page-1);
        setDisable2(false);
        console.log(page,data);
        fun();
    }

    const fun3 =()=>{
        setDisable(true);
        console.log(page,data);

        console.log('no prev page');
    }

    const fun4 =()=>{
        setDisable2(true);
        setDisable(false);
        console.log(page,data);
        console.log('no next page');
    }
    


    return (

        <div className="container">
            
            <div className='row'>
                {data.map((element) => {

                    return (<div className="col-md-4 my-3" key={element.id}>
                        <Read id={element.id} name={element.first_name + element.last_name} email={element.email} />
                    </div>)
                })}
            </div>

        
        <button type="button" className="btn btn-secondary btn-sm mx-2 my-2" onClick={page===1?fun3 : fun2} disabled={disable}>PrevPage</button>
        <button type="button" className="btn btn-secondary btn-sm mx-2 my-2" onClick={nextdata.length===0?fun4 : fun1} disabled={disable2}>NextPage</button>
        

        </div>
       

    )

}


export default Create
