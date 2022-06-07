// Dynamic Guest Images

var img = document.createElement("img");
img.src = "./assets/speaker_01.png";
var block = document.getElementById("first-img");
block.appendChild(img);

var img = document.createElement("img");
img.src = "./assets/speaker_02.png";
var block = document.getElementById("second-img");
block.appendChild(img);

var img = document.createElement("img");
img.src = "./assets/speaker_03.png";
var block = document.getElementById("third-img");
block.appendChild(img);

var img = document.createElement("img");
img.src = "./assets/speaker_04.png";
var block = document.getElementById("fourth-img");
block.appendChild(img);

var img = document.createElement("img");
img.src = "./assets/speaker_05.png";
var block = document.getElementById("fifth-img");
block.appendChild(img);

var img = document.createElement("img");
img.src = "./assets/speaker_06.png";
var block = document.getElementById("sixth-img");
block.appendChild(img);

// Dynamic Guest Titles
var titles = document.getElementById("first-text");
titles.innerHTML += `
  
        <p class="guest-profession">Head of Museums in Kenya</p>
        <p class="summary">He is the Founder and President of the National Museum of Mexican Art (NMMA) in Kenya.</p>
  
`;
var titles = document.getElementById("second-text");
titles.innerHTML += `
    
        <p class="guest-profession">Director of Arts in Colombia</p>
        <p class="summary">The Barbara B. Taylor Director of the Saint Louis Art Museum, will retire this summer after serving for more than 20 years.</p>
    
`;
var titles = document.getElementById("third-text");
titles.innerHTML += `
    
        <p class="guest-profession">Director and cheif curator of studio Museums</p>
        <p class="summary">Thelma Golden is the director and chief curator of the Studio Museum in Harlem.</p>
    
`;
var titles = document.getElementById("fourth-text");
titles.innerHTML += `
    
        <p class="guest-profession">Visual Arts Specialist</p>
        <p class="summary"> Deborah is responsible for work in the visual arts sector, including conservation/preservation of museums</p>
    
`;
var titles = document.getElementById("fifth-text");
titles.innerHTML += `
    
        <p class="guest-profession">director of RK&A</p>
        <p class="summary">The owner and director of RK&A, oversees all aspects of the firm and its work. She has designed and managed audience research, planning and evaluation</p>
    
`;
var titles = document.getElementById("sixth-text");
titles.innerHTML += `
    
        <p class="guest-profession">Content Curator</p>
        <p class="summary">Timothy P. Brown (2002–2003) is an online instructor, content creator, and consultant.</p>
    
`;
