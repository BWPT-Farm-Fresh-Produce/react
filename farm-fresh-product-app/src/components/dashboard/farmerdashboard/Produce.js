import React , {useEffect, useState} from 'react'
import  axios from 'axios'
import '../../form/farmer/addproduce.scss'

const Produce = (props) =>{
   const [produce, setProduce] = useState([]);
   useEffect(()=>{
      const produceId = props.match.params.id;
      axios
      .get(`https://aqueous-ocean-41606.herokuapp.com/api//api/farmers/produce/:farmId`,{headers:{
         authorization: localStorage.getItem("token") 
      }})
      .then(response=>{
         console.log(response.data)
         setProduce(response.data)

      })
      .catch(error=>{
         console.log(error)
      })

   },[])
   return(
<div className='view-produce'>
   <h3>View Produce</h3>
   {produce.map((produces)=>(
    
      
      <div className='produces' key={produces.id}>
      <p>{produces.name}</p>
      <p>{produces.quantity}</p>
      <p>{produces.price}</p>
      </div>
   
   ))}
</div>

   );
}
export default Produce;