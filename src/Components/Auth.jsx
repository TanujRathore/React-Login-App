import { useState } from 'react'
import { Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';
import Login from './Login';
import Register from './Register';

function Auth(){
    const [key, setKey] = useState('home');

    return(
     <div className="login-container">
        <div className="auth-box">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Login">
                  <Login/>
                </Tab>
                <Tab eventKey="profile" title="Register">
                  <Register />
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    </div>
    );
}

export default Auth;