import React from 'react';

const AnimalsList = (props) => {



  return (
    <div>
      List of adoptees:
      <div>

        <div className="image"></div>
        <div className="name">Daisy</div>
        <div className="breed">Iggy</div>
        <div className="location">Rockville, MD</div>

        <div className="image"></div>
        <div className="name">Spike</div>
        <div className="breed">Golden Retriever</div>
        <div className="location">San Francisco, CA</div>

      </div>


    </div>
  )


}

export default AnimalsList;
