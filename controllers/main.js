let tabPanes = [];

promiseData.then((res) => {
  renderMenu(res.navPills);
  tabPanes = res.tabPanes;
  renderPane(tabPanes);
})
  .catch((err) => {
    console.log(err);
  });

function tryItem(type, id) {
  const pane = document.querySelector(`#renderModel div[data-item-type="${type}"]`);
  item = tabPanes.find(cloth => cloth.id == id);
  pane.style.backgroundImage = `url(${item.imgSrc_png})`;
}
