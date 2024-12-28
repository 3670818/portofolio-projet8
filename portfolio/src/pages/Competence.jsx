import React from 'react'
import './competence_style.scss'
import '../component/descriptionpanel_style.scss'
import { DescriptionPanel } from '../component/DescriptionPanel'

function Competence() {
  return (
    <>
    
    <div className="lignefiltre-icon">
        <h3 id="competence">Compétences</h3>
        <div className="icon">
            <div className="tel-filtre">
               
                    <div className="filtre">
                        <i className="fa-brands fa-html5"> </i>
                        <h4>HTML</h4>
                    </div>
                
            
                    <div className="filtre">
                        <i className="fa-brands fa-js"></i>
                        <h4> Javascript</h4>
                    </div>
                
            </div>

            <div className="tel-filtre">

              
                    <div className="filtre">
                        <i className="fa-brands fa-node-js"></i>
                        <h4>Nodes.js </h4>
                    </div>
                
               
                
                    <div className="filtre">
                        <i className="fa-solid fa-file-code"></i>
                        <h4>CSS</h4>
                    </div>
              
               
            </div>
        </div>
    </div>




    <div className="lignefiltre-icon">
        <h3 id="competence">Formation</h3>
            <h4>2024</h4>
            <div className="apartment__description__area">
        <DescriptionPanel title=" Création de Sites Web Ergonomiques " 
        content="Conception experte de sites responsifs et intuitifs avec HTML et CSS,
           optimisés pour une excellente expérience utilisateur." />   
        <DescriptionPanel title=" Interactions Avancées en JavaScript " content="Développement de fonctionnalités interactives avec animations, gestion d'événements et intégration d’API." />
        <DescriptionPanel title=" Applications Backend Performantes " content="Développement d'applications web robustes avec Node.js et APIs RESTful, intégrant des bases de données puissantes." />
        <DescriptionPanel title=" Interfaces Réactives avec React " content="Conception d’expériences utilisateur dynamiques et intuitives grâce à une maîtrise avancée de React." />
        <DescriptionPanel title=" Gestion de Données Efficiente " content="Conception et optimisation de bases de données flexibles avec MongoDB pour un accès et une manipulation rapides." /> 
        <DescriptionPanel title=" Gestion Agile de Projets " content="Pilotage efficace de projets en appliquant des méthodologies Agile pour des livraisons rapides et de qualité." /> 
        <DescriptionPanel title=" Optimisation SEO Avancée " content="Mise en œuvre de stratégies SEO pour maximiser la visibilité et améliorer le classement dans les moteurs de recherche." />  
        <DescriptionPanel title=" Débogage et Résolution " content="Identification rapide des problèmes techniques et implémentation de solutions fiables et durables." />  
        
      </div>








{/* 
            <ul>
                <li>
                   <h5> Création de Sites Web Ergonomiques :</h5> Conception experte de sites responsifs et intuitifs avec HTML et CSS, optimisés pour une excellente expérience utilisateur.
                </li>
                <li>
                   <h5> Interactions Avancées en JavaScript :</h5> Développement de fonctionnalités interactives avec animations, gestion d'événements et intégration d’API.                </li>
                <li>
                    <h5>Applications Backend Performantes :</h5>   Développement d'applications web robustes avec Node.js et APIs RESTful, intégrant des bases de données puissantes.
                </li>
                <li>
                    <h5> Interfaces Réactives avec React :</h5>  Conception d’expériences utilisateur dynamiques et intuitives grâce à une maîtrise avancée de React.
                </li>
                <li>
                    <h5> Gestion de Données Efficiente :</h5>  Conception et optimisation de bases de données flexibles avec MongoDB pour un accès et une manipulation rapides.
                </li>
                <li>
                    <h5>Gestion Agile de Projets :</h5>   Pilotage efficace de projets en appliquant des méthodologies Agile pour des livraisons rapides et de qualité.
                </li>
                <li>
                    <h5> Optimisation SEO Avancée :</h5>  Mise en œuvre de stratégies SEO pour maximiser la visibilité et améliorer le classement dans les moteurs de recherche.
                </li>
                <li>
                    <h5> Débogage et Résolution :</h5>  Identification rapide des problèmes techniques et implémentation de solutions fiables et durables.
                </li>
            </ul>
             </p> */}
        
                
               
            
    
    </div>
    </>
  )
}

export default Competence