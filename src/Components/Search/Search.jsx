import React from 'react'

const Search = () => {
  return (
    <div className='infos section'>
      <div className='infoContainers container'>
        <div className='titleDivs flex'>
          <h2>Organization(Area Of Work)

          </h2>
          <button className='btn'> View All</button>
        </div>
        <div className='cardsDiv grid'>
          <div className='singleCard grid'>
            <span className='cardTitle'>Performance Evaluation of Warheads</span>
            <p>Penetration performance of fragments in simulated targets</p>
          </div>
          <div className='singleCard grid'>
            <span className='cardTitle'>Fragment Launching Guns</span>
            <p> nodal agency in the country capable of generating useful design data for entire spectrum of terminal ballistics </p>
          </div>
          <div className='singleCard grid'>
            <span className='cardTitle'>High Speed Photography </span>
            <p>Fragment velocity measurement- Warheads, Bombs, Shells</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Search