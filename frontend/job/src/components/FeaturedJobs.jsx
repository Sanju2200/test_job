
import React from 'react';
import './FeaturedJobs.css';

const jobs = [
  {
    title: 'Full Stack Developer',
    company: 'Tech Innovations',
    location: 'New York, USA',
    salary: '$80,000 - $120,000',
    description: 'Join a dynamic team building next-gen web applications.',
  },
  {
    title: 'Data Scientist',
    company: 'DataWorks Inc.',
    location: 'San Francisco, USA',
    salary: '$100,000 - $150,000',
    description: 'Analyze and interpret complex datasets to drive decisions.',
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Marketing Gurus',
    location: 'Remote',
    salary: '$50,000 - $75,000',
    description: 'Plan and execute successful online marketing campaigns.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studios',
    location: 'Austin, USA',
    salary: '$70,000 - $90,000',
    description: 'Design user-centered interfaces for mobile and web apps.',
  },
];

export default function FeaturedJobs() {
  return (
    <section className="featured-jobs py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Featured Jobs</h2>
        <div className="row gy-4">
          {jobs.map((job, index) => (
            <div className="col-md-6" key={index}>
              <div className="card job-card shadow-sm">
                <div className="card-body">
                  <h5 className="job-title">{job.title}</h5>
                  <p className="job-company">{job.company}</p>
                  <p className="job-location"><i className="bi bi-geo-alt-fill"></i> {job.location}</p>
                  <p className="job-salary"><i className="bi bi-cash-stack"></i> {job.salary}</p>
                  <p className="job-description">{job.description}</p>
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
