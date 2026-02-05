import React, { useState } from 'react';
// import key_members from '../data/team_info';
import '../css/aboutus.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook


function TeamSkill({ title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`hover:scale-105 card m-5 w-full h-[300px] sm:h-[350px] md:h-[300px] lg:h-[350px] flex justify-center rounded-lg transition-transform duration-200 ${
        isFlipped ? 'flipped' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className='card-inner w-full text-white bg-deepblue rounded-lg '>
        <div className='card-front flex justify-center text-center'>
          <div className='text-center text-xl flex justify-center items-center'>
            <p>{title}</p>
          </div>
        </div>
        <div className='card-back px-8 bg-blue-500 flex flex-col justify-center rounded-lg items-center'>
          <div className='text-center flex justify-center w-full text-xl py-2'>
            <p>{title}</p>
          </div>
          <div className='text-center flex justify-center w-full'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSkills() {
  const { t } = useTranslation(); // Initialize the translation hook

  const team_skills = [
    {
      title: [t('teamSkills.card1Title')],
      description:
      [t('teamSkills.card1Text')],
    },
    {
      title: [t('teamSkills.card2Title')],
      description:
      [t('teamSkills.card2Text')],
    },
    {
      title: [t('teamSkills.card3Title')],
      description:
      [t('teamSkills.card3Text')],
    },
    {
      title: [t('teamSkills.card4Title')],
      description:
      [t('teamSkills.card4Text')],
    },
    {
      title: [t('teamSkills.card5Title')],
      description:
      [t('teamSkills.card5Text')],
    },
    {
      title: [t('teamSkills.card6Title')],
      description:
      [t('teamSkills.card6Text')],
    },
  ];


  return (
    <section className='p-8 md:p-16 text-center w-full text-black bg-white'>
      {/* Heading with changes only for smartphone view */}
      <div className='mx-auto sm:max-w-full max-w-md'>
        <h2 className='text-2xl sm:text-3xl font-bold sm:m-6 m-10'>{t('teamSkills.title')}</h2>
      </div>
      
      {/* Grid layout with responsive gap and column setup */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {team_skills.map((skill, index) => (
          <TeamSkill key={index} title={skill.title} description={skill.description} />
        ))}
      </div>
    </section>
  );
  
}

function TeamProfile() {
  const { t } = useTranslation(); // Initialize the translation hook

  const team_profile = [
    {
      title: 'Cyrille NAHABEDIAN',
      sub_title: [t('teamSkills.cyrilleRole')],
      linkedin:"https://lu.linkedin.com/in/cyrille-nahabedian-19551217",
      photo: 'img/cyrille.jpg',
      description:
      [t('teamSkills.cyrilleDescription')],
    },
    {
      title: 'Alexandre TRAMINI',
      sub_title: [t('teamSkills.alexRole')],
      linkedin:"https://lu.linkedin.com/in/tramini/fr",
      photo: 'img/tramini.jpg',
      description:
      [t('teamSkills.alexDescription')],
    },

    {
      title: 'Jonathan NIDDAM',
      sub_title: [t('teamSkills.joRole')],
      photo: 'img/jo.jpg',
      linkedin:"https://lu.linkedin.com/in/jni89",
      description:
      [t('teamSkills.joDescription')],
    },
    
    {
      title: 'Ilyasse TARIQ',
      sub_title: [t('teamSkills.ilyasseRole')],
      photo: 'img/ilyasse.jpg',
      linkedin:"https://lu.linkedin.com/in/ilyasse-tariq",
      description:
      [t('teamSkills.ilyasseDescription')],
    },
    {
      title: 'Bak-Khieng UNG',
      sub_title: [t('teamSkills.bakRole')],
      photo: 'img/bak.jpg',
      linkedin:"https://lu.linkedin.com/in/baung",
      description:
      [t('teamSkills.bakDescription')],
    },
    {
      title: 'Pierre LEONARD',
      sub_title: [t('teamSkills.pierreRole')],
      photo: 'img/pierre.jpg',
      linkedin:"https://lu.linkedin.com/in/baung",
      description:
      [t('teamSkills.pierreDescription')],
    },
  ];

  const handleProfileClick = (linkedinUrl) => {

    window.open(linkedinUrl, '_blank');
  };


  return (
    <section className='p-8 md:p-16 text-center w-full text-black bg-white'>
      <div className='mx-auto sm:max-w-full max-w-md'>
        <h2 className='text-2xl sm:text-3xl font-bold sm:m-6 m-10'>{t('teamSkills.teamProfileTitle')}</h2>
      </div>

      <div className='flex flex-col gap-8'>
        {team_profile.map((profile, index) => (
          <a
            key={index}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div
              className={`profile-card flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center justify-center md:justify-between p-2 bg-white shadow-lg rounded-lg cursor-pointer`}
            >
              {/* Photo Section */}
              <div className='w-full md:w-[25%] h-auto'>
                <img
                  className='w-full h-auto object-cover rounded-lg'
                  src={profile.photo}
                  alt={`${profile.title} photo`}
                  style={{ maxHeight: '500px', width: 'auto', objectFit: 'cover' }} 
                />
              </div>

              {/* Text Section */}
              <div className='w-full md:w-[70%] p-4 md:text-center text-center'> {/* Text centered for small screens */}
                <h3 className='text-4xl font-bold text-blue-900'>{profile.title}</h3> 
                <h4 className='text-xl font-medium text-blue-600 mt-1'>{profile.sub_title}</h4> 
                <p className='mt-2 text-base text-gray-700 leading-relaxed whitespace-pre-line text-justify'>
                  {profile.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Custom CSS for screen sizes less than 1225px and 770px */}
      <style jsx>{`
        @media (max-width: 1225px) {
          .profile-card {
            flex-direction: column;
            text-align: center;
          }
          .profile-card img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 350px; /* More moderate size for medium screens */
          }
        }
        @media (max-width: 770px) {
          .profile-card {
            text-align: center;
          }
          .profile-card img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-height: 150px; /* Smaller size for small screens */
          }
        }
      `}</style>
    </section>
  );
}

export default function AboutUsPage() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className='items-center w-full p-0'>
      <img className='fixed top-0 left-0 w-full -z-50' src='img/ny.png' alt='clocher' />
      <img className='w-64 fixed mt-32 right-1/3 -z-50' src='img/heroics-logo-rgb blanc.png' alt='logo' />
      <div className='w-full mt-[500px]'>
        <TeamSkills />
        <TeamProfile />
      </div>
    </div>
  );
}
