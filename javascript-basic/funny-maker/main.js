const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let insertX = ['怪兽威利','大老爹','圣诞老人'];
let insertY = ['肯德基','迪士尼乐园','白宫'];
let insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];

function result() {
 
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let storyText = `今天气温 34 摄氏度，${xItem}出去遛弯。当走到${yItem}门前时，突然就${zItem}。人们都惊呆了，李雷全程目睹但并没有慌，因为${xItem}是一个 140 公斤的胖子，天气又辣么热。`;
  let newStory = storyText;
  let name;
  if(customName.value !== '') {
    name = customName.value;
    newStory = `今天气温 34 摄氏度，${xItem}出去遛弯。当走到${yItem}门前时，突然就${zItem}。人们都惊呆了，${name}全程目睹但并没有慌，因为${xItem}是一个 140 公斤的胖子，天气又辣么热。`;
  }
  
  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
    newStory = `今天气温${temperature}华氏度，${xItem}出去遛弯。当走到${yItem}门前时，突然就${zItem}。人们都惊呆了，${name}全程目睹但并没有慌，因为${xItem}是一个${weight}磅的胖子，天气又辣么热。`;

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);