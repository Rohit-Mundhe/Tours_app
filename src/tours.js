import React from 'react';
import Tour from './tour';
const Tours = (tours) => {
  return (
    <section>
      <div className="title">
        <h3> Tours available on my website </h3>
        <div className="underline"></div>
        <div>{tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}</div>
      </div>
    </section>
  );
};

export default Tours;