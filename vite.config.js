import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import ReactRefresh from '@vitejs/plugin-react';
// Import the html plugin

export default defineConfig({
  build: {
    // Specify the entry file (e.g., src/main.js or src/main.ts)
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        manualChunks: {
         
        },
      },
    },
    chunkSizeWarningLimit: 1000,

    
  
  },
  assetsInclude: ['**/*.docx'],
  plugins: [
    [ReactRefresh()],

    // Add the html plugin to the plugins array
  ],
  resolve: {
    alias: {
      "@mui/material": "@mui/material",
      "@mui/system": "@mui/system",
      "@mui/icons-material": "@mui/icons-material",
      // '@': '/src',
      fora: "/src",
    },
  },
});
