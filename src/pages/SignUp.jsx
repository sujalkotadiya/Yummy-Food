import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.email === email);

        if (userExists) {
            alert('Email is already in use. Please use a different email.');
            return;
        }

        const newUser = { email, password };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        console.log('Signing up:', email, password);
        window.location.href = '/login';
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Sign Up
                    </button>
                    <Link to={"/login"}><p className='mt-2 hover:underline'>Login here!</p></Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
