import React from 'react';
import Navigation from '../components/Navigation';

const Projects = () => {
    return (
        <div className="projects">
            <Navigation />
            <div className="projectsContent">
                <div className="content">
                    <h3>Voici quelques Captures vidéos de projets réalisés:</h3><br /><br />
                    <h4>2 Applications Java:</h4> <br /><br />
                    <ul>    
                    <li><a href='https://drive.google.com/file/d/1OBjtPZnd4cNwq7GAXpGnx4FAuSIvLgC6/view?usp=sharing' target="_blank" rel="noreferrer">Mots Croisés</a></li><br />
                    <li><a href='https://drive.google.com/file/d/1B3AVNTxesWWs4L8E88Orbgs5HYZ9Iir-/view?usp=sharing' target="_blank" rel="noreferrer">Morpions</a></li><br />
                    </ul> 
                    <br />
                    <h4>Site web "Breizh Jardin Vivant" en nodeJS/Javascript (projet en cours de développement, ce que montre le contenu des vidéos est encore loin de l'état final du site):</h4> <br /><br />
                    <ul> 
                        <li><a href="https://drive.google.com/file/d/10woo5Tw4kSyGya43JhtnQgG0TTGCazqv/view?usp=sharing" target="_blank" rel="noreferrer">administration des rubriques</a></li> <br />
                        <li><a href="https://drive.google.com/file/d/1RJOBOpzfDl0V-9JbAQ0kM8P2VK2A1yQ6/view?usp=sharing" target="_blank" rel="noreferrer">formulaire de contact </a></li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;