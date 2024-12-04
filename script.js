function showDetails(shoeName) {
  const detailsSection = document.getElementById('details');
  const shoeNameElement = document.getElementById('shoe-name');
  shoeNameElement.textContent = `Focicipő: ${shoeName}`;
  detailsSection.classList.remove('hidden');
}

function hideDetails() {
  const detailsSection = document.getElementById('details');
  detailsSection.classList.add('hidden');
}