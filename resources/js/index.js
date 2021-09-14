// Mobile Menu -----------------------------------------------------------------
const mobileNav = document.getElementById('mobile-nav');

const mobileMenuOpen = document.getElementById('mobile-menu-open');
mobileMenuOpen.addEventListener('click', function(){
    mobileNav.style.right = 0;
});

const mobileMenuClose = document.getElementById('mobile-menu-close');
mobileMenuClose.addEventListener('click', function(){
    mobileNav.style.right = '-100%';
});


// Roadmap grid box positioning and design -------------------------------------

// Alternate box positioning to grid: right and left
const milestoneBox = document.getElementsByClassName('milestone-box');
for (let i=0; i<milestoneBox.length; ++i){
    if (i%2==1){
        milestoneBox.item(i).className += ' milestone-box-left';
    } else if (i%2==0){
        milestoneBox.item(i).className += ' milestone-box-right';
    }
}

const milestoneBoxR = document.getElementsByClassName('milestone-box-right');
for(let i=0; i<milestoneBoxR.length; ++i){
    milestoneBoxR.item(i).style.gridRowStart = 2*i+1;
}

const milestoneBoxL = document.getElementsByClassName('milestone-box-left');
for(let i=0; i<milestoneBoxL.length; ++i){
    milestoneBoxL.item(i).style.gridRowStart = 2*i+2;
}

// Increase line before milestoneBtn
milestoneBox.item(milestoneBox.length-1).style.paddingBottom = '3.75em';

const milestoneBtn = document.getElementById('milestone-button');
milestoneBtn.style.gridRowStart = milestoneBox.length+1;