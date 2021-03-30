import React, { useState, useEffect } from "react";
import { authService } from "../../_services";

const Login = (props) => {
    const {history} = props;
    const [formState, setFormState] = useState({values:{}, errors:[]});

    useEffect(() => {
        if(authService.isLoggedIn()) history.push('/');
    }, [history]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        authService
            .login(formState.values)
            .then((x) => {
                history.push('/');
            })
            .catch(error => {
                setFormState({
                    ...formState,
                    errors: formState.errors.concat([error])
                });
            });
    }

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormState({
            ...formState, 
            values: {...formState.values, [name]: value},
        });
    };

    return (
      <form onSubmit={handleSubmit}>
            {formState.errors.map((x) => (
                <div className="alert alert-danger" role="alert" key={x}>
                {x}
              </div>
            ))}

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" name="email" type="text" placeholder="Email" value={formState.values.email || ''} onChange={handleChange} />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" name="password" type="password" placeholder="******************" value={formState.values.password || ''} onChange={handleChange} />
      {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="submit">
        Login
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        {/* Forgot Password? */}
      </a>
    </div>
</div>
</form>
    );
};

export default Login;