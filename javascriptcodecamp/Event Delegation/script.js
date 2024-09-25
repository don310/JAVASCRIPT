// Event Delegation

// It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector.

document.querySelector('#sports').addEventListener('click', function(e) {
    const target = e.target;
    
    // Log which element was clicked, with a space after the ID
    console.log(target.getAttribute('id') + ' is clicked');

    // Apply styles only if the clicked target is an 'li' element
    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport)