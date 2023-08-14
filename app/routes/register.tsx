import { Layout } from "~/components/layout";
import { FormField } from "~/components/form.field";
import { useState, useEffect } from "react";

export default function Register() {
    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const USER_REGEX = /^[A-z][A-z0-9]{1,30}$/;

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(formData.email));
    }, [formData.email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(formData.password));
    }, [formData.password])

    useEffect(() => {
        setValidFirstName(USER_REGEX.test(formData.firstName));
    }, [formData.firstName])

    useEffect(() => {
        setValidLastName(USER_REGEX.test(formData.lastName));
    }, [formData.lastName])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({
            ...form,
            [field]: event.target.value
        }))
    }

    return (
        <Layout>
            <div className="h-full flex justify-center items-center flex-col gap-y-4">

                <h2 className="text-5xl font-extrabold text-yellow-300 text-center">BIENVENUE DANS LE BLOG DE MOMO</h2>

                <p className="font-semibold text-slate-300 text-center">INSCRIPTION</p>

                {JSON.stringify(formData)}<br></br>
                email valid : {JSON.stringify(validEmail)}<br></br>
                mot de passe valid : {JSON.stringify(validPassword)}<br></br>
                nom valid : {JSON.stringify(validFirstName)}<br></br>
                prénom valid : {JSON.stringify(validLastName)}<br></br>


                <form method="POST" className="rounded-2xl bg-gray-200 p-6 w-96">
                    <FormField type="text" htmlFor="email" label="Email" value={formData.email}
                        onChange={e => handleInputChange(e, 'email')} />
                    <p className="text-red-600 text-sm mb-4 pl-2">{validEmail ? ""
                        : <span>Email incorrect</span>}
                    </p>

                    <FormField type="password" htmlFor="password" label="Mot de passe" value={formData.password}
                        onChange={e => handleInputChange(e, 'password')} />
                    <p className="text-red-600 text-sm mb-4 pl-2">{validPassword ? ""
                        : <span>Mot de passe doit contenir 8 caractéres<br></br>avec une majuscule , un caractère spécial !@#$% et un nombre</span>
                    }
                    </p>

                    <FormField type="text" htmlFor="firstName" label='Nom' value={formData.firstName}
                        onChange={e => handleInputChange(e, 'firstName')} />
                    <p className="text-red-600 text-sm mb-4 pl-2">{validFirstName ? ""
                        : <span>Le nom doit contenir 2 à 30 caractères</span>
                    }
                    </p>

                    <FormField type="text" htmlFor="lastName" label='Prénom' value={formData.lastName}
                        onChange={e => handleInputChange(e, 'lastName')} />
                    <p className="text-red-600 text-sm mb-4 pl-2">{validLastName ? ""
                        : <span>Le prénom doit contenir 2 à 30 caractères</span>
                    }
                    </p>

                    <div className="w-full text-center">
                        <button type="submit" name="_action" value="register" className="rounded-xl mt-2 bg-yellow-300 px-5 py-2 text-blue-600 
                        font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:translate-y-1">
                            S'inscrire
                        </button>
                    </div>
                </form>
            </div>

        </Layout>
    );
}