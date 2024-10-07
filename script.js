const texts = [
    "DEVELOPER",
    "PROGRAMMER",
    "FREELANCER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

function resetTab() {
    // Get all tabs and panes
    const tabs = document.querySelectorAll('.nav-link');
    const panes = document.querySelectorAll('.tab-pane');
  
    // Remove 'active' class from all tabs and panes
    tabs.forEach(tab => tab.classList.remove('active'));
    panes.forEach(pane => pane.classList.remove('active'));
    
  
    // Optionally, set a specific tab as active again
    //const defaultTab = document.querySelector('[data-target="tab3Id"]');
    const defaultTab = document.querySelector('#qwe');
    //const defaultPane = document.getElementById('tab3Id');
    
    // Add 'active' class to default tab and pane
     if (defaultTab) defaultTab.classList.add('active');
    // if (defaultPane) defaultPane.classList.add('active');

  }

  const container = document.querySelector('.top');

  container.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default vertical scrolling
    container.scrollLeft += event.deltaY; // Scroll horizontally
  });