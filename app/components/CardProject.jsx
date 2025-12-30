'use client';
import './CardProject.css';

function CardProject({ title, description, technologies, onLearnMore }) {
  return (
    <div className="card-project-container">
      <div className="card-project">
        <h2 className="card-project-title">
          {title}
        </h2>
        
        <div className="card-project-separator"></div>
        
        <p className="card-project-description">
          {description}
        </p>
        
        <div className="card-project-separator"></div>
        
        <p className="card-project-technologies">
          {technologies}
        </p>
        
        <div className="card-project-separator"></div>
        
        <div className="card-project-button-container">
          <button
            onClick={onLearnMore}
            className="card-project-button"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
