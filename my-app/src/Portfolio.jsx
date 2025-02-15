import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="p-6">
    <h2 className="text-xl font-bold">Portfolio</h2>
    <p>Check out my projects below:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div className="p-4 bg-white shadow rounded">Project 1</div>
      <div className="p-4 bg-white shadow rounded">Project 2</div>
      <div className="p-4 bg-white shadow rounded">Project 3</div>
    </div>
  </section>
);

export default Portfolio;
