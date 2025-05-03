// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
// });


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'portfolio', // Répertoire principal de ton application
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portofolio-projet8/' : '/', // Ajuste le chemin en fonction de l'environnement
  assetsInclude: ['**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'], // Types d'images à inclure
  build: {
    outDir: 'dist',  // Dossier de sortie pour les fichiers de production
  },
});

