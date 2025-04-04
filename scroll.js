const rootElement = document.querySelector(":root");

function disableScroll(){
    topScroll = window.pageYOffset || document.documentElement.topScroll;
    leftScroll = window.pageXOffset || document.documentElement.leftScroll;

    window.onscroll = function(){
        window.scrollTo(topScroll, leftScroll);
    }
    
    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll(){
    window.onscroll = function(){}
    rootElement.style.scrollBehavior = 'smooth';
}

disableScroll();