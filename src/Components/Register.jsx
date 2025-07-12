import { Card , Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmitClick = (e)=>{
        debugger
        e.preventDefault();
        const payload = {
          Username : username,
          Password  : password
        }

        fetch('https://localhost:7239/api/Auth/Register',{
                method : "POST",
                headers : {
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload)
             })
             .then((data) =>{
              return data.json();
             })
             .then((res)=>{
              if(res?.ok){
                alert("Registration Successfully");
              }
             })
             .catch((err)=>{
              alert(err);
             })
    }

    return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmitClick}>
          <Form.Group className="mb-3" controlId="registerUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type='submit' className="w-100">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
    );

}

export default Register;