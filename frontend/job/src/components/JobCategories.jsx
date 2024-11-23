// import React from 'react';
// import './JobCategories.css';
// export default function JobCategories() {
//   const categories = [
//     { title: 'Software Development', icon: '💻' },
//     { title: 'Marketing', icon: '📈' },
//     { title: 'Design', icon: '🎨' },
//     { title: 'Customer Support', icon: '☎️' },
//     { title: 'Sales', icon: '🛒' },
//     { title: 'Data Science', icon: '📊' },
//   ];


import React from 'react';
import './JobCategories.css';

const categories = [
  { 
    title: 'Technology', 
    description: 'Explore jobs in software, AI, and more.', 
    icon: 'bi-laptop', 
    bgImage: 'url(https://t3.ftcdn.net/jpg/07/46/95/46/360_F_746954673_VaR2YwZvNk4w5rZEVuo5U3yLfkHwEVEz.jpg)',
  },
  { 
    title: 'Healthcare', 
    description: 'Find your role in health and medicine.', 
    icon: 'bi-heart-pulse', 
    bgImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/712/985/small/abstract-health-medical-science-healthcare-icon-digital-technology-science-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg)',
  },
  { 
    title: 'Education', 
    description: 'Teaching and academic opportunities await.', 
    icon: 'bi-book', 
    bgImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZZHoRo_tphV-u9wIFuWPsxfRxNIRxo1kpg&s)',
  },
  { 
    title: 'Finance', 
    description: 'Careers in banking, investments, and more.', 
    icon: 'bi-currency-dollar', 
    bgImage: 'url(https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-43398.jpg?semt=ais_hybrid)',
  },
  { 
    title: 'Marketing', 
    description: 'Explore creative marketing jobs.', 
    icon: 'bi-bullhorn', 
    bgImage: 'url(https://static.vecteezy.com/system/resources/previews/002/130/430/non_2x/email-business-online-marketing-background-office-workplace-furniture-laptop-screen-megaphone-digital-network-social-media-concept-banner-email-web-marketing-freelance-design-illustration-vector.jpg)',
  },
  { 
    title: 'Engineering', 
    description: 'Build the future with engineering roles.', 
    icon: 'bi-gear', 
    bgImage: 'url(https://img.freepik.com/premium-vector/mechanical-engineering-drawings-black-background-cutting-tools-milling-cutter-technical-design-cover-blueprint-seamless-pattern-vector-illustration_101002-1357.jpg?semt=ais_hybrid)',
  },
];

export default function JobCategories() {
  return (
    <section className="job-categories py-5">
      <div className="container">
        <h2 className="text-center mb-4">Explore Job Categories</h2>
        <div className="row gy-4">
          {categories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div 
                className="card category-card shadow-sm" 
                style={{ backgroundImage: category.bgImage }}
              >
                <div className="card-body text-center text-white">
                  <i className={`bi ${category.icon} mb-3`} style={{ fontSize: '2.5rem' }}></i>
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text">{category.description}</p>
                  <button className="btn btn-light">View Jobs</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
