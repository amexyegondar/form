
import './App.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fname,lname,Profe,Gen,Ag } from './store/action/action';

function App() {
  const firstName = useSelector((state)=>state.firstName)
  console.log(firstName)
  const lastName = useSelector((state)=>state.lastName)

  const Profession = useSelector((state)=>state.proffe)

  const Gender = useSelector((state)=>state.gen)

  const Age = useSelector((state)=>state.ag)

  const dispatch = useDispatch()
  
  const [myfname, setMyfname] =  useState()

  const [mylname, setMylname] =  useState()
  const [profession, setprofession] =  useState()

  const [gender, setgender] =  useState()

  const [age, setage] =  useState()

  return (
    <div className='all'>
    <div className="App">
     
      <div className='text-sm text-white bg-red-500 '>
        <div className="flex flex-col">
      <label className='l'>firstName</label>
        <input className="text-black" value={myfname} onChange={(e)=>setMyfname(e.target.value)}/>
        <button onClick={()=>dispatch(fname(myfname)) } className="btn">Dispatch</button>
        <br/>
        <br/>
        <label className='l'>lastName:</label>
        <input className="text-black" value={mylname} onChange={(e)=>setMylname(e.target.value)}/>
        <button onClick={()=>dispatch(lname(mylname))} className="btn">Dispatch</button>
        <br/>
        <br/>
        <label className='l'>Profession:</label>
        <input className="text-black" value={profession} onChange={(e)=>setprofession(e.target.value)}/>
        <button onClick={()=>dispatch(Profe(profession))} className="btn">Dispatch</button>
        <br/>
        <br/>
        <label className='l'>Gender:</label>
        <input className="text-black" value={gender} onChange={(e)=>setgender(e.target.value)}/>
        <button onClick={()=>dispatch(Gen(gender))} className="btn">Dispatch</button>
        <br/>
        <br/>
        <label className='l'>Age:</label>
        <input className="text-black" value={age} onChange={(e)=>setage(e.target.value)}/>
        <button onClick={()=>dispatch(Ag(age))} className="btn">Dispatch</button>
        <br/>
        <br/>
        </div>
        <div className='result'>
      <div className='rs'>firstName: {firstName}</div>
      <div className='rs'>lastName:{lastName}</div>
      <div className='rs'>Gender:{Gender}</div>
      <div className='rs'>Profession:{Profession}</div>
      <div className='rs'>Age:{Age}</div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
