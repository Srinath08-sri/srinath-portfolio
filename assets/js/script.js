const words = [
    "Java Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        currentWord.substring(0,j++);

        if(j > currentWord.length){
            isDeleting = true;
            setTimeout(type,1200);
            return;
        }

    }else{

        document.getElementById("typing").textContent =
        currentWord.substring(0,j--);

        if(j==0){
            isDeleting=false;
            i++;

            if(i==words.length){
                i=0;
            }
        }
    }

    setTimeout(type,isDeleting?60:100);
}

type();