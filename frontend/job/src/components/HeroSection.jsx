import React from 'react';
import './HeroSection.css';
export default function HeroSection() {
  return (
    <section className="hero-section bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">Find Your Dream Job</h1>
        <p className="lead">Search from thousands of job opportunities tailored to your skills.</p>
        <form className="d-flex justify-content-center mt-4">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter job title or keywords"
            style={{ maxWidth: '400px' }}
          />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}
