var model = document.getElementByClass("view-pic-model");
var modelImag = document.getElementByTag("model-img");
var img = document.getElementByTag("img");
var capture = document.getElementByClass("caption");
img.onclick = function(){
	model.style.display = "block";
	modelImg.src = this.src;
	modelImg.alt = this.alt;
	caption.innerHTML = this.alt;
}

// 获取 <span> 元素，设置关闭模态框按钮
var span = document.getElementsByClassName("close")[0];

// 点击 <span> 元素上的 (x), 关闭模态框
span.onclick = function() { 
    modal.style.display = "none";
}