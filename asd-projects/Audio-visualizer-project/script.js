const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const fileInput = document.getElementById('file-upload'); // Fixes your "File" error
const audio1 = document.getElementById('audio1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let audioSource;
let analyser;
let audioContext;

fileInput.addEventListener('change', function() {
    const files = this.files;
    
    if (files.length === 0) return;

    audio1.src = URL.createObjectURL(files[0]);
    audio1.load();
    audio1.play();
    
    setupVisualizer();
});

function setupVisualizer() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (!audioSource) {
        audioSource = audioContext.createMediaElementSource(audio1);
        analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
    }

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / bufferLength;

    function animate() {
        let x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < bufferLength; i++) {
            let barHeight = dataArray[i] * 1.7;
            
            ctx.shadowBlur = 27;
            ctx.shadowColor = 'red';
            ctx.fillStyle = `hsl(${i * 5}, 90%, 60%)`;
            ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
            
            x += barWidth;
        }
        requestAnimationFrame(animate);
    }
    animate();
}



// const container = document.getElementById('container');
// const fileInput = document.getElementById('file-upload');
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');

// // 1. Set canvas size
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let audio1 = new Audio();
// audio1.src = 'songs/Twighlight.wav';

// let audioSource;
// let analyser;
// let audioContext; // Declare it here

// container.addEventListener('click', function() {
//     // 2. Initialize AudioContext only after a user click
//     function setupVisualizer() {
//       if (!audioContext) {
//         audioContext = new (window.AudioContext || window.webkitAudioContext)();
//       }

//     // 3. Setup nodes (only if they don't exist yet)
//       if (!audioSource) {
//         audioSource = audioContext.createMediaElementSource(audio1);
//         analyser = audioContext.createAnalyser();
//         audioSource.connect(analyser);
//         analyser.connect(audioContext.destination);
//       }

//     // 4. Play audio and start animation
//     audio1.play();
    
//     analyser.fftSize = 128; // Increased slightly for better visuals
//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);
//     const barWidth = canvas.width / bufferLength;

//     function animate() {
//         let x = 0;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(dataArray);

//         for (let i = 0; i < bufferLength; i++) {
//             let barHeight = dataArray[i] * 1.7;
            
//             // Visual flair: Bright red/orange bars
//             ctx.shadowBlur = 15;
//             ctx.shadowColor = 'red';
//             ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
//             ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
            
//             x += barWidth;
//         }
//         requestAnimationFrame(animate);
//     }
//     animate();
// });

// file.addEventListener('change', function() {
//    console.log('this.files');
// });


