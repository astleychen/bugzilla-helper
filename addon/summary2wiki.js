"use strict";

function appendCopyButton() {
  var title = document.querySelector("#summary_alias_container");
  var button = document.createElement("input");
  button.type = "button"
  button.value = "Copy"
  button.onclick = function (e) {
    var bugid = document.querySelector(".bz_alias_short_desc_container > a > b")
    var bugdesc = document.querySelector("#short_desc_nonedit_display")
    var bugidtext = bugid.innerText;
    bugidtext = bugidtext.replace(/\s/g, '|')
    var res = "* {{" + bugidtext + "}} - " + bugdesc.innerHTML
    //console.log(res)

    // A replacement for GM_setClipboard
    copyToClipboard(res);
  }

  title.appendChild(button)
}

function copyToClipboard(text) {
  var txtToCopy = document.createElement('input');
  txtToCopy.value = text;
  document.body.appendChild(txtToCopy);
  txtToCopy.select();
  document.execCommand('copy');
  txtToCopy.parentNode.removeChild(txtToCopy);
}

appendCopyButton();
