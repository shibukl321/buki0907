
(() => {
  const bannerImg = document.getElementById('bannerImg');
  const bannerLink = document.getElementById('bannerLink');
  const toggle = document.getElementById('toggleBanner');
  if (bannerImg && bannerLink && toggle) {
    let flip = false;
    toggle.addEventListener('click', () => {
      flip = !flip;
      bannerImg.src = flip
        ? 'https://picsum.photos/1200/360?random=102'
        : 'https://picsum.photos/1200/360?random=101';
      bannerLink.href = '#';
    });
  }
})();
