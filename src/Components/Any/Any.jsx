// import React from 'react'

// const Any = () => {
//   return (
//     <div className='travelers container section'>
// <div className='sectionContainer'>
//   <h2>
//     Complaints registered!
//   </h2>
//   <span>To ensure re-dressel of 75% customer Complaints by executing agency within 30 working days.</span>

//   <p>To insure action on the Minor/ Revenue works request of the user within 30 working day of request.</p>
//   <div className='travelersContainer grid'>
//     <div className='singleTraveler'>
//       <img src="/images/p7.jpg" alt="" />
//       <div className='travelerDetails'>
//         <div className='travelerPicture'>
//         {/* <img src="./images/p4.jpg" alt="" /> */}
//         </div>
// <div className='travelerName'>
//   <button className='btn'>AC Complaints</button>
 
// </div>
//       </div>

//     </div>


//     <div className='singleTraveler'>
//       <img src="/images/p4.jpg" alt="" />
//       <div className='travelerDetails'>
//         <div className='travelerPicture'>
//         {/* <img src="./images/p4.jpg" alt="" /> */}
//         </div>
// <div className='travelerName'>
//   <button className='btn'>E/M(Electrical Complaint)</button>

// </div>
//       </div>

//     </div>


//     <div className='singleTraveler'>
//       <img src="/images/p6.jpg" alt="" />
//       <div className='travelerDetails'>
//         <div className='travelerPicture'>
//         {/* <img src="./images/p4.jpg" alt="" /> */}
//         </div>
// <div className='travelerName'>
//   <button className='btn'>B/R(Civil Complaint)</button>

// </div>
//       </div>

//     </div>

//   </div>

// </div>
//     </div>
//   )
// }

// export default Any

import React, { useState } from 'react';


const Any = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Complaints registered!</h2>
        <span>
          To ensure re-dressel of 75% customer Complaints by executing agency
          within 30 working days.
        </span>
        <p>
          To insure action on the Minor/ Revenue works request of the user
          within 30 working day of request.
        </p>
        <div className='travelersContainer grid'>
          <div className='singleTraveler'>
            <img src='/images/p7.jpg' alt='' />
            <div className='travelerDetails'>
              <div className='travelerPicture'></div>
              <div className='travelerName'>
                <button
                  className='btn'
                  onClick={() => handleButtonClick('AC Complaints')}
                >
                  AC Complaints
                </button>
              </div>
            </div>
          </div>

          <div className='singleTraveler'>
            <img src='/images/p4.jpg' alt='' />
            <div className='travelerDetails'>
              <div className='travelerPicture'></div>
              <div className='travelerName'>
                <button
                  className='btn'
                  onClick={() =>
                    handleButtonClick('E/M(Electrical Complaint)')
                  }
                >
                  E/M(Electrical Complaint)
                </button>
              </div>
            </div>
          </div>

          <div className='singleTraveler'>
            <img src='/images/p6.jpg' alt='' />
            <div className='travelerDetails'>
              <div className='travelerPicture'></div>
              <div className='travelerName'>
                <button
                  className='btn'
                  onClick={() => handleButtonClick('B/R(Civil Complaint)')}
                >
                  B/R(Civil Complaint)
                </button>
              </div>
            </div>
          </div>
        </div>
        {selectedCategory && (
          <div className='detailsContainer'>
            <div className='box'>
              <h3>{selectedCategory}</h3>
              {/* Include detailed content here based on the selectedCategory */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Any;

