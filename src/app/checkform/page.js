"use client"

import {  useState } from "react";

export default function Page() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");
  
    const btn = async (e) => {
      e.preventDefault();
      console.log(name, email, age);
  
      try {
        let response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify({ name, email, age }),
        });
  
        if (!response.ok) { 
          throw new Error('Failed to submit data');
        }
  
        response = await response.json();
        console.log(response);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ textAlign: 'center' }}>

        <input value={name} type="text" placeholder='name' style={{ padding: '8px', marginRight: '5px' }} onChange={(e)=>setname(e.target.value)} /> <br /> <br />

        <input value={email} type="text" placeholder='emial' style={{ padding: '8px', marginRight: '5px' }}onChange={(e)=>setemail(e.target.value)} /> 
         <br /> <br />

        <input value={age} type="text" placeholder='age' style={{ padding: '8px', marginRight: '5px' }}onChange={(e)=>setage(e.target.value)} /> 
         <br /> <br />

        <button style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }} onClick={btn}>Click</button>
      </form>
    </div>
  );
}
