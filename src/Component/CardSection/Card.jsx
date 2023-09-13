import PropTypes from 'prop-types';

Card.propTypes = {
     card: PropTypes.object,
     handleBuy: PropTypes.func
};

function Card({card, handleBuy}) {
     const {name, age, role, image, salary}=card;
     return (
          <div>
               <div className="card card-compact text-white border-2 shadow-xl py-4">
  <figure><img className='w-24 rounded-full' src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">{name}, Age: {age}</h2>
    <div className='flex justify-evenly text-lg font-semibold'>
    <h3> Role: {role}</h3>
     <h3> Salary: {salary} $</h3>
    </div>
    <div className="card-actions justify-center">
      <button onClick={()=>handleBuy(card)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                          
          </div>
     );
}

export default Card;