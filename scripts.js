// Dynamic Guest Images
const speakers = [
  {
    name: 'Yochai Benkler',
    title: 'Head of Museums in Kenya',
    description: 'He is the Founder and President of the National Museum of Mexican Art (NMMA) in Kenya.',
    src: './assets/speaker_01.png',
    id: 'first-img',
  },
  {
    name: 'Kilnam Chon',
    title: 'Director of Arts in Colombia',
    description: 'The Barbara B. Taylor Director of the Saint Louis Art Museum, will retire this summer after serving for more than 20 years.',
    src: './assets/speaker_02.png',
    id: 'second-img',
  },
  {
    name: 'SohYeung Noh',
    title: 'Director and cheif curator of studio Museums',
    description: 'Thelma Golden is the director and chief curator of the Studio Museum in Harlem.',
    src: './assets/speaker_03.png',
    id: 'third-img',
  },
  {
    name: 'Julia Leda',
    title: 'Visual Arts Specialist',
    description: 'Deborah is responsible for work in the visual arts sector, including conservation/preservation of museums',
    src: './assets/speaker_04.png',
    id: 'fourth-img',
  },
  {
    name: 'Lila Tretikov',
    title: 'Director of RK&A',
    description: 'The owner and director of RK&A, oversees all aspects of the firm and its work. She has designed and managed audience research, planning and evaluation',
    src: './assets/speaker_05.png',
    id: 'fifth-img',
  },
  {
    name: 'Ryan Merkley',
    title: 'Content Curator',
    description: 'Timothy P. Brown (2002–2003) is an online instructor, content creator, and consultant.',
    src: './assets/speaker_06.png',
    id: 'sixth-img',
  },
];
const speakersCard = document.getElementById('speakers');

speakers.forEach((speaker, idx) => {
  // Fetch Speakers Card
  const speakerContent = document.createElement('div');
  speakerContent.className = `speaker-content card mb-3 col-md-6 col-sm-12 ${idx > 1 ? 'speaker-hidden' : ''}`;
  speakerContent.id = `${idx}`;
  // Create Row
  const speakerRow = document.createElement('div');
  speakerRow.className = 'row g-0';
  speakerContent.appendChild(speakerRow);
  // Create Image Container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'col-4 col-md-4';
  speakerRow.appendChild(imgContainer);
  // Append Image
  const img = document.createElement('img');
  img.src = speaker.src;
  img.className = 'img-fluid';
  imgContainer.appendChild(img);
  // Create Speaker Detail
  const speakerDetailContent = document.createElement('div');
  speakerDetailContent.className = 'col-8 col-md-8 px-2';
  speakerRow.appendChild(speakerDetailContent);
  // Create Speaker Detail Container
  const speakerDetailContainer = document.createElement('div');
  speakerDetailContainer.className = 'card-body';
  speakerDetailContent.appendChild(speakerDetailContainer);
  // Create Speaker Detail Title
  const speakerDetailTitle = document.createElement('h5');
  speakerDetailTitle.className = 'card-title';
  speakerDetailTitle.innerText = speaker.name;
  speakerDetailContent.appendChild(speakerDetailTitle);
  // Create Speaker Detail Description
  const speakerDetailDescription = document.createElement('p');
  speakerDetailDescription.className = 'card-description';
  speakerDetailDescription.innerText = speaker.description;
  speakerDetailContent.appendChild(speakerDetailDescription);
  // Speakers Card
  speakersCard.appendChild(speakerContent);
});

const btnMoreSpeakers = document.getElementById('btn-more-speakers');

// Add Button Event Listener
btnMoreSpeakers.addEventListener('click', () => {
  const speakerElementsArray = document.getElementsByClassName('speaker-content');
  Array.from(speakerElementsArray).forEach((speakerElement) => {
    if (speakerElement.classList.contains('speaker-hidden')) {
      speakerElement.classList.remove('speaker-hidden');
    } else if (parseInt(speakerElement.id) > 1) {
      speakerElement.classList.add('speaker-hidden');
    }
  });
});
