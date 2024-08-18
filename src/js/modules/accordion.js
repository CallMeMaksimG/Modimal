function accordion() {
  const btns = document.querySelectorAll('.mobile-links__parent-btn');

  btns.forEach(function(btn) {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.toggle('mobile-links__parent-btn--open');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
}

export default accordion;
