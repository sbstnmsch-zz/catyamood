
window.onload = () => {
  const
    VISIBLE = 'u-visible';

  let
    // Change this to your firebase app url
    firebase = new window.Firebase('https://catyamood.firebaseio.com/mood'),
    moods = ['happy', 'sober', 'grumpy'],
    $ua = window.navigator.userAgent.toLowerCase(),
    $find = (e) => { return window.document.querySelector(e); };

  if ($ua.match(/.*(android|iphone|ipad).*/)) {
    // App section

    $find('.catyamood-app').classList.add(VISIBLE);

    moods.forEach((mood) => {
      $find(`.catyamood-app-${mood}`).onclick = () => {
        firebase.set({value: mood});
      };
    });

  } else {
    // Host section

    let
      audios = moods.map((mood) => {
        return { name: mood, audio: new Audio(`assets/sounds/${mood}.wav`) };
      }),
      moodElements = moods.map((mood) => {
        return $find(`.catyamood-host-${mood}`);
      });

    $find('.catyamood-host').classList.add(VISIBLE);

    firebase.set({value: 'none'}, () => {
      firebase.on('child_changed', (snapshot) => {
        let
          currentMood = snapshot.val(),
          currentMoodElement = $find(`.catyamood-host-${currentMood}`);

          moodElements.forEach((moodElement) => {
            moodElement.classList.remove(VISIBLE);
          });

        if (currentMoodElement) {
          currentMoodElement.classList.add(VISIBLE);
          audios.find(x => x.name === currentMood).audio.play();
        }

      });
    });
  }
};
