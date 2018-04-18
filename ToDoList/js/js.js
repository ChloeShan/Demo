var input = document.getElementById("input");
var unfinishedList = document.getElementById("unfinished-list");
var finishedList = document.getElementById("finished-list");
var point = null;
input.addEventListener('keyup',function (e) {
    if(e.keyCode == 13){
        if (input.value != "") {
            var li = document.createElement("li");
            li.innerHTML = '<input type="checkbox" onclick="finished()">' + input.value;
            unfinishedList.appendChild(li);
            input.value = "";
        }
    }
},false);
function finished() {
    var i;
    var unChild = unfinishedList.getElementsByTagName('li');
    var Child = finishedList.getElementsByTagName('li');
    if(unChild.length > 0){
        for(i = 0; i < unChild.length; i++){
            if(unChild[i].getElementsByTagName('input')[0].checked == true){
                finishedList.appendChild(unChild[i]);//移动节点到子元素的位置，并不是复制
            }
        }
    }
    if(Child.length > 0){
        for(i = 0; i < Child.length; i++){
            if(Child[i].getElementsByTagName('input')[0].checked == false){
                unfinishedList.appendChild(Child[i]);//移动节点到子元素的位置，并不是复制
            }
        }
    }
}