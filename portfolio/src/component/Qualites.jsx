import React from 'react'
import './qualite_style.scss'
function Qualites() {
  return (
    <>
     <div className="lignefiltre-icon">
        <div className="icon">
            <div className="tel-filtre">
               
                    <div className="filtre">
                    <i class="fa-solid fa-palette"></i>
                     <h4>Créatif</h4>
                    </div>
                
            
                    <div className="filtre">
                    <i class="fa-solid fa-battery-full"></i>
                        <h4> Autonome</h4>
                    </div>
                
            </div>

            

              
                    <div className="filtre">
                    <i class="fa-solid fa-question"></i>
                        <h4>Curieux </h4>
                    </div>
            
        </div>
    </div>
    </>
  )
}

export default Qualites