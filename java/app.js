

function Goods(title, src) {
  this.title = title;
  this.src = src;
  this.clickregister = 0;
  this.shownregister = 0;
  Goods.all.push(this);
}

Goods.roundregister = 0;
Goods.roundpollLimit = 25;
Goods.all = [];

Goods.container = document.getElementById('mall-container');

Goods.image1 = document.getElementById('image1');
Goods.image2 = document.getElementById('image2');
Goods.image3 = document.getElementById('image3');
Goods.image1Title = document.getElementById('image1-title');
Goods.image2Title = document.getElementById('image2-title');
Goods.image3Title = document.getElementById('image3-title');

Goods.image1Object = null;
Goods.image2Object = null;
Goods.image3Object = null;


new Goods('bag', 'image/bag.jpg');
new Goods('banana', 'image/banana.jpg');
new Goods('bathroom', 'image/bathroom.jpg');
new Goods('boots', 'image/boots.jpg');
new Goods('breakfast', 'image/breakfast.jpg');
new Goods('bubblegum', 'image/bubblegum.jpg');
new Goods('chair', 'image/chair.jpg');
new Goods('cthulhu', 'image/cthulhu.jpg');
new Goods('dog-duck', 'image/dog-duck.jpg');
new Goods('dragon', 'image/dragon.jpg');
new Goods('pen', 'image/pen.jpg');
new Goods('pet-sweep', 'image/pet-sweep.jpg');
new Goods('scissors', 'image/scissors.jpg');
new Goods('shark', 'image/shark.jpg');
new Goods('sweep', 'image/sweep.png');
new Goods('tauntaun', 'image/tauntaun.jpg');
new Goods('unicorn', 'image/unicorn.jpg');
new Goods('usb', 'image/usb.gif');
new Goods('water-can', 'image/water-can.jpg');
new Goods('wine-glass', 'image/wine-glass.jpg');


function renderNewGoods() {


  var forbidden = [Goods.image1Object, Goods.image2Object, Goods.image3Object];

  do {

    Goods.image1Object = getRandomGoods();

  } while (forbidden.includes(Goods.image1Object));


  forbidden.push(Goods.image1Object);
  do {

    Goods.image2Object = getRandomGoods();

  } while (forbidden.includes(Goods.image2Object));
  forbidden.push(Goods.image2Object);

  do {

    Goods.image3Object = getRandomGoods();

  } while (forbidden.includes(Goods.image3Object));


  Goods.image1Object.shownregister++;
  Goods.image2Object.shownregister++;
  Goods.image3Object.shownregister++;

  var image1ImageElement = Goods.image1;
  var image2ImageElement = Goods.image2;
  var image3ImageElement = Goods.image3;

  image1ImageElement.setAttribute('src', Goods.image1Object.src);
  image1ImageElement.setAttribute('alt', Goods.image1Object.title);

  image2ImageElement.setAttribute('src', Goods.image2Object.src);
  image2ImageElement.setAttribute('alt', Goods.image2Object.title);

  image3ImageElement.setAttribute('src', Goods.image3Object.src);
  image3ImageElement.setAttribute('alt', Goods.image3Object.title);

  Goods.image1Title.textContent = Goods.image1Object.title;
  Goods.image2Title.textContent = Goods.image2Object.title;
  Goods.image3Title.textContent = Goods.image3Object.title;
}

function getRandomGoods() {
  var index = Math.floor(Math.random() * Goods.all.length);
  return Goods.all[index];
}

function randomInRange(min, max) {
  var range = max - min + 1;
  var rand = Math.floor(Math.random() * range) + min
  return rand;
}


function resultList(){
      var ullist = document.getElementById("CONTNER");
      var li = document.createElement('li');
      ullist.appendChild(li);
      for (var i = 0; i < Goods.all.length; i++) {
          var mer = Goods.all[i]
          li = document.createElement('li');
          ullist.appendChild(li);
          li.textContent= '* ' +  mer.title + " had " + mer.clickregister + " votes and was shown " + mer.shownregister + " times.";
      }
  }

// function updateTotals() {

//   var tablestrc = document.getElementById('CONTNER');
//   tablestrc.innerHTML = '';
//   for (var i = 0; i < Goods.all.length; i++) {
//     var goods = Goods.all[i];
//     var row = addElement('tr', tablestrc);
//     addElement('td', row, goods.title);
//     addElement('td', row, '' + goods.clickregister);
//     addElement('td', row, '' + goods.shownregister);
//   }
// }

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

function clickHandler(event) {

  var clickedId = event.target.id;
  var goodsClicked;

  if (clickedId === 'image1') {
    goodsClicked = Goods.image1Object;
  } else if (clickedId === 'image2') {
    goodsClicked = Goods.image2Object;
  } else if (clickedId === 'image3') {
    goodsClicked = Goods.image3Object;
  }
  else {
    console.log('Um, what was clicked on???', clickedId);
  }

  if (goodsClicked) {
    goodsClicked.clickregister++;
    Goods.roundregister++;
    resultList();
    // updateTotals();

    if (Goods.roundregister === Goods.roundpollLimit) {

      alert('No more clicking for you!');

      Goods.container.removeEventListener('click', clickHandler);

    } else {

      renderNewGoods();
    }
  }
}


Goods.container.addEventListener('click', clickHandler);

resultList();
// updateTotals();

renderNewGoods();
