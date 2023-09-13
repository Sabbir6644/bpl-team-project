import PropTypes from 'prop-types';

Cart.propTypes = {
     selAct: PropTypes.object,
     remaigning: PropTypes.number,
     totalCost: PropTypes.number 
};

function Cart({selAct, remaigning, totalCost}) {

     return (
          <div>
               <div className='text-white'>
               <h3 className='text-xl font-bold'>Total Actor: {selAct.length}</h3>
               <h3 className='text-xl font-bold'>Remaining Balance: {remaigning}</h3>
               <h3 className='text-xl font-bold'>Total Cost: {totalCost}</h3>
               </div>
               <div className='bg-gray-300 rounded-md p-4'>
               <h3 className='text-lg font-semibold text-center'>Name of Actors:</h3>
               {
                    selAct.map((actor,index)=> ( 
                         <h2 key={index} className='text-lg font-bold bg-blue-400 p-2 my-2 rounded-lg'>{actor.name}</h2>
                          
                    ))
               }
               </div>
               
          </div>
     );
}

export default Cart;