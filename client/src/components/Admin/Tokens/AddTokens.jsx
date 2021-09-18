import React,{useState} from 'react'
import axios from 'axios'

const AddTokens = () => {
 const [tokenid, setName] = React.useState('');
 const [price, setPrice] = useState(0);


 const Upload_Data =async()=>{

    const data={"tokenid":tokenid,"price":price}
    
     await axios.post(`http://localhost:3000/api/tokens/settoken`,data).then(res=>{
        if(res.data.data){
           alert('item inserted')
        }
    })
}



    return (
        <>
<div className="mx-80">
<div class="w-full max-w-lg" >
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Token-UID
      </label>
      <input onChange={(e)=>{setName(e.target.value)}} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        price
      </label>
      <input onChange={(e)=>{setPrice(e.target.value)}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="123$"/>
    </div>
  </div>
  </div>
  <button onClick={Upload_Data} type="submit" class="p-5 pb-10 m-5 bg-blue-700 rounded-lg">Submit</button>
</div>
</>
    )
}

export default AddTokens
