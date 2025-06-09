const btn = document.querySelector('button');//获取HTML文件中名为button的对象
const displayedImage = document.querySelector('.displayed-img');//获取class为displayed-img的对象
let bname = btn.getAttribute("class");//获取btn中class属性（必须加引号）
const newImage = document.createElement("img");//创建新的img对象
newImage.setAttribute("src",`images/${photo[i]}`);//设置新的img对象路径
thumbBar.appendChild(newImage);//创建新对象