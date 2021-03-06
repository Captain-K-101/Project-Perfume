import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ImageUpload from './ImageUpload'
import { Loader } from '../../loader/Loader';

const AddProduct = () => {
    const [products, setproducts] = useState([]);
    const [da, setda] = useState(true);
    const [addprod, setAddprod] = useState(false)

 const [images, setImages] = React.useState([]);
 const [name, setName] = useState('');
 const [price, setPrice] = useState(0);
 const [description, setDescription] = useState('');
 const [prodcode, setProdcode] = useState(0);
 const [categroy, setCategroy] = useState('')
 const [custtype, setCusttype] = useState(0);
 const [status, setStatus] = useState(0)
 const [rating, setRating] = useState(0)
 const [loading, setloading] = useState(false);

const Upload_Data =async()=>{
    setloading(true)
    console.log(images);
    const data={"data":images,name,price,description,prodcode,categroy,custtype,status,rating}
    
     await axios.post(`http://localhost:3000/api/products/upload`,data).then(res=>{
        if(res.data.data){
           alert('item inserted')
           setloading(false)
        }
    })
}


    return loading?(<Loader msg="Adding Your Product"/>):(
        <>
        <div className="mx-80">
<div class="w-full max-w-lg" >
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        name
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
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        description
      </label>
      <input onChange={(e)=>{setDescription(e.target.value)}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="This is a ....."/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        productCode
      </label>
      <input onChange={(e)=>{setProdcode(e.target.value)}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        category
      </label>
      <div class="relative">
        <select onChange={(e)=>{setCategroy(e.target.value)}} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="Perfume">Perfume</option>
          <option value="Eau">Eau</option>
          <option value="Cologne">Cologne</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Customer Type
      </label>
      <div class="relative">
        <select onChange={(e)=>{setCusttype(e.target.value)}} value={custtype}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="1">All</option>
          <option value="2">Men </option>
          <option value="3">Women</option>
          <option value="4">Kids</option>
           <option value="5">Unisex</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>


    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        status
      </label>
      <div class="relative">
        <select onChange={(e)=>{setStatus(e.target.value)}} value={status}  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="0">Out of stock</option>
          <option value="1">New </option>
          <option value="2">Available</option>
          <option value="3">Upcoming</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        ratings
      </label>
      <input onChange={(e)=>{setRating(e.target.value)}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="5.5"/>
    </div>
  </div>
    <ImageUpload 
        images={images}
        setImages={setImages}
        />
  <button onClick={Upload_Data} type="submit" class="p-5 pb-10 m-5 bg-blue-700 rounded-lg">Submit</button>
</div>
</div>
</>
    )
}

export default AddProduct
