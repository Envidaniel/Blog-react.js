import image1 from '../image/image1.jpg';
import image3 from '../image/image3.jpg';
import image4 from '../image/image4.jpg';
import image5 from '../image/image5.jpg'


export const posts = [
    {
      id: 1,
      title: "Les nouveautés de React 19",
      excerpt: "Découvrez les nouvelles fonctionnalités de React 19 et comment elles vont changer votre façon de développer.",
      content: `
        <h2>Introduction</h2>
        <p>React 19 apporte des améliorations significatives qui vont révolutionner le développement front-end.</p>
        <h2>Nouvelles fonctionnalités</h2>
        <ul>
          <li>Server Components par défaut</li>
          <li>Nouveau système de compilation</li>
          <li>Amélioration des performances</li>
        </ul>
        <h2>Exemple de code</h2>
        
      `,
      image: image1,
      date: "25 April 2025",
      readTime: 8,
      tags: ["react", "javascript"],
      
    },
    {
      id: 2,
      title: "Maîtrisez Tailwind CSS",
      excerpt: "Apprenez à utiliser Tailwind CSS comme un pro avec ces astuces et bonnes pratiques.",
      content: `<p>Contenu détaillé de l'article sur Tailwind CSS...</p>`,
      image: image3,
      date: "26 April 2025",
      readTime: 1,
      tags: ["css", "tailwind", "tips"],
      
    },
    {
        id: 3,
        title: "Maîtrisez Tailwind CSS",
        excerpt: "Apprenez à utiliser Tailwind CSS comme un pro avec ces astuces et bonnes pratiques.",
        content: `<p>Contenu détaillé de l'article sur Tailwind CSS...</p>`,
        image: image4,
        date: "26 April 2025",
        readTime: 6,
        tags: ["css", "tailwind", "tips"],
        
      },
      {
        id: 4,
        title: "Maîtrisez Tailwind CSS",
        excerpt: "Apprenez à utiliser Tailwind CSS comme un pro avec ces astuces et bonnes pratiques.",
        content: `<p>Contenu détaillé de l'article sur Tailwind CSS...</p>`,
        image: image5,
        date: "26 April 2025",
        readTime: 6,
        tags: ["css", "tailwind", "tips"],
        
      }
  ]