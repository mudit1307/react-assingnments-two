import React, { useState } from 'react'

function ToDo() {

    const [value,setValue] =useState("");
    const [arr,setArr] = useState([]);
    const [isEditing,setEditing] = useState(true);

    function foo(e)
    {
        e.preventDefault();
        console.log(value);
        if(isEditing === false)
        {
            setArr([...arr,value]);
        }
        else
        {
            let newArr=arr;
            setValue(e.target.value);
            newArr[isEditing]=value;
            setEditing(false)     
        }
        setValue("");
    }

    function deleteElement(indx)
    {
        let newArr=[];
        for(let i=0;i<arr.length;i++)
        {
            if(i != indx)
            {
                newArr.push(arr[i]);
            }
        }
        setArr([...newArr]);
    }


    function editElement(indx)
    {
        setValue(arr[indx]);
        setEditing(indx);
    }


  return (
<>
<div>
    <form onSubmit={foo}>
    <input type="text" placeholder='Enter your text here' value={value} onChange={(e) => setValue(e.target.value)}/>
    {/* <input type="text" /> */}
    <button type = 'submit' style={{margin:"0px 5px"}}>Add to List</button>
    </form>
</div>
<div>
    <ul>
        {
            arr.map((temp,indx)=>
            {
                return (<div key={indx} style={{display: " flex",margin:"20px 0px"}}>
                    <li >
                        {temp}
                    </li>
                    <button onClick={() =>  deleteElement(indx)} style={{margin:"0px 5px"}}>Delete</button>
                    <button onClick={() => editElement(indx)} style={{margin:"0px 5px"}} >Edit</button>
                    <br/>

                </div> );
            })
        }
    </ul>
</div>
</>
  )
}

export default ToDo