
let changeColor = document.getElementById("execute");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getString,
  });
});

function getString() {
  let array = [];
  let element = document.getElementById("result-table");
  let child1 = element.children;
  let child2 = child1[0].children;
  let myText = child2[2].innerText;

  const result = myText.split('\n');
  let totalResult = "1. ";
  let size = Object.keys(result).length - 1;

  result.forEach(function(item, i) {

    let str = item.substring(item.indexOf('#'), item.indexOf(':'));

    if(str !== '#67435') {
      totalResult = totalResult + str;
    }

    if(i < size)
      totalResult = totalResult + ", ";

});

    alert(totalResult);
}
