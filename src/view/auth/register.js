import React, { useState, useEffect } from "react";
import { authService } from "../../_services";

const Register = (props) => {
  const {history} = props;
    const [formState, setFormState] = useState({values:{}, errors:[]});

    const handleSubmit = e => {
        e.preventDefault();
alert("test");
        authService
            .register(JSON.stringify(formState.values))
            .then(x => {
                history.push('/login');
            })
            .catch(error => {
                setFormState({...formState, errors:formState.errors.concat([error])});
            });
    }

    const handleChange = e => {
        const {name, value} = e.target; 
        setFormState({...formState, values: {...formState.values, [name]: value},
        });
    };

    return (
      <form onSubmit={handleSubmit}>
            {formState.errors.map(x => (
                <div className="alert alert-danger" role="alert" key={x}>
                {x}
              </div>
            ))}
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" name="name" type="text" placeholder="Full Name" value={formState.values.name || ''} onChange={handleChange}/>
    </div>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" name="email" placeholder="test@gmail.com" value={formState.values.email || ''} onChange={handleChange} />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" name="password" type="password" placeholder="******************" value={formState.values.password || ''} onChange={handleChange} />
    </div>
    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="user_role" name="user_role" type="text" placeholder="******************" value={formState.values.user_role || ''} onChange={handleChange} />
    <div className="flex items-center justify-between">
      <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button" type="submit">
        Register
      </button>
    </div>
</div>
</form>
    )
}

export default Register;