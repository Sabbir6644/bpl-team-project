import { useState } from "react";
import { useEffect } from "react";
import Cart from "../CartSection/Cart";
import Card from "./Card";


Cards.propTypes = {
     
};

function Cards() {
     const [selAct, setSelAct]= useState([]);
     const [totalCost, setTotalCost]= useState([0]);
    const [remaigning, setRemaigning] = useState(50000);
   const handleBuy=(card)=>{

    const isExist = selAct.find((item)=> item.id == card.id);
    let salaryCount= card.salary;
    if(isExist){
      return alert("Already added")
    }else{
      setSelAct([...selAct, card]);
      selAct.forEach(item=>{
        salaryCount+= item.salary;
      });
      const totalRemaigning = 50000- salaryCount;
      if(totalRemaigning<0){
        return alert("You have no Enough Money")
      }else{
        setRemaigning(totalRemaigning);
      }
      
    }
    setTotalCost(salaryCount);

   }

     const [data, setData]=useState([])
     useEffect(()=>{
          fetch('../../../public/data.json')
          .then(res=> res.json())
          .then(data=> setData(data))
     },[])
     return (
<div className="md:flex gap-3 my-5 pt-5">
        <div className='md:w-2/3'>
        <div className="grid grid-cols-2 gap-4">
               {
                    data.map((card, index) => <Card key={index} card={card} handleBuy={handleBuy}></Card>)
               }
               
          </div>
        </div>
        <div className='md:w-1/3'>
          {
            <Cart selAct={selAct} remaigning={remaigning} totalCost={totalCost}></Cart>
          }
        </div>
      </div>

        
     );
}

export default Cards;