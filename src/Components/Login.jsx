import { Card , Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmitLogin = (e)=>{
    debugger
        e.preventDefault();
        const payload = {
          Username : username,
          Password  : password
        }

        fetch('https://localhost:7239/api/Auth/Login',{
                method : "POST",
                headers : {
                  'Content-Type': 'application/json'
                },
                credentials: "include",
                body : JSON.stringify(payload)
             })
             .then(async (data) =>{
              debugger
                if(data.ok){
                  alert("login successfull");
                  window.location.href = 'http://localhost:5173/Products'
                }
                //console.log(data);
             })
             .catch((err)=>{
              alert(err);
             })

  }
    return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmitLogin}>
          <Form.Group className="mb-3" controlId="loginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type='submit' className="w-100">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
    );

}

export default Login;