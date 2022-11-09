

const path = './Content/';
let xhttp = new XMLHttpRequest();
let imgurls = [];

// fetch image names from server
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 & this.status == 200) {
        imgurls = JSON.parse(xhttp.responseText)
        main();
        }
    }

xhttp.open('GET', 'list.php');
xhttp.send();

function main() {

    const container = document.getElementById('container');
    
    // for each image create an img tag
    for (const i of imgurls) {
        
        // filter out jpg files
        if (!i.toLowerCase().endsWith('.jpg'))
        continue;
        
        let tag = document.createElement('img');
        tag.src = path + i;
        container.appendChild(tag);
    }
    
    //
    // schedule the switching of images
    
    let slideIndex = 0;
    //let slides = document.querySelectorAll('img');
    let slides = document.getElementsByTagName('img');
    
    window.setInterval(function () {
        
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        //scroll to acive image
        slides[slideIndex].scrollIntoView(false);
        
    }, 15000);
    
}