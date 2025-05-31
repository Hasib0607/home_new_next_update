export function createBlurDataURL(width = 10, height = 10, color = '#d6d6d6') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'><rect width='${width}' height='${height}' fill='${color}'/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
