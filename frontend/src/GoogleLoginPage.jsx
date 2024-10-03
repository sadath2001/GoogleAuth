import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google'
import { googleAuthorization } from './api';

const GoogleLoginPage=(props) =>{
  const navigate = useNavigate();
	const [user, setUser] = useState(null);
  const responseByGoogle=async(authResult)=>{
    try {
        // to check the auth result
        // console.log(authResult);
        if(authResult['code'])
        {
          const result=await googleAuthorization(authResult.code)
          const {name,email, image}=result.data.user;
          const token=result.data.token;
          const obj={name, email,image,token}
          localStorage.setItem('user-info',JSON.stringify(obj))
          console.log('values: ',result.data.user);
          navigate('/dashboard')
        }
    } catch (error) {
      console.log('Error while requesting google code ',error);
    }

  }
    const googleLogin=useGoogleLogin({
      onSuccess:responseByGoogle,
      onError:responseByGoogle,
      flow:'auth-code'
    })
  return (
    <div className='App'>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  )
}

export default GoogleLoginPage