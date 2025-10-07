import React from 'react';
import './ProjectCard.css';
import LetStartBtn from '../Button/Button';

const ProjectCard = ({ obj }) => {
  return (
    <div className="ProjectCardContainer">
      <div className="content">
        <span className="projectImage">
          <img src={obj.imgSrc} loading="lazy" alt={obj.title} />
        </span>
        <span className="projectInfo">
          <h1 className="projectCardName">{obj.title}</h1>
          <hr />
          <div>        
             <p className="projectCardDescription">{obj.description}</p>
          <div className='projectCardReadMoreButton'>
          <LetStartBtn buttonTitle="Read More" routePath='/projects' />
          </div>
          </div>
        </span>
      </div>
    </div>
  );
};



export default ProjectCard;
