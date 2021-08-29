import React, {  useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Register2 = ({showRegister}) =>  {

    const [githubID, setID] = useState('');
    const [githubPssd, setPssd] = useState('');
    

    const onChange = (e) => setID(e.target.value);
    const onChange2 = (e) => setPssd(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if(githubID !== '' || githubPssd !== ''){
            //git OAuth
            setID('');
            setPssd('');
        }
        
    }

    return (
        
            <Fragment>
            
            <div className=' form-horizontal'>
                
                <img src='githublogo.png' style={{width:'50px'}}></img>
                <h1>Register with Github</h1>
            </div>
            <form onSubmit={onSubmit} className='container form-vertical form-text'>
                
                <input type = 'text' 
                placeholder='Username or Mail'
                name='github_profile'
                value={githubID} 
                onChange={onChange}/>

            
                <input type = 'password' 
                placeholder='Password'
                name='github_pssd'
                value={githubPssd} 
                onChange={onChange2}/>
    
                <input type = 'submit'
                className='btn btn-dark btn-block'
                value='Enter' />
            </form> 
             
            </Fragment> 
            
    )
        

}

Register2.propTypes = {
    showRegister: PropTypes.bool.isRequired
};

export default Register2