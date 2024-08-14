function openSlider() {
    console.log('openSlider function called');
    document.getElementById("slidingDiv").classList.add("open");
    document.getElementById("overlay").classList.add("open");
}

function toggleSlidingDiv() {
    console.log('toggleSlidingDiv function called');
    document.getElementById("slidingDiv").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
}
