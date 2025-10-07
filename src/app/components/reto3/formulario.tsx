"use client"
import { useState } from "react";

const Formulario = () => {
    interface Form {
        username: string;
        fullname: string;
        age: number;
    }

    const [form, setForm] = useState<Form>({
        username: '',
        fullname: '', 
        age: 0
    });

    const [display, setDisplay] = useState<Form | null>(null);

    const [errors, setErrors] = useState<{[key:string]: string}>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === 'age' ? Number(value) : value
        });
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch(name) {
            case 'username':
                if (!value || value.length < 3) {
                    setErrors(prev => ({ ...prev, username: 'Username must be at least 3 characters long' }));
                } else {
                    setErrors(prev => ({ ...prev, username: '' }));
                }
                break;
            case 'fullname':
                if (!value || value===form.username) {
                    setErrors(prev => ({ ...prev, fullname: 'Full name is required and must be different from username' }));
                } else {
                    setErrors(prev => ({ ...prev, fullname: '' }));
                }
                break;
            case 'age':
                if (Number(value) <= 0) {
                    setErrors(prev => ({ ...prev, age: 'Age must be a positive number' }));
                } else {
                    setErrors(prev => ({ ...prev, age: '' }));
                }
                break;
            default:
                break;
        }
    }

    const validateForm = () => {
        for (const key in errors) {
            if (errors[key]!== '') {
                return false;
            }
        }
        return true;
    }
        

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const results = validateForm();
        if (results) {
            setDisplay(form);
            setErrors({});
        } else {
            alert('Please fix the errors in the form before submitting.');
            setDisplay(null);
            setForm({ username: '', fullname: '', age: 0 });
            setErrors({});
        }
    }

    return (
        <div className="w-screen bg-white grid grid-cols-2 items-center justify-center p-10">
            <form onSubmit={handleSubmit} className="flex flex-col text-black gap-2">
                <label className="text-2xl mb-5">User Name</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Username"
                    className={`border p-2 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.username && <span className="text-red-500">{errors.username}</span>}
                <label className="text-2xl mt-5 mb-5">Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full Name"
                    className={`border p-2 ${errors.fullname ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.fullname && <span className="text-red-500">{errors.fullname}</span>}
                <label className="text-2xl mt-5 mb-5">Age</label>
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Age"
                    className={`border p-2 ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.age && <span className="text-red-500">{errors.age}</span>}
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
            </form>
            {display && (
                <div className="mt-5 flex flex-col justify-start items-center text-black">
                    <ul className="list-disc list-inside text-2xl">
                        <li><strong>Username:</strong> {display.username}</li>
                        <li><strong>Full Name:</strong> {display.fullname}</li>
                        <li><strong>Age:</strong> {display.age}</li>
                    </ul>
                </div>
            )}
        </div>
    );

}

export default Formulario;
