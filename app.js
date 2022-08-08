const video = document.getElementById('video');
const btn = document.getElementById('btn');

// To Select media stream, pass it to the video and play
async function selectMediaStream () {
    try {
        const media = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = media;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        // Catches an error if any
        console.log(`Error: ${error}`);
    }
}

btn.addEventListener('click', async () => {
    // Disable Button
    btn.disabled = true;
    // Start Picture In Picture
    await video.requestPictureInPicture();
    // Reset the button
    btn.disabled = false;
});

// On Load
selectMediaStream();