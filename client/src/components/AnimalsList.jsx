import React from 'react';

const AnimalsList = (props) => {



  return (
    <div>
      List of animals available for adoption:
      <div>

        {
          props.animals.map((animal) => {

            // grabs first image that is of size 'pn'
            if (animal.media.photos) {
              var image = animal.media.photos.photo.filter((photo) => {
                return photo['@size'] === 'pn';
              });
            } else {
              var image = [{$t: 'http://petrescue.org.nz/theme/PetRescue/img/placeholder.jpg'}];
            }

            // formats breed depending on if it's a mixed breed
            if (animal.breeds.breed.constructor === Array) {
              var breedStr = ''
              animal.breeds.breed.forEach((breed) => {breedStr += `${breed.$t}, `});
              breedStr = breedStr.slice(0, -2);
              console.log(breedStr);
            } else if (animal.breeds.breed.constructor === Object) {
              var breedStr = animal.breeds.breed.$t;
            }

            return (
              <div key={animal.id.$t}>
                <img src={image[0].$t} />
                <div className="name"><strong>Name:</strong> {animal.name.$t}</div>
                <div className="breed"><strong>Breed:</strong> {breedStr}</div>
                <div className="gender"><strong>Gender:</strong> {animal.sex.$t}</div>
                <div className="location"><strong>Location:</strong> {animal.contact.city.$t}, {animal.contact.state.$t}</div>
                <div className="phone"><strong>Phone:</strong> {animal.contact.phone.$t}</div>
                <div className="description"><strong>Description:</strong> {animal.description.$t}</div>
                <br/><br/><br/>
              </div>
            );
          })
        }


      </div>


    </div>
  )


}

export default AnimalsList;
