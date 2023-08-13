import { Layout } from "~/components/layout";
import { FormField } from "~/components/form.field";
import { useState } from "react";

export default function Login() {
    const [action, setAction] = useState('login')

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({
            ...form,
            [field]: event.target.value
        }))
    }

    return (
        <Layout>
            <div className="h-full flex justify-center items-center flex-col gap-y-4">
                {/* Form Switcher Button */}
                <button
                    onClick={() => setAction(action == 'login' ? 'register' : 'login')}
                    className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >{action === 'login' ? 'Sign Up' : 'Sign In'}</button>

                <h2 className="text-5xl font-extrabold text-yellow-300 text-center">WELCOME TO MY CHAT</h2>
                <p className="font-semibold text-slate-300 text-center">
                    {action === 'login' ? 'Log In Please To Continue ...' : 'Sign up To Get Started'}
                </p>

                {JSON.stringify(formData)}

                <form className="rounded-2xl bg-gray-200 p-6 w-96">
                    <FormField type="text" htmlFor="email" label="Email" value={formData.email}
                        onChange={e => handleInputChange(e, 'email')} />

                    <FormField type="password" htmlFor="password" label=" Password" value={formData.password}
                        onChange={e => handleInputChange(e, 'password')} />
                    {
                        action === 'register' && <>
                            <FormField type="text" htmlFor="firstName" label='First Name' onChange={e => handleInputChange(e, 'firstName')} value={formData.firstName} />
                            <FormField type="text" htmlFor="lastName" label='Last Name' onChange={e => handleInputChange(e, 'lastName')} value={formData.lastName} />
                        </>
                    }


                    <div className="w-full text-center">
                        <button type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-yellow-300 px-5 py-2 text-blue-600 
                        font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:translate-y-1">
                            {action === 'login' ? 'Sign In' : 'Sign up'}
                        </button>
                    </div>
                </form>
            </div>

        </Layout>
    );
}