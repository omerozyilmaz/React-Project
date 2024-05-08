import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const initialValue = {
  adSoyad: '',
  exampleEmail: '',
  exampleDepartman: '',
  exampleUnvan: '',
  exampleGorev: '',
};
export default function FormContainer(props) {
  const { addUser } = props;
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://reqres.in/api/users', formData)
      .then((response) => {
        addUser(response.data);
        setFormData(initialValue);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="adSoyad">Ad Soyad:</Label>
        <Input
          id="adSoyad"
          name="adSoyad"
          placeholder="Çalışanın tam adı ve soyadı"
          type="text"
          onChange={handleChange}
          value={formData.adSoyad}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="exampleEmail"
          placeholder="Kurumsal email adresi"
          type="email"
          onChange={handleChange}
          alue={formData.exampleEmail}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDepartman">Departman</Label>
        <Input
          id="exampleDepartman"
          name="exampleDepartman"
          placeholder="Çalıştığı departman"
          type="text"
          onChange={handleChange}
          alue={formData.exampleDepartman}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUnvan">Ünvan</Label>
        <Input
          id="exampleUnvan"
          name="exampleUnvan"
          placeholder="Çalışanın ünvanı"
          onChange={handleChange}
          alue={formData.exampleUnvan}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleGorev">Takım İçi Görevleri:</Label>
        <Input
          id="exampleGorev"
          name="exampleGorev"
          placeholder="Çalışanın takım içerisindeki görev listesi"
          type="textarea"
          rows="8"
          onChange={handleChange}
          alue={formData.exampleGorev}
        />
      </FormGroup>
      <FormGroup className="text-center">
        <Button>Kaydet</Button>
      </FormGroup>
    </Form>
  );
}
