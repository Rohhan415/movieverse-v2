"use client"

import React from 'react';
import Image from "next/image";
import Slider from "react-slick";

export default function SliderList({data}: { data: any }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <div className='overflow-hidden max-w-full mx-auto px-8'><Slider {...settings}>
            {data?.results.map((movie: any) => (
                <div key={movie.id} className="relative ">
                    <Image width="260" height="460" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                           alt={movie.title}/>
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </Slider></div>

    );
}