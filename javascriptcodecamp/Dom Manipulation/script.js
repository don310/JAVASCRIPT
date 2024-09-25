//DOM Manipulation


// GetElementById()
// const title = document.getElementById('main-heading');
// title.style.color = 'red'

// const items = document.querySelectorAll('.list-items');

// for(let i = 0; i < items.length; i++){
//     items[i].style.fontSize = '2rem';
// }
// console.log(items);

//Creating Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding Elements
// ul.append(li);

// // Modifying Text

// li.innerText = 'X-Men';

// li.classList.add('list-items')

// console.log(li.classList.contains('list-items'));

// //Remove Elements

// li.remove();
// Modifying Attributes and Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))

// const firstListItem = document.querySelector('.list-items'); // Use '.list-items' if it's a class
// // or use 'li' if you want to select the first <li> element

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);


// GetElementByClassName()

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems)


// // GetElementByTagName()

// const listItem = document.getElementsByClassName('li');
// console.log(listItem)


// // querySelector()

// const container = document.querySelector('div');
// console.log(container)


// // querySelectorAll()

// const containe = document.querySelectorAll('div');
// console.log(containe)


// Traversal the DOM
// let  ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// Parent Node Traversal

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


// Child Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue'
// ul.childNodes[3].style.backgroundColor = 'red'

// console.log(ul.children);
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// Sibling Node Traversal
let ul = document.querySelector('ul');
let div = document.querySelector('div');

// console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling)

