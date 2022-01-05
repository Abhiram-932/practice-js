import { func } from 'prop-types';
import React,{useState} from 'react';
function App(){
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    return(
        <div>
            <form>
                <label>Height</label>
                <input type="text"placeholder="Height"value={height} onChange={(e)=>setHeight(e.target.value)}/><br />
                <label>Weight</label>
                <input type="text"placeholder="Weight"value={weight} onChange={(e)=>setWeight(e.target.value)}/><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default App;