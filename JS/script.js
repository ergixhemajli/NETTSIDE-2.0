/* On load function, calling stylePage() */
window.onload=function(){
  stylePage()
}

/* Highlighting the current page on the Navigation bar */
function stylePage(){
  const name = getPage(window.location.href)
  const current = document.getElementById(name)
  if (current != null){
    current.style.textDecoration = "underline"
  }
}

/* Returns the name of the page currently active */
function getPage(href){
  const split = href.split('/')
  const name = split[split.length - 1].split('.')
  return name[0]
}

/* Turns the menu-button (three stacked lines) into a dropdown menu on a mobile screen */
function responsiveMenu() {
    const nav = document.getElementById("navigation")
    if (nav.className === "navBar") {
      nav.className += " responsive"
    } 
    else {
      nav.className = "navBar"
    }
}

/* Shows the video controls on mouse hover */
function videoControls() {
    for (const videoElement of document.querySelectorAll('#M1, #M2, #M3')) {
      videoElement.addEventListener('mouseover', () => { 
        videoElement.controls = 'controls'
    })
      videoElement.addEventListener('mouseout', () => { 
        videoElement.controls = false 
    })
    }
  }
  window.addEventListener('load', videoControls, false)

/* Toggles the sound of the showreel on the home page on or off */
function showreelSound(){
  const showreel = document.getElementById("showreel")
  const button = document.getElementById("sound")
  if (button.className === "muted"){
    button.style.backgroundImage = "url(ICONS/Unmute.png)"
    showreel.muted = false
    button.className = "unmuted"
  } 
  else {
    button.style.backgroundImage = "url(ICONS/Mute.png)"
    showreel.muted = true
    button.className = "muted"
  }
}