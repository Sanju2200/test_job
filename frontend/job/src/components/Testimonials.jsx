import React from 'react';
import './Testimonials.css';
// import rajeshImage from '../assets/images/testimonials/rajesh-mondal.jpg';
// import susmitaImage from '../assets/images/testimonials/susmita-kolya.jpg';
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mondal',
      feedback: 'Job Find helped me land my dream job in just two weeks!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Susmita Kolya',
      feedback: 'The job filtering options are incredible. Highly recommend!',
      image: 'https://via.placeholder.com/100',
    
    },
    {
        name: 'Sandip Debnath ',
        feedback: 'The AI prediction system helped me prepare for the company I am currently working,its mostly accurate !',
        image: 'https://via.placeholder.com/100',
      },
      {
        name: 'Sanjida Alam ',
        feedback: 'My dream job was graphic designing and Job Find helped me land my dream job !',
        image: 'https://via.placeholder.com/100',
      },
  ];

  return (
    <section className="testimonials py-5 text-center">
      <div className="container">
        <h2 className="mb-4">What Our Users Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow-sm p-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <blockquote className="blockquote">
                  <p className="mb-0">"{testimonial.feedback}"</p>
                </blockquote>
                <footer className="blockquote-footer">{testimonial.name}</footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


