import { useState } from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword:"",
  });

  const inputs = [
    { 
      id: 1,
      name: "username",
      type: "text",
      placeholder:"Username",
      label:"Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },{ 
      id: 2,
      name: "email",
      type: "email",
      placeholder:"Email",
      label:"Email",
      errorMessage: "It should be a valid email address!",
      pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
      required: true,
    },{ 
      id: 3,
      name: "birthday",
      type: "date",
      placeholder:"Birthday",
      label:"Birthday",
    },{ 
      id: 4,
      name: "password",
      type: "password",
      placeholder:"Password",
      label:"Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special characters.",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },{ 
      id: 5,
      name: "comfirmPassword",
      type: "password",
      placeholder:"Comfirm Password",
      label:"Comfirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    }
    
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  };

    console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
          {inputs.map((input) => (
            <Form 
            key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange={onChange}
            />
          ))}
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
