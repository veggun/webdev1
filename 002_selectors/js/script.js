const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId)

const allBySelector = document.querySelectorAll('.coolClass.mine');
const FirstBySelector = document.querySelector('div')
console.log(allBySelector, FirstBySelector)

const quest = prompt('что надо?');

byId.innerHTML = quest;
FirstBySelector.innerHTML = "<h2>HEllo im Hell</h2>"