import React,{useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import Sidebar from '../Sidebar/Sidebar';
import Chatbody from '../Chatbody/Chatbody';
import './Fblogin.css'
import Chatapp from '../Chatapp/Chatapp';

const Fblogin = () => {

    const responseFacebook = (response) => {
        console.log(response);
        setIsLoggedIn(true)
        setName(response.name)
        setEmail(response.email)
        setPpurl(response.picture.data.url)
        console.log(name, email)
      }

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [ppurl,setPpurl] = useState("")
    return (
        <div>
            {
                !isLoggedIn ? <>
                <div className="FbLoginval">
                <h3>Click Here to login with Facebook</h3>
                <FacebookLogin
                    appId="1959938807518520"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
                </div>
                </>:<>
               <Chatapp/>
                </>
            }
            
        </div>
    )
}

export default Fblogin
