import React from 'react';

const AnimalsList = (props) => {



  return (
    <div>
      List of animals available for adoption:
      <div>

        {
          props.animals.map((animal) => {

            var image = animal.media.photos.photo.filter((photo) => {
              return photo['@size'] === 'pn';
            })
            if (animal.breeds.breed.constructor === Array) {
              var breedStr = ''
              animal.breeds.breed.forEach((breed) => {breedStr += `${breed.$t}, `});
              breedStr = breedStr.slice(0, -2);
              console.log(breedStr);
            } else if (animal.breeds.breed.constructor === Object) {
              var breedStr = animal.breeds.breed.$t;
            }
            return (
              <div>
                <img src={image[0].$t} />
                <div className="name">Name: {animal.name.$t}</div>
                <div className="breed">Breed: {breedStr}</div>
                <div className="gender">Gender: {animal.sex.$t}</div>
                <div className="location">{animal.contact.city.$t}, {animal.contact.state.$t}</div>
              </div>
            );
          })
        }


      </div>


    </div>
  )


}

export default AnimalsList;
