/**
  Une contrainte particulière est à respecter ici :
  Au lieu de faire l’animation à l’aide de CSS, je vous demande de la réaliser à l’aide de JS. 

  Vous avez besoin pour cela d’appeler de façon récurrente, 60 fois par secondes, une fonction de dessin qui se contente de changer la valeur de l’offset. Pour appeler cette fonction,
 vous utiliserez " requestAnimationFrame " , qui sera une fonction souvent utilisée dans la suite du cours.
**/
/*
*/
/*
const svg = document.querySelector("svg");
const paths = svg.querySelectorAll('path');
function rerun(){
    for (const path of paths) {
        const length = path.getTotalLength();
        path.style.transition = 'none';
        path.style.strokeDasharray = `${length} ${length}`;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
        path.style.strokeDashoffset = 0;
        for(let i=0; i <= 4 ; i++){
            paths[i].addEventListener('transitionend', ()=>{
                paths[i].style.fill = 'black' ;
            })
        }
    }
}
rerun();*/
/*

const draw = {
    rerun(){
        this.svg = document.querySelector('svg');
        this.paths = Array.from(this.svg.querySelectorAll('path'));

        this.durations = this.paths.map(path => {
            const length = path.getTotalLength();
            path.style.transition = 'none';
            path.style.strokeDasharray = `${length} ${length}`;
            path.style.strokeDashoffset = length;
            path.style.transition = 'stroke-dashoffset 2s ease-in-out';
            path.style.strokeDashoffset = 0;
            return path.getTotalLength()
        })
        this.animate()
    },
    animate() {
        this.idAnimation = window.requestAnimationFrame(() => {
            if (false) {
                window.cancelAnimationFrame(this.idAnimation)
            }
            this.animate()
        })
    },
}
draw.rerun();
*/

function rerun() {
    const draw = {
        init() {
            this.svg = document.querySelector('svg');
            this.paths = Array.from(this.svg.getElementsByTagName('path'));

            this.durations = this.paths.map(path => {
                this.length = path.getTotalLength()
                path.style.transition = 'none';
                path.style.fill = 'none';
                path.style.strokeDashoffset = this.length;
                path.style.strokeDasharray = `${this.length} ${this.length}`;
            });
            this.animate();
            this.fill();
        },
        animate () {
            window.requestAnimationFrame(()=>{
                this.begin = 0;
                this.paths.forEach((path, i) => {
                    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
                    this.begin += this.durations[i] + 0.1;
                    path.style.strokeDashoffset = 0 ;
                })
            })

        },
        fill() {

            this.color = ["#FF4AFF", "#00FF62", "#FF66D0", "#FF00B1"];
            for(let i = 0 ; i <= 4 ; i++){
                this.paths[i].addEventListener('transitionend', ()=>{
                    this.paths[i].style.transition = 'fill 4s ease-in';
                    this.paths[i].style.fill = this.color[i];
                })
            }

        }
    }
    draw.init();
}
rerun();