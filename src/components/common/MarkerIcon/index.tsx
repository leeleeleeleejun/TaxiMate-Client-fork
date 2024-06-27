const MarkerIcon = (place: string) => {
  const content = place ? `${place} <span>도착</span>` : '도착';
  return `
    <div class="marker-icon-container">
      <div class="marker-content-box">
        ${content}
      </div>
      <div class="marker-bottom-triangle"></div>
    </div>
  `;
};

export default MarkerIcon;
