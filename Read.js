import React from 'react'

const Read =(props)=> {


    const style = { width: '18rem' }
    let { id, name,email } = props;

    return (
        <>
            <div>
                <div className="card" style={style}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{'ID: '+id}</li>
                        <li className="list-group-item">{'Name: '+name}</li>
                        <li className="list-group-item">{'Email: '+email}</li>
                    </ul>
                </div>
            </div>
        </>
        )
    
}

export default Read