// src/Components/ProjectList/ProjectList.js
import React from 'react';

const projects = [
  {
    title: 'Car Speed Detector',
    description: 'Controlled by Arduino Nano. Designed and programmed a real-time car speed detector following the Doppler Effect principle using IR sensors and Arduino IDE.',
  },
  {
    title: 'Research Project on the Regulations of AI',
    description: 'Focused on the legal gray areas surrounding Generative AI, particularly image ownership and the use of data scraping for training AI.',
  },
  {
    title: 'Dessert Shop E-Commerce Website',
    description: 'Front-end implementation of a dessert shop website with discounts, reviews, and a shopping cart. Built with HTML, CSS, and JavaScript.',
  },
  {
    title: 'Toy Shop 3D Modelling',
    description: 'Modeled a 4-storey toy shop in Blender, placed in a 3D environment using Unreal Engine 5, and explored in third-person.',
  },
];

const ProjectList = () => (
  <div>
    <h2>My Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectList;
