document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  const now = new Date().toISOString();
  if (timestamp) timestamp.value = now;

  const modalLinks = document.querySelectorAll('.modal-link');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-modal');
      document.getElementById(target).style.display = 'block';
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
});
