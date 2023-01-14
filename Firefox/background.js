/*
Called when the item has been created, or when creation failed due to an error.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}


browser.menus.create({
  id: "TRid",
  title: "Talos search: %s",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "VTid",
  title: "VT search: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "OTXDid",
  title: "OTX domain: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "OTXIPid",
  title: "OTX IP: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "OTXHid",
  title: "OTX hash: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "SHOid",
  title: "Shodan search: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "MSTIid",
  title: "MSTI: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "CCVEid",
  title: "CIRCL CVE: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "CChefid",
  title: "CyberChef B64 decode: '%s'",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "TWid",
  title: "Twitter search: '%s'",
  contexts: ["selection"]
}, onCreated);





function f_TRid(info) {
  var destination = "https://talosintelligence.com/reputation_center/lookup?search=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_CChefid(info) {
  var selection = info.selectionText;
  var enc = window.btoa(selection);
  var enc_selection = enc.replace(/={1,2}$/, '');
  //var destination = "https://gchq.github.io/CyberChef/#input=" + enc_selection;
  var destination = "https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true)&input=" + enc_selection;
  browser.tabs.create({ url: destination});
}




function f_VTid(info) {
  var destination = "https://altersec.com/iocsearch.php?vt=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_OTXDid(info) {
  var destination = "https://otx.alienvault.com/indicator/domain/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_OTXIPid(info) {
  var destination = "https://otx.alienvault.com/indicator/ip/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_OTXHid(info) {
  var destination = "https://otx.alienvault.com/indicator/file/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_SHOid(info) {
  var destination = "https://www.shodan.io/search?query=" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_MSTIid(info) {
  var destination = "https://ti.defender.microsoft.com/search?query=" + info.selectionText;
  browser.tabs.create({ url: destination});
}


function f_CCVEid(info) {
  var destination = "https://cve.circl.lu/cve/" + info.selectionText;
  browser.tabs.create({ url: destination});
}

function f_TWid(info) {
  var destination = "https://twitter.com/search?q=" + info.selectionText;
  browser.tabs.create({ url: destination});
}


/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.

    case "UNIQUE_ID":
      UNIQUE_FUNCTION_NAME(info);
      break;

*/
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
	  
    case "TRid":
      f_TRid(info);
      break;

    case "VTid":
      f_VTid(info);
      break;

    case "OTXDid":
      f_OTXDid(info);
      break;
	  
    case "OTXIPid":
      f_OTXIPid(info);
      break;
	  
    case "OTXHid":
      f_OTXHid(info);
      break;
	  
    case "SHOid":
      f_SHOid(info);
      break;
	  
    case "MSTIid":
      f_MSTIid(info);
      break;
	  
    case "CCVEid":
      f_CCVEid(info);
      break;
	  
    case "CChefid":
      f_CChefid(info);
      break;
	  
    case "TWid":
      f_TWid(info);
      break;

  }
});
