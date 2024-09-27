// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.querySelector('header');
//     header.addEventListener('click', function() {
//         alert('Hello, welcome to my personal website!');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const h2 = document.querySelector('header h2');
    
    header.addEventListener('click', function() {
        if (h2.textContent === 'Welcome to My Personal Webpage') {
            h2.textContent = 'Nice to meet you';
        } else {
            h2.textContent = 'Welcome to My Personal Webpage';
        }
    });
});