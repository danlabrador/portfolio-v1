// -----------------------------------------------------------------------------

function addSkill(skill, faIcon, xp, edu=-1, badge1, badge2, badge3){
    const skillsContainer = document.getElementById('skills');

    let badgeA, badgeB, badgeC, eduBar;
    badge1 ? badgeA='block' : badgeA='none';
    badge2 ? badgeB='block' : badgeB='none';
    badge3 ? badgeC='block' : badgeC='none';
    edu===-1 ? eduBar='none' : eduBar='block';

    skillsContainer.innerHTML += `
        <div class="skill col-span-2">
            <div class="icons">
                <i class="skill-icon ${faIcon}"></i>
                <div class="badges">
                    <a class="codecademy-badge" href="${badge1}"><img src="./resources/img/skills-container/codecademy-badge.svg" alt="Codecademy Badge" style='display:${badgeA}'></a>

                    <a class="codecademy-badge" href="${badge2}"><img src="./resources/img/skills-container/codecademy-badge.svg" alt="Codecademy Badge" style='display:${badgeB}'></a>

                    <a class="codecademy-badge" href="${badge3}"><img src="./resources/img/skills-container/codecademy-badge.svg" alt="Codecademy Badge" style='display:${badgeC}'></a>
                </div>
            </div>

            <h3 class="skill-text">${skill}</h3>

            <div class="education progress-bar" style="display:${eduBar}">
                <div class="progress-percent"></div>
                <div class="progress-peg noselect">${edu}%</div>
            </div>

            <div class="experience progress-bar">
                <div class="progress-percent"></div>
                <div class="progress-peg noselect">${xp}%</div>
            </div>

        </div>
    `;
}


// skill, faIcon, xp, edu=-1, badge1=false, badge2=false, badge3=false
addSkill('HTML 5', 'fab fa-html5', 65, 100, 'https://www.codecademy.com/profiles/daniellabrador_/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7');

addSkill('CSS 3', 'fab fa-css3-alt', 55, 53, 'https://www.codecademy.com/profiles/daniellabrador_/certificates/9a5bb1fc45b4281af1fffec93b0aaf05', 'https://www.codecademy.com/profiles/daniellabrador_/certificates/3a62023b0054dc793edc0adecd715fd7');

addSkill('Sass', 'fab fa-sass', 30, 100, 'https://www.codecademy.com/profiles/daniellabrador_/certificates/eb1ffda40f347629dcef6de33d3f9741');

addSkill('JavaScript', 'fab fa-js', 45, 64, 'https://www.codecademy.com/profiles/daniellabrador_/certificates/705dcb15de0da4dd9d9fc4f3274b430e');

addSkill('Node.js', 'fab fa-node-js', 35, 17);

addSkill('Python 3', 'fab fa-python', 20, 18);

addSkill('C++', 'fas fa-laptop-code', 35, 100, 'https://www.codecademy.com/profiles/daniellabrador_/certificates/b74a2390dfc4127fa5d43fe147425ad0');

addSkill('Git', 'fab fa-git-alt', 40, 44);

addSkill('GitHub', 'fab fa-github', 20, 100, "https://www.codecademy.com/profiles/daniellabrador_/certificates/358e250fca144526a6b2934ff44fbc01");

addSkill('Photoshop', 'fas fa-file-image', 75, -1);

addSkill('Premiere Pro', 'fas fa-file-video', 60, -1);

addSkill('Illustrator', 'fas fa-bezier-curve', 55, -1);

addSkill('WordPress', 'fab fa-wordpress', 40, -1);

addSkill('Figma', 'fab fa-figma', 25, -1);

// addSkill('React', 'fab fa-react', 10, -1);

// addSkill('Redux', 'fas fa-laptop-code', 10, -1);

// addSkill('Express.js', 'fas fa-laptop-code', 10, -1);

// addSkill('SQL', 'fas fa-laptop-code', 10, -1);







// Progress bar for skill progress bar -----------------------------------------

const progressPeg = document.getElementsByClassName('progress-peg');
const progressPercent = document.getElementsByClassName('progress-percent');

for(let i=0; i<progressPeg.length; ++i){
    let progress = progressPeg[i].textContent;
    progressPeg[i].style.left = `calc(${progress} - .75em)`;
    progressPercent[i].style.width = `${progress}`;
}