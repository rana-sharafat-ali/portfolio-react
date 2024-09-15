import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link: '',
    image: ''
  });
  const [responseMessage, setResponseMessage] = useState('');


  useEffect(() => {
    fetch('https://genius-gallery.free.beeceptor.com/api/users')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://genius-gallery.free.beeceptor.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
        setResponseMessage('Project successfully added!');
        setFormData({ name: '', description: '', link: '', image: '' });
      } else {
        setResponseMessage('Failed to add project.');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      setResponseMessage('An error occurred while adding the project.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://genius-gallery.free.beeceptor.com/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setProjects(projects.filter(project => project.id !== id));
        setResponseMessage('Project successfully deleted!');
      } else {
        setResponseMessage('Failed to delete project.');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      setResponseMessage('An error occurred while deleting the project.');
    }
  };


  const staticProjects = [
    {
      id: 1,
      name: 'CSS Challenges Class Assignment',
      description:
        'In this project assignment, all the CSS challenges are solved. Different types of challenges like playing with colors and text etc.',
      link: 'https://rana-sharafat-ali.github.io/css-challenges/',
      image: 'https://i.ibb.co/prQ98j0/challenges-in-css.png'
    },
    {
      id: 2,
      name: 'Portfolio Assignment Github',
      description:
        'During this lab project, I learned how to create a repository on GitHub and host my code. Showcase your skills to anyone!',
      link: 'https://rana-sharafat-ali.github.io/Portfolio/',
      image: 'https://i.ibb.co/52PQVNN/portfolio-assignment.png'
    },
    {
      id: 3,
      name: 'Responsive Page using Flex',
      description:
        'An assignment project using Bootstrap Flex classes to create a responsive web page.',
      link: 'https://rana-sharafat-ali.github.io/responsive-page-flex/',
      image: 'https://i.ibb.co/prRMspQ/responsive-page-flex.png'
    },
    {
      id: 4,
      name: 'Responsive Page using Grid',
      description:
        'An assignment project using Bootstrap Grid classes to create a responsive web page.',
      link: 'https://rana-sharafat-ali.github.io/responsive-page-grid/',
      image: 'https://i.ibb.co/T1XhCdQ/responsive-page-grid.png'
    },
    {
      id: 5,
      name: 'Cat Facts using API fetch',
      description:
        'In this mini project, I used fetch API and json() to get responses from an API and display them on the web page.',
      link: 'https://rana-sharafat-ali.github.io/cat-facts/',
      image: 'https://i.ibb.co/w6zRBML/facts-mini-project.png'
    },
    {
      id: 6,
      name: 'Color Changer',
      description:
        'A mini Project about changing background color by hovering the mouse on the color.',
      link: 'https://rana-sharafat-ali.github.io/color-changer-js-mini-project/',
      image: 'https://i.ibb.co/brv2tbS/color-chainger-mini-project.png'
    }
  ];

  return (
    <>
      <div className="m-2 position-relative" id="pp">
        <main>
          <h1 className="text-black text-center mt-5">Projects</h1>
          <div className="text-black position-relative">
            <h1 className="pp-h1">My Projects Showcase Page</h1>
            <p className="pp-p">
              I am a CS student at Islamia University Bahawalpur. This site is a visual
              collection of some of my projects. Welcome!
            </p>

            
            {staticProjects.map(project => (
              <div key={project.id} className="pp-box border d-flex mb-5">
                <div className="child-1 me-5 m-1">
                  <img className="p-img" src={project.image} alt={project.name} />
                </div>
                <div className="child-2 m-1 ms-5">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  <a className='btn btn-outline-info' href={project.link}>Open Project</a>
                </div>
              </div>
            ))}

       
            {projects.map(project => (
              <div key={project.id} className="pp-box border d-flex mb-5">
                <div className="child-1 me-5 m-1">
                  <img className="p-img" src={project.image} alt={project.name} />
                </div>
                <div className="child-2 m-1 ms-5">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  <a className='btn btn-outline-info' href={project.link}>open Project</a>
                  <button
                    className="btn btn-outline-danger m-2"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete Project
                  </button>
                </div>
              </div>
            ))}


            <form className="border p-4" onSubmit={handleSubmit}>
              <h1 className="h3">Add New Project</h1> <br />
              <label className="m-1" htmlFor="project-name">
                Project Name:
              </label>
              <input
                className="m-1 p-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label className="m-1" htmlFor="project-description">
                Project Description:
              </label>
              <input
                className="m-1 p-description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <label className="m-1" htmlFor="project-link">
                Project Link:
              </label>
              <input
                className="m-1 p-link"
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
              />
              <br />
              <label className="m-1" htmlFor="project-Image">
                Project Image URL:
              </label>
              <input
                className="p-image m-1"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              <br />
              <button type="submit" className="btn btn-outline-success m-2">
                Add Project
              </button>
            </form>

            {responseMessage && <div id="responseDataDiv">{responseMessage}</div>}
          </div>
        </main>
      </div>
    </>
  );
}

export default Projects;
