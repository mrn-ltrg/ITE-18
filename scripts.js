let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
}

const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", null);
}

if (lightmode === "active") enableLightmode();

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem("lightmode");
    lightmode !== "active" ? enableLightmode() : disableLightmode();
});

document.addEventListener('DOMContentLoaded', () => {
  const editButtons = document.querySelectorAll('.edit-btn');

  editButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.section');
      const editableElements = section.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, li, span, div, address'
      );
      const isEditing = button.getAttribute('aria-pressed') === 'true';

      if (!isEditing) {
    
        editableElements.forEach(el => {
          el.setAttribute('contenteditable', 'true');
          el.classList.add('editable');
        });
        button.textContent = 'Save';
        button.setAttribute('aria-pressed', 'true');
      } else {
        
        editableElements.forEach(el => {
          el.removeAttribute('contenteditable');
          el.classList.remove('editable');
        });
        button.textContent = 'Edit';
        button.setAttribute('aria-pressed', 'false');

        console.log(`Updated content for section: ${section.id}`);
        console.log(section.innerHTML);
      }
    });
  });
});
