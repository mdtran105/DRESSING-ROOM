function renderPane(itemArr) {
  const paneDiv = document.querySelectorAll('#myTabContent .tab-pane');

  paneDiv.forEach(pane => {
    const itemsOfPane = itemArr.filter( item => item.type === pane.dataset.itemType);

    itemsOfPane.forEach((item) => {
      let htmlItem = `
          <div class="col-4 col-sm-3 item px-5 py-3">
              <figure class="">
                <img src="${item.imgSrc_jpg}" alt="${item.name}" class="img-fluid d-block m-auto">
                <figcaption class="text-center">${item.name}</figcaption>
              </figure>
              <button onclick="tryItem('${item.type}','${item.id}')" class="btn btn-outline-warning w-100">Thử đồ</button>
          </div>`;
      pane.insertAdjacentHTML('beforeend', htmlItem)
    });

  })
  
}

