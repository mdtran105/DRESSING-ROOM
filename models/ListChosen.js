function renderMenu(menuArr) {
  let htmlTabName = '';
  let htmlTabPane = '';
  const myTab = document.getElementById('myTab');
  const myTabContent = document.getElementById('myTabContent');
  menuArr.forEach(item => {
    htmlTabName += `
        <li class="nav-item" role="presentation">
          <button class="nav-link w-100" id="${item.tabName}" data-bs-toggle="tab" data-bs-target="#${item.tabName}-pane" type="button" role="tab" aria-controls="${item.tabName}-pane" aria-selected="false">${item.showName}</button>
        </li>
    `;
    htmlTabPane += `
        <div class="tab-pane fade row gy-2" id="${item.tabName}-pane" role="tabpanel" aria-labelledby="${item.tabName}" tabindex="0" data-item-type="${item.type}"></div>`;
  });
  myTab.innerHTML = htmlTabName;
  myTabContent.innerHTML = htmlTabPane;
  myTab.querySelector('.nav-item:first-child button').classList.add('active');
  myTabContent.querySelector('.tab-pane:first-child').classList.add('show','active');
}