var isPlayed = false;

function fake_crush(){ 
        var all_elements = document.body.getElementsByTagName("*"); 
        var original_HTML = document.body.innerHTML; 
        var all_elements_clones = []; 
        for (var i=0; i < all_elements.length; i++) 
            all_elements_clones[i] = all_elements[i].cloneNode(true); 
    
        document.body.innerHTML = ""; 
        for (i=0; i <all_elements_clones.length; i++) 
            document.body.appendChild(all_elements_clones[i]); 
    
        all_elements_new = document.body.getElementsByTagName("*"); 
        for(i=0; i< all_elements_new.length;i++) 
        { 
            all_elements_new[i].style.left = Math.ceil(Math.random()*100) + '%'; 
            all_elements_new[i].style.top = Math.ceil(Math.random()*100) + '%'; 
            all_elements_new[i].style.zIndex = Math.ceil(Math.random()*100).toString(); 
            all_elements_new[i].style.position = 'absolute'; 
        } 
    
        setTimeout(function(){fake_crush_remove(original_HTML)}, 14500); 
}

function fake_crush_remove(original_HTML) { 
    document.body.innerHTML = original_HTML; 
    activateRainbow();
    thankYou();
} 

function activateRainbow(){
    var element = document.getElementById("information");
    element.classList.add("rainbow-bg");
}

function thankYou(){
    alert('Thank you!');
    window.document.title = "Thank you!";
}

function updatePictures(){
    var avatar = document.getElementById("avatar");
    var l1 = document.getElementById("l1");
    var l2 = document.getElementById("l2");
    var l3 = document.getElementById("l3");
    setTimeout(function(){avatar.style.backgroundImage = "url(img2/img-profile.jpg)"}, 7000);
    setTimeout(function(){l1.setAttribute('src', 'img2/portfolio-1.jpg')}, 15000);
    setTimeout(function(){l2.setAttribute('src', 'img2/portfolio-2.jpg')}, 30000);
    setTimeout(function(){l3.setAttribute('src', 'img2/portfolio-3.jpg')}, 37000);
}

function showtime(){
    if(isPlayed == false)
    {
        isPlayed = true;
        var hall_music = new Audio("In The Hall Of The Mountain King.mp3"); 
        hall_music.play(); 
        updatePictures();
        setTimeout(fake_crush, 45500);
    }
}