const AudioOscillator = (frequency, volume, type, length) => {
  setTimeout(()=> {
    let aX = new AudioContext;
    const oscillator = aX.createOscillator();
    const gainNode = aX.createGain();
    oscillator.frequency.value = frequency ?? 440;
    oscillator.type = type ?? "square";
    gainNode.gain.value = volume ?? 0.5;
    oscillator.connect(gainNode);
    gainNode.connect(aX.destination);
    oscillator.start();
    console.log("playing");
    setTimeout(()=>{oscillator.stop(); console.log("puased")}, (length * 1000 ?? 1000));
  }, 10)
}