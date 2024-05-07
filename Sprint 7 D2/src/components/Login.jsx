import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          if (
            response.data[i].email === formData.email &&
            response.data[i].password === formData.password
          ) {
            history.push('/main');
            return;
          }
        }
        history.push('/error');
      })
      .catch((error) => {
        history.push('/error');
      });

    console.log(formData);
  };

  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Sign In
      </Button>
    </Form>
  );
}
