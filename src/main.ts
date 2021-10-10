const elem = document.createElement('div');
elem.setAttribute('id', 'bpElemID');
elem.setAttribute('style', 'position: absolute;width: 100%;');

const styles = 'width: 100%;max-width: 1200px;margin-top: 16px;';

const updateElem = (text: string) => {
  if (window.location.pathname.includes('/package/')) {
    document.querySelector('header')?.append(elem);

    const alt = `View ${text} on BundlePhobia`;

    elem.innerHTML = `
    <div class="flex ph0-l ph3 ph3-l ph4-m center-ns" style="${styles}">
      <a href="https://bundlephobia.com/package/${text}" class="flex" style="gap: 4px" target="_blank" rel="noopener noreferrer" title="${alt}">
        <img src="https://badgen.net/bundlephobia/minzip/${text}" alt="" />
        <img src="https://badgen.net/bundlephobia/tree-shaking/${text}" alt="" />
      </a>
    </div>`;

    return;
  }

  elem.innerHTML = '';
};

chrome.runtime.onMessage.addListener(text => {
  console.log(text);
  updateElem(text);
});
