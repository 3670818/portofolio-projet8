


import React from 'react';
import './competence_style.scss';
import '../component/descriptionpanel_style.scss';
import { DescriptionPanel } from '../component/DescriptionPanel';
import cv from './assets/cv2026.jpg';
import MATLAB from '../assets/matlab1.png';
import mongoDB from '../assets/db1.png';
import competences from './competences.json'; // Chargement des données JSON

const imageMap = {
  matlab: MATLAB,
  mongoDB: mongoDB
};

const CVLink = () => {
  return (
    <a href={cv} target="_blank" rel="noopener noreferrer">
      <img src={cv} alt="CV" className="cv" />
      <h3 className="telecharger">Télécharger CV</h3>
    </a>
  );
};

const Competence = () => {
  return (
    <div className="tableau">
      <div className="lignefiltre-icon">
        <h3 id="competence">Compétences</h3>
        <div className="icon">
          <div className="grid-container">
            {competences.map((item, index) => (
              <div
                className={item.type === 'image' ? 'filtre-matlab' : 'filtre'}
                key={index}
              >
                {item.type === 'icon' ? (
                  <i className={item.icon}></i>
                ) : (
                  <img src={imageMap[item.image]} alt={`logo de ${item.label}`} />
                )}
                <h4>{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CVLink />
    </div>
  );
};

export default Competence;
