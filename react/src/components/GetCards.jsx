import React, { useState } from 'react';


const GetCards = ({id, cardNumber, cardType, cardColor, cardHolder, cvv, truDate}) => {
  const [showCVV, setShowCVV] = useState(false);
  const handleClick = () => {
    setShowCVV(!showCVV);

  };

  let cardColorClass;
  switch (cardColor) {
    case 'GOLD':
      cardColorClass = 'bg-gradient-to-r from-amber-500 to-black'; 
      break;
    case 'SILVER':
      cardColorClass = 'bg-gradient-to-r from-gray-500 to-gray-700';
      break;
    case 'TITANIUM':
      cardColorClass = 'bg-gradient-to-r from-gray-600 to-black';
      break;
    default:
      cardColorClass = 'bg-gray-500'; 
  }
  let cardColorText
  switch (cardColor) {
    case 'GOLD':
      cardColorText = 'text-yellow-500'; 
      break;
    case 'SILVER':
      cardColorText = 'text-gray-200';
      break;
    case 'TITANIUM':
      cardColorText = 'text-gray-400'; 
      break;
    default:
      cardColorText = 'bg-gray-500'; 
  }
  return (
    <>
    <div className=''>
      <div className={`w-72 p-3 rounded-lg ${cardColorClass}`}>
          <h1 className='text-3xl font-semibold text-gray-100 pb-4'>Bank Finance</h1>

          <span className='text-2xl font-semibold text-gray-100 pb-4'>{cardNumber}</span>

          <div className='flex justify-between items-center pt-4'>

            <div className='flex flex-col'>
              <span className='text-xs text-gray-300 font-bold'>{cardHolder}</span>
              <span className='text-xs text-gray-300 font-bold'>{truDate}</span>
                <div className='flex gap-5'>
                  <span className='text-xs text-gray-300 font-bold'>{cardType}</span>
                  <span className={`text-xs ${cardColorText} font-bold`}>{cardColor}</span>
                </div>
            </div>
             <div className='flex flex-col'>
              <span className='text-xs text-gray-300 font-bold cursor-pointer' 
              onClick={handleClick}
              >CVV</span>

              <span className='text-xs text-gray-300 font-bold cursor-pointer'
              onClick={handleClick}>
                {showCVV ? cvv : '***'}</span>
             </div>
            <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />

          </div>
      </div>
    </div>
    </>
    // // <div className=' bg-gray-800  flex  justify-center items-center p-5 rounded-full text-white '>
    // //     <h2>{id}</h2>
    // //     <h2>{cardNumber}</h2>
    // //     <h2>{cardType}</h2>
    // //     <h2>{cardColor}</h2>
    // //     <h2>{cardHolder}</h2>
    // //     <h2>{cvv}</h2>
    // //     <h2>{truDate}</h2>
    // </div>
  )
}

export default GetCards