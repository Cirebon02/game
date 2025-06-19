
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <style>
      #navbar {
        position: fixed;
        top: 10px;
        right: 20px;
        z-index: 9999;
      }

      .menu-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: white;
      }

      .dropdown {
        display: none;
        position: absolute;
        top: 35px;
        right: 0;
        background-color: #ffffff;
        color: black;
        min-width: 160px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        padding: 10px;
        border-radius: 8px;
      }

      .dropdown a {
        display: block;
        padding: 8px;
        text-decoration: none;
        color: black;
      }

      .dropdown a:hover {
        background-color: #eee;
      }

      .options-content {
        margin-top: 10px;
      }

      .volume-slider {
        width: 100%;
      }

      .author {
        margin-top: 8px;
        font-size: 12px;
        text-align: center;
      }
    </style>

    <div id="navbar">
      <button class="menu-button" id="menu-btn">⋮</button>
      <div class="dropdown" id="menu-dropdown">
        <a href="#index">Beranda</a>
        <a href="#menu">Menu</a>
        <a href="#setting">Pengaturan</a>
        <a href="#" id="options-toggle">Options</a>
        <div class="options-content" id="options-content" style="display:none;">
          <label for="volume">Volume Musik:</label>
          <input type="range" min="0" max="1" step="0.01" value="1" id="volume" class="volume-slider">
          <div class="author">Create by Moh Wildan Safriansyah</div>
        </div>
      </div>
    </div>
  `;

  const menuBtn = document.getElementById("menu-btn");
  const menuDropdown = document.getElementById("menu-dropdown");
  const optionsToggle = document.getElementById("options-toggle");
  const optionsContent = document.getElementById("options-content");
  const volumeSlider = document.getElementById("volume");

  menuBtn.onclick = () => {
    menuDropdown.style.display = menuDropdown.style.display === "block" ? "none" : "block";
  };

  optionsToggle.onclick = (e) => {
    e.preventDefault();
    optionsContent.style.display = optionsContent.style.display === "block" ? "none" : "block";
  };

  const savedVolume = localStorage.getItem("musicVolume");
  if (savedVolume !== null) {
    volumeSlider.value = savedVolume;
    const audio = document.getElementById("bg-music");
    if (audio) audio.volume = savedVolume;
  }

  volumeSlider.oninput = () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = volumeSlider.value;
      localStorage.setItem("musicVolume", volumeSlider.value);
    }
  };
});
