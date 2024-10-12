// src/components/auth/SignIn.jsx
import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
