const h1 = document.querySelector('header h1');
h1.addEventListener('mouseover', function() {
    h1.textContent = 'The cat is watching you!';
});
h1.addEventListener('mouseout', function() {
    h1.textContent = 'Visualizations';
});

// Add your SVG drawing logic here
const svg = document.getElementById('vis');

// Example: Draw double circles and ellipses as cat eyes in the SVG
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '300');
circle.setAttribute('cy', '180');
circle.setAttribute('r', '50');
circle.setAttribute('fill', 'orange');
svg.appendChild(circle);

const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle2.setAttribute('cx', '500');
circle2.setAttribute('cy', '180');
circle2.setAttribute('r', '50');
circle2.setAttribute('fill', 'orange');
svg.appendChild(circle2);

const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
ellipse.setAttribute('cx', '300');
ellipse.setAttribute('cy', '180');
ellipse.setAttribute('rx', '10');
ellipse.setAttribute('ry', '50');
ellipse.setAttribute('fill', 'black');
svg.appendChild(ellipse);

const ellipse2 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
ellipse2.setAttribute('cx', '500');
ellipse2.setAttribute('cy', '180');
ellipse2.setAttribute('rx', '10');
ellipse2.setAttribute('ry', '50');
ellipse2.setAttribute('fill', 'black');
svg.appendChild(ellipse2);

//draw 2 triangle as ears
const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
triangle.setAttribute('points', '220,50 380,50 300,0');  // (x1, y1) (x2, y2) (x3, y3)
triangle.setAttribute('fill', 'black');
svg.appendChild(triangle);

const triangle2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
triangle2.setAttribute('points', '420,50 580,50 500,0');  // (x1, y1) (x2, y2) (x3, y3)
triangle2.setAttribute('fill', 'black');
svg.appendChild(triangle2);

svg.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX; 
    const newRx = Math.abs(mouseX-400)/8; 
    // if (abs(newRx2) > 50) {
    //     newRx2 =50;
    // }
    // if (abs(newRx2) < 5){
    //     newRx2 =5;
    // }
    ellipse.setAttribute('rx', newRx); 
    ellipse2.setAttribute('rx', newRx); 
  });