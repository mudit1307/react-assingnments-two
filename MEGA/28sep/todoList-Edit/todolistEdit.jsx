import React, { useState } from 'react'

function ToDo() {

    const [value,setValue] =useState("");
    const [arr,setArr] = useState([]);
    const [lvalue,setLvalue] = useState("");
    // const [none,setNone] =useState("none");
    const [readWrite,setReadWrite] =useState(true);

    //to turn on and off display of buttons
    const [displayBtnOne,setdisplayBtnOne] =useState("block");
    const [displayBtnTwo,setdisplayBtnTwo] = useState("none");

    function foo(e)
    {
        e.preventDefault();
        console.log(value);
        setArr([...arr,value]);
        setValue("");
    }

    function deleteElement(indx)
    {
        console.log("delete");
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
    function editValue(e,temp,indx)
    {
        setLvalue()
    }

    function editElement(indx)
    {
        setReadWrite(false);
        setdisplayBtnOne("none");
        setdisplayBtnTwo("block");
        let newArr=[];
        // for(let i=0;i<arr.length;arr++)
        // {
        //     if(indx == )
        // }
    }

    function saveContent(indx)
    {
        arr[indx].target.value;
    }
    function backContent(indx)
    {
        setReadWrite(true);
        setdisplayBtnTwo("none");
        setdisplayBtnOne("block");
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
                        <input type="text" readOnly={readWrite} value={temp} onChange={() => editValue(temp,indx)}style={{border: 'none'}}/>
                    </li>

                    {/* to call function with parameters in react */}
                    <button onClick={() =>  deleteElement(indx)} style={{display:`${displayBtnOne}`,margin:"0px 5px"}}>Delete</button>
                    <button onClick={() => editElement(indx)} style={{display:`${displayBtnOne}` ,margin:"0px 5px"}} >Edit</button>
                    <button onClick={() => saveContent(indx)} style={{display:`${displayBtnTwo}` ,margin:"0px 5px"}}>Save</button>
                    <button onClick={() => backContent(indx)} style={{display:`${displayBtnTwo}` ,margin:"0px 5px"}}>Back</button>
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