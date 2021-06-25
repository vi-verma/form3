import {useState} from 'react';

function UserInput(prop){
    const initialuser = {
        name:'',
        age: '',
        gender: '',
        contact:'',
        education:'',
        address:'',
    };
    const [userInfo, setUserInfo] = useState(prop.defaultUser || initialuser);
console.log(prop.defaultUser)
    function submitHandeler(){
        if(userInfo.name == ''){
            alert('name is empty')
            return;
        };
        if(userInfo.age === ''){
            alert('age is empty')
            return;
        }
        if(userInfo.age < 18){
            alert('age should be greatr then 18')
            return;
        }
        if(userInfo.gender === ''){
            alert('gender is empty')
            return;
        }
        if(userInfo.contact === ''){
            alert('contect is empty')
            return;
        }
        if(userInfo.education === ''){
            alert('education is empty')
            return;
        }
        if(userInfo.address === ''){
            alert('address is empty')
            return;
        }


        prop.onSubmit(userInfo);
        setUserInfo({...initialuser});
    };

    return (
    <form>
        <div className='container'>
            <div className='card'> 
                <div className='card-body'>
                    <div className='row '>
                        <div className='col-md-4 justify-content-md-cente sm-12 '>
                            <label className='col-form-label' >Name :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, name:e.target.value})} value={userInfo.name} type='text' placeholder='write name' ></input>
                        </div>

                        <div className='col-md-4 justify-content-md-cente sm-12'>
                            <label className='col-form-label' >Age :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, age:e.target.value})} value={userInfo.age} type='number' min='18' max='65' placeholder='write Age' ></input>
                        </div>
            
                        <div className='col-md-4 justify-content-md-cente sm-12'>
                            <label className='col-form-label' >Gender :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, gender:e.target.value})} value={userInfo.gender} type='text' placeholder='write Gender' ></input>
                        </div>

                        <div className='col-md-4 justify-content-md-cente sm-12'>
                            <label className='col-form-label' >Contect :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, contact:e.target.value})} value={userInfo.contact} type='number' placeholder='write Contact' ></input>
                        </div>

                        <div className='col-md-4 ustify-content-md-cente sm-12'>
                            <label className='col-form-label' >Education :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, education:e.target.value})} value={userInfo.education} type='text' placeholder='write Edu' ></input>
                        </div>

                        <div className='col-md-4 justify-content-md-cente sm-12'>
                            <label className='col-form-label' >Address :</label> 
                            <input className='form-control' onChange={(e) => setUserInfo({...userInfo, address:e.target.value})} value={userInfo.address} type='text' placeholder='write Add' ></input>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginTop:'9px'}}>
                            <button onClick={submitHandeler} class='btn btn-primary me-md-2' type ='button'>{prop.buttonText || 'Submit'} </button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
};

export default UserInput;