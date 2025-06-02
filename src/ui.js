export function updateTextContent(element, content) {
  element.textContent = content;
}

export function updateTextColor(element, status) {
  if(status === "correct") {
    element.style.color = '#39FF14';
  } else if (status === 'incorrect') {
    element.style.color = '#FF3131';
  } else {
    element.style.color = '#fffffb';
  }
}