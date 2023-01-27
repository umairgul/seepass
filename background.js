function showPassword() {
  passFields = document.querySelectorAll("input[type=password]");
  passFields.forEach((element) => {
    element.type = "text";
  });
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showPassword,
  });
});
