const lagu = [
    ["Kuning", "rumahsakit", "363K", "15K", "cover/kuning.png", "audio/kuning.mp3"],
    ["Tarot", ".Feast", "574K", "28K", "cover/tarot.png", "audio/tarot.mp3"],
    ["luther", "Kendrick Lamar, SZA", "230M", "34M", "cover/luther.png", "audio/luther.mp3"],
    // ["Serana"]
  ];

  const konten = document.getElementById("isi");
  let currentAudio = null;
  let currentButton = null;

  for (let i = 0; i < lagu.length; i++) {
    const judul = lagu[i][0];
    const musisi = lagu[i][1];
    const like = lagu[i][2];
    const diputar = lagu[i][3];
    const cover = lagu[i][4];
    const audioSrc = lagu[i][5];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${cover}" alt="${judul}" class="album-cover">
    <div class="judul">${judul}</div>
    <div class="penyanyi">${musisi}</div>
    <div class="info">
      <span><i>👍</i>${like}</span>
      <span><i>🎵</i>${diputar}</span>
    </div>
  `;


// ------------ AI AREAA ----------- //
    
    const audio = document.createElement("audio");
    audio.src = audioSrc;

    const button = document.createElement("button");
    button.className = "play-button";
    button.innerText = "▶";

    button.addEventListener("click", () => {
      // Hentikan lagu lain
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) currentButton.innerText = "▶";
      }

      if (audio.paused) {
        audio.play();
        button.innerText = "⏸";
        currentAudio = audio;
        currentButton = button;
      } else {
        audio.pause();
        button.innerText = "▶";
      }
    });
//----------- AI AREAA --------------//

    card.appendChild(button);
    card.appendChild(audio);
    konten.appendChild(card);
  }


