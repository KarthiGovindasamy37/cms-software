import React from 'react'

function CarouselItem({item,index}) {
  return (
    <div className={`carousel-item ${index===0 ? `active` : ``} `}>
        <img src={`/images/carousel/${item.image}`} className="d-block w-100 imgsize" alt={item.alternative}/>
        <div className="mt-4 d-flex justify-content-center">
          <h1 className="text-white">{item.title}</h1>
        </div>
      </div>
  )
}

export default CarouselItem