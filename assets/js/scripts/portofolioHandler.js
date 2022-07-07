async function fetchPortofolio() {
  try {
      const response = await fetch(`../../assets/json/portofolio.json`, {
          method: 'GET',
          credentials: 'same-origin'
      });
      const portofolio = await response.json();
      return portofolio;
  } catch (error) {
      console.error(error);
  }
}

function renderTile({ id, title, tags, image }) {
    const tileImage = document.createElement('img');
    tileImage.classList.add('block', 'object-cover', 'object-center', 'w-full', 'h-full', 'rounded-lg');
    tileImage.src = 'assets/' + image;

    const tileTitle = document.createElement('h3');
    tileTitle.classList.add('text-white', 'leading-none', 'mb-2');
    tileTitle.innerText = title;

    const tileTags = document.createElement('h4');
    tags.map(tag => {
        const tagBadge = document.createElement('span');
        tagBadge.classList.add('bg-white', 'bg-opacity-70', 'text-gray-800', 'text-xs', 'font-semibold', 'mr-1', 'px-2.5', 'py-0.5', 'rounded');
        tagBadge.innerText = tag;
        
        tileTags.append(tagBadge);
    });

    const tileTexts = document.createElement('div');
    tileTexts.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'h-full', 'text-center', 'px-5');
    tileTexts.append(tileTitle, tileTags);

    const tileMask = document.createElement('div');
    tileMask.classList.add('absolute', 'top-50', 'right-0', 'bottom-0', 'left-0', 'w-full', 'h-full', 'overflow-hidden', 'bg-fixed', 'bg-black', 'rounded-lg', 'bg-opacity-60', 'opacity-0', 'hover:opacity-100', 'ease-in', 'duration-200');
    tileMask.append(tileTexts);

    const tileLink = document.createElement('a');
    tileLink.href = '#detail-works-' + id;
    // tileLink.dataset.bsToggle = 'modal';
    // tileLink.dataset.bsTarget = '#exampleModalCenter';
    tileLink.append(tileMask);

    const tileInner = document.createElement('div');
    tileInner.classList.add('w-full', 'm-1', 'md:m-2', 'relative', 'overflow-hidden', 'drop-shadow-lg');
    tileInner.dataset.portofolioId = id;
    // tileInner.onclick = renderModal;
    tileInner.append(tileImage, tileLink);

    const tileContainer = document.createElement('div');
    tileContainer.classList.add('flex', 'flex-wrap', 'sm:w-1/2', 'md:w-1/3');
    tileContainer.append(tileInner);

    return tileContainer;
}

// function renderModal() {
//     const id = $(this).data("portofolio-id");
//     console.log(id);
// }
