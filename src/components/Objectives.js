import React, { useState } from 'react';
import '../styles/Objectives.css';
import aimExperience from '../assets/aims/aim-experience.jpeg'
import aimInfrastructure from '../assets/aims/aim-infrastructure.jpeg'
import aimSafety from '../assets/aims/aim-safety.jpeg'
import aimSustainability from '../assets/aims/aim-sustainability.JPG'
import aimKnowledge from '../assets/aims/aim-knowledge.JPG'


const events = [
  {
    title: "Educational Infrastructure",
    paragraph: "We focus on building vital education facilities in rural villages. This provides accessible education to local children, laying the foundation for further educational pursuits. Collaborating with local NGOs, we identify communities in urgent need of early education infrastructure, ensuring that our efforts bring the most benefit to these areas.",
    image: aimInfrastructure
  },
  {
    title: "Exchange of Knowledge",
    paragraph: "Our projects are carried out with the assistance of local skilled workers, fostering a continuous exchange of knowledge between volunteers and the community. This collaboration allows villagers to learn safe and efficient construction management techniques, while students gain insights into practical construction methods and the specific needs of the community.",
    image: aimKnowledge
  },
  {
    title: "Improved Safety",
    paragraph: "RED aims to introduce safe building practices by implementing designs compliant with Eurocode standards, ensuring structures remain functional and serviceable throughout their design life. The construction process is simplified to minimize hazards, and volunteers are equipped with proper personal protective equipment, creating a safer environment for all participants.",
    image: aimSafety
  },
  {
    title: "Sustainability",
    paragraph: "To ensure long-term viability and positive development in Borneo's communities, RED emphasizes economic, environmental, and social sustainability at all project stages. We source local materials, optimize workflows, and incorporate green technologies like solar panels and rainwater harvesting systems. Continuous engagement with local villages allows us to receive feedback and make informed improvements.",
    image: aimSustainability
  },
  {
    title: "Student Experience",
    paragraph: "As a student-led project, RED offers students the opportunity to apply their engineering knowledge in real-world settings. Involvement spans from design to construction phases, providing hands-on experience and cultural immersion. Students live and work within the local community, participating in daily life, traditional celebrations, and exploring the region, enriching their personal and professional growth.",
    image: aimExperience
  }
];

const Objectives = () => {
  const [flipped, setFlipped] = useState(Array(events.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((flip, i) => (i === index ? !flip : flip))
    );
    console.log(flipped);
  };

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div
            className="timeline-card"
            onClick={() => toggleFlip(index)}
            role="button"
          >
            <div className={`card-inner ${flipped[index] ? "flipped" : ""}`}>
              <div className="card-front">
                <h3 className='card-title'>{event.title}</h3>
                <img
                  src={event.image}
                  alt={event.title}
                  className="card-image"
                />
              </div>
              <div className="card-back">
                <h3 className='card-title'>{event.title}</h3>
                <p className="timeline-paragraph">{event.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Objectives;