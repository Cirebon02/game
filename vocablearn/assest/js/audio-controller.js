
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const volumeSlider = document.getElementById("volume-slider");

    if (audio) {
        // Set posisi musik sebelumnya
        if (localStorage.getItem("musicTime")) {
            audio.currentTime = parseFloat(localStorage.getItem("musicTime"));
        }

        // Set volume
        if (localStorage.getItem("musicVolume")) {
            audio.volume = parseFloat(localStorage.getItem("musicVolume"));
            if (volumeSlider) volumeSlider.value = audio.volume;
        }

        // Mainkan jika sebelumnya belum pause
        if (localStorage.getItem("musicPaused") === "false") {
            audio.play().catch(() => {
                console.log("Autoplay diblokir. Menunggu interaksi pengguna.");
            });
        }

        // Simpan posisi dan status
        setInterval(() => {
            localStorage.setItem("musicTime", audio.currentTime);
            localStorage.setItem("musicPaused", audio.paused);
        }, 500);
    }

    // Kontrol manual (jika ada)
    if (volumeSlider) {
        volumeSlider.addEventListener("input", function () {
            if (audio) {
                audio.volume = this.value;
                localStorage.setItem("musicVolume", this.value);
            }
        });
    }

    if (playBtn) {
        playBtn.addEventListener("click", () => {
            audio?.play();
            localStorage.setItem("musicPaused", "false");
        });
    }

    if (pauseBtn) {
        pauseBtn.addEventListener("click", () => {
            audio?.pause();
            localStorage.setItem("musicPaused", "true");
        });
    }

    // Tombol menu opsional
    const menuBtn = document.getElementById("menu-btn");
    const optionsBtn = document.getElementById("options-btn");

    menuBtn?.addEventListener("click", () => {
        document.getElementById("menu-dropdown")?.classList.toggle("hidden");
    });

    optionsBtn?.addEventListener("click", () => {
        document.getElementById("options-panel")?.classList.toggle("hidden");
    });
});
