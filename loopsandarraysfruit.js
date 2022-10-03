var emojis, fruits;


fruits = ['apple', 'banana', 'cherries'];

emojis = ['🍎', '🍌', '🍒'];

let element_list = document.getElementById('list');
while (!!fruits.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = fruits.shift();

  new_li.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = emojis.shift();

  new_li.appendChild(new_span2);

  element_list.appendChild(new_li);
}
