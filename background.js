//create context menus
chrome.runtime.onInstalled.addListener(function() {

chrome.contextMenus.create({
  "title": 'Talos search: "%s"',
  "contexts": ["selection"],
  "id": "TRid"
});

chrome.contextMenus.create({
  "title": 'VT search: "%s"',
  "contexts": ["selection"],
  "id": "VTid"
});

chrome.contextMenus.create({
  "title": 'OTX domain: "%s"',
  "contexts": ["selection"],
  "id": "OTXDid"
});

chrome.contextMenus.create({
  "title": 'OTX IP: "%s"',
  "contexts": ["selection"],
  "id": "OTXIPid"
});

chrome.contextMenus.create({
  "title": 'OTX hash: "%s"',
  "contexts": ["selection"],
  "id": "OTXHid"
});

chrome.contextMenus.create({
  "title": 'Shodan search: "%s"',
  "contexts": ["selection"],
  "id": "SHOid"
});

chrome.contextMenus.create({
  "title": 'MSTI: "%s"',
  "contexts": ["selection"],
  "id": "MSTIid"
});

chrome.contextMenus.create({
  "title": 'CIRCL CVE: "%s"',
  "contexts": ["selection"],
  "id": "CCVEid"
});

chrome.contextMenus.create({
  "title": 'CyberChef B64 decode: "%s"',
  "contexts": ["selection"],
  "id": "CChefid"
});

chrome.contextMenus.create({
  "title": 'Twitter search: "%s"',
  "contexts": ["selection"],
  "id": "TWid"
});
    
});

//create search tabs
chrome.contextMenus.onClicked.addListener(function(info, tab) {

  var manu_option = info.menuItemId;

  switch(manu_option) {
    case "TRid":
      chrome.tabs.create({ url: "https://talosintelligence.com/reputation_center/lookup?search=" + encodeURIComponent(info.selectionText) });
      break;

    case "VTid":
      chrome.tabs.create({ url: "https://altersec.com/iocsearch.php?vt=" + encodeURIComponent(info.selectionText) });
      break;

    case "OTXDid":
        chrome.tabs.create({ url: "https://otx.alienvault.com/indicator/domain/" + encodeURIComponent(info.selectionText) });
        break;
    
    case "OTXIPid":
      chrome.tabs.create({ url: "https://otx.alienvault.com/indicator/ip/" + encodeURIComponent(info.selectionText) });
      break;

    case "OTXHid":
      chrome.tabs.create({ url: "https://otx.alienvault.com/indicator/file/" + encodeURIComponent(info.selectionText) });
      break;

    case "SHOid":
      chrome.tabs.create({ url: "https://www.shodan.io/search?query=" + encodeURIComponent(info.selectionText) });
      break;  

    case "MSTIid":
      chrome.tabs.create({ url: "https://ti.defender.microsoft.com/search?query=" + encodeURIComponent(info.selectionText) });
      break;
    
    case "CCVEid":
      chrome.tabs.create({ url: "https://cve.circl.lu/cve/" + encodeURIComponent(info.selectionText) });
      break;

    case "CChefid":
      chrome.tabs.create({url: "https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true)&input=" + encodeURIComponent(info.selectionText) });
      break;

    case "TWid":
      chrome.tabs.create({ url: "https://twitter.com/search?q=" + encodeURIComponent(info.selectionText) });
      break;

    default:
      return;
  }

});
