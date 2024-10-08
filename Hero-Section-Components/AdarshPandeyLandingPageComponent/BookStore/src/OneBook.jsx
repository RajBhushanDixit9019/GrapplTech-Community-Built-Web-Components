import React from 'react'
import list from '../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './components/Cards';

function OneBook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div>
              <h1 className='text-xl font-semibold pb-2'>Types of Books</h1>
              <p>So many books, so little time.</p>
           </div>
     
        <div>
            <Slider {...settings}>
                {list.map((item) => (
                    <Cards item={item} key={item.id}/>
                ))}
            </Slider>
        </div>
        </div>
    </>
  )
}

export default OneBook