const getId = document.querySelector('#categories');
const getItem = document.querySelectorAll('.item');

console.log('🚀 ~ Number of categories:', getItem.length);

getItem.forEach(element => {
  element.firstElementChild.textContent;
  element.lastElementChild.children.length;
  console.log('🚀 ~ Category:', element.firstElementChild.textContent);
  console.log('🚀 ~ Elements:', element.lastElementChild.children.length);
});
