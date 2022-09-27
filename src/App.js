import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Home = () => {
    const history = useHistory();

    const goToAbout = () => {
        history.push('/about');
    }

    return (
        <div className='container'>
            <h3>Home Component</h3>
            <br/>
            <button type='button' className='btn btn-success' onClick={goToAbout} >Go to About</button>
            <button type='button' className='btn btn-danger' onClick={()=> history.goBack()} >Go Back</button>

        </div>
    );
}


export const About = () => {
    return (
        <div className='container'>
            About Component
        </div>
    );
}


export const RegisterForm = () => {
    const history = useHistory();
    
    const [id,setId] = useState(0);
    /*const goToShowData = () => {
        history.push("/data/"+ id);
    }*/

    const goToShowData = () => {
        const data = {id: id, name: 'test'};

        history.push("/data/"+ id, data);
    }
    return (
        <div className='container'>
            <h3>RegisterForm Component</h3>
            <input type="number" name="id" className='form-control' onChange={(e)=> setId(e.target.value)} placeholder='enter a valid number'/>
            <button type='button' className='btn btn-primary' onClick={goToShowData}>Add</button>
        </div>
    );
}

export const ShowData = () => {
    const params = useParams();
    const location = useLocation();

    useEffect(()=> {
        console.log("STATE:", location.state);
    }, [])
    return (<>
        <h3>Show Data Component</h3>
        <br/>
        Param Id: {params.id} <br/>
        State Info: {location.state.id} {location.state.name}
        </>)
}


export const NotFoud = () => {

    return(<div>Not Found</div>)
}

