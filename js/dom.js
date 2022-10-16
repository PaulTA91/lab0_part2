let currentNode;

function alterCell() {
  currentNode = document.getElementById("table1").rows[0].cells[1];
  const newContent =
    '<span id="redcell">This table cell has been altered</span>';
  currentNode.innerHTML = newContent;
}

function addNewParagraph() {
  currentNode = document.getElementById("paragraph1");
  input = document.getElementById("textarea2").value;
  const newNode = document.createElement("p");
  newNode.appendChild(document.createTextNode(input));
  currentNode.parentNode.insertBefore(newNode, currentNode);
  // currentNode = document.getElementById("paragraph1");
  // input = document.getElementById("textarea2").value;
  // const newNode2 = document.createElement("p");
  // newNode.appendChild(document.createTextNode(" " + input));
  // currentNode.parentNode.insertBefore(newNode2, currentNode);
}

function domView() {
  let i;
  let nodeList;
  let output = "";

  //<p> elements
  nodeList = document.getElementsByTagName("p");
  output += "Paragraphs(" + nodeList.length + "):" + "<br>";
  for (i = 0; i < nodeList.length; i++) {
    if (nodeList[i].id != "") {
      output += nodeList[i].id + "<br>";
    } else {
      output += "(no id)" + "<br>";
    }
  }

  //input elements
  nodeList = document.getElementsByTagName("input");
  output += "Inputs(" + nodeList.length + "):" + "<br>";
  for (i = 0; i < nodeList.length; i++) {
    if (nodeList[i].id != "") {
      output += nodeList[i].id + "<br>";
    } else {
      output += "(no id)" + "<br>";
    }
  }

  nodeList = document.getElementsByTagName("td");
  output += "Table Cells(" + nodeList.length + "):" + "<br>";
  for (i = 0; i < nodeList.length; i++) {
    if (nodeList[i].id != "") {
      output += nodeList[i].id + "<br>";
    } else {
      output += "(no id)" + "<br>";
    }
  }

  currentNode = document.getElementById("domview");
  currentNode.innerHTML = output;
  currentNode.style.visibility = "visible";
}

function domHide() {
  currentNode = document.getElementById("domview");
  currentNode.style.visibility = "hidden";
}

window.onload = function () {
  document.getElementById("listdom").onclick = domView;
  document.getElementById("hidedom").onclick = domHide;
  document.getElementById("addpara").onclick = addNewParagraph;
  document.getElementById("altercell").onclick = alterCell;
};
