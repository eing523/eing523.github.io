const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = new Map(
  tabs.map((tab) => [
    tab,
    document.getElementById(tab.getAttribute("aria-controls")),
  ]),
);

function tabFromHash() {
  return tabs.find((tab) => tab.hash === window.location.hash) ?? tabs[0];
}

function activateTab(selectedTab, { updateHistory = false, focus = false } = {}) {
  for (const tab of tabs) {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels.get(tab).hidden = !selected;
  }

  if (updateHistory && window.location.hash !== selectedTab.hash) {
    window.history.pushState(null, "", selectedTab.hash);
  }

  if (focus) {
    selectedTab.focus();
  }
}

activateTab(tabFromHash());

for (const tab of tabs) {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    activateTab(tab, { updateHistory: true });
  });

  tab.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(tab);
    let nextIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateTab(tabs[nextIndex], { updateHistory: true, focus: true });
  });
}

function syncTabToHash() {
  const matchingTab = tabFromHash();
  activateTab(matchingTab);
}

window.addEventListener("popstate", syncTabToHash);
window.addEventListener("hashchange", syncTabToHash);

document.getElementById("year").textContent = new Date().getFullYear();
