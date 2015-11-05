var dom = document.getElementById("task");


dom.addEventListener("click", addTask);


function addTask() {
  debugger;
  var str1 = document.js.txt.value;
  // var str1 = text_field.value;
  var p_tag = document.createElement("p");
  var str1_node = document.createTextNode(str1);
  p_tag.appendChild(str1_node);
  lists.appendChild(p_tag);
  // alert("ようこそ" + str1 + "さん！");
}

// div#listsのDOMを取得
var lists = document.getElementById("lists");


// DOMにイベントとremoveTaskの紐付
lists.addEventListener("click", removeTask);

function removeTask() {
  // this.removeChild(event.target);
  var parent = event.target.parentNode;
  parent.removeChild(event.target);
}
