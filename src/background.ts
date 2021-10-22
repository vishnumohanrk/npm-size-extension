const filter: chrome.webNavigation.WebNavigationEventFilter = {
  url: [{ hostEquals: 'www.npmjs.com' }],
};

const getPackageName = (url: string) => {
  const packageURL = new URL(url);
  const pkg = packageURL.pathname.replace('/package/', '');

  return pkg.replace('/v/', '@');
};

const sendMsg = ({ tabId, url }: { tabId: number; url: string }) =>
  chrome.tabs.sendMessage(tabId, getPackageName(url));

chrome.webNavigation.onHistoryStateUpdated.addListener(sendMsg, filter);

chrome.webNavigation.onCompleted.addListener(sendMsg, filter);
