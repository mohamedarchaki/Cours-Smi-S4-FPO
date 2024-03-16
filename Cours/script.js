/*=================================
=======  afficher menu     ========
===================================*/
let btnOpn = document.querySelector(".menu-btn");
let btnSpan = document.getElementById("menu-span"); 
btnOpn.addEventListener("click", () => {
    handleMenu(document.getElementById("menu")); 
});
/*================call function====================*/
function handleMenu(active) { 
    active.classList.toggle("sm:translate-x-1/2");
    btnSpan.innerText = (btnSpan.innerText === "menu") ? "close" : "menu";
}

/*=================================
=======  use Scroll div    ========
===================================*/
function ScrollList(cour_list,left_btn,right_btn){
left_btn.addEventListener("click", () =>{
    cour_list.scrollLeft-= (window.innerWidth >=767)? 480 : 256
})
right_btn.addEventListener("click", () =>{
        cour_list.scrollLeft+= (window.innerWidth >=767)? 480 : 256
        
})
}
ScrollList(document.querySelector(".cour_list"),
            document.querySelector(".left_btn"),
            document.querySelector(".right_btn"),
)
ScrollList(document.querySelector(".cour_list1"),
            document.querySelector("#left_btn1"),
            document.querySelector("#right_btn1"),
)
/*=================================
======= liste coure and TD ========
===================================*/

let modules = [
    {
        "title":"Électromagnétisme dans le Vide",
        "text":"Prof: Youssef HADDOUT <br> Filière : SMI (S4) <br>2020-2021 ",
        "image":'haddout.png',
        "Cours": [
                {
                    'chapiter':'Chapitre 1',
                    'link':'Chapitre 1 SMI S4 HADDOUT.pdf'
            },
            {
                'chapiter':'Chapitre 2',
                'link':'Chapitre 2 SMI S4 HADDOUT.pdf'
            },
        ],
        
        },
    {
            "title":"Architecure des ordinateurs",
            "text":"Prof: Bouain Abdelhadi <br>Filière : SMI (S4) <br>2023-2022 ",
            "image":'Architecure des ordinateurs.png',
            "Cours": [
                    {
                        'chapiter':'Architecure des ordinateurs',
                        'link':'Architecure des ordinateurs BOUDHANE 2022 .pdf'
                },
                
            ],
            
        },
    {
                "title":"Programmation II ",
                "text":"Prof: OMARI Kamal <br> Filière : SMI (S4) <br>2023-2024 ",
                "image":'Programmation II.png',
                "Cours": [
                        {
                            'chapiter':'Chapitre 1',
                            'link':'Programmation II 2024 Chapitre 1.pdf'
                    },
                    
                ],
                
        },
    {
                    "title":"Structure de donnee  ",
                    "text":"Prof: Abdelhadi Bouain <br> Filière : SMI (S4) <br>2021 ",
                    "image":'Structure de donnee.png',
                    "Cours": [
                            {
                                'chapiter':'Chapitre 1',
                                'link':'Structure de donnee  Chapitre 1.pdf'
                        },{
                            'chapiter':'Chapitre 2',
                            'link':'Structure de donnee  Chapitre 2.pdf'
                    },
                    {
                        'chapiter':'Chapitre 3',
                        'link':'Structure de donnee  Chapitre 3.pdf'
                    },
                    {
                        'chapiter':'Structures et fonctions',
                        'link':'Structures et fonctions.pdf'
                    },
                        
                    ],
                    
        },
    {
            "title":"SYSTÈME D'EXPLOITATION ",
            "text":"Prof: Dbibih Imane <br> Filière : SMI (S4) <br>2019-2020 ",
            "image":'SYSTEME D EXPLOITATION.png',
            "Cours": [
                    {
                        'chapiter':'Partie 1',
                        'link':'Systèmes d’exploitation II Partie1.pdf'
                },{
                    'chapiter':'Partie 2',
                    'link':'Systèmes d’exploitation II Partie2.pdf'
            },
            {
                'chapiter':'Partie 3',
                'link':'Systèmes d’exploitation II Partie2.pdf'
            },
            {
                'chapiter':'Partie 4',
                'link':'Systèmes d’exploitation II Partie4.pdf'
            },
                
            ],
            
        },
]
let TDs = [
    {
        "title":"Électromagnétisme dans le Vide",
        "text":"Prof: Youssef HADDOUT <br> Filière : SMI (S4) <br>2020-2021 ",
        "image":'haddout.png',
        "Cours": [
                {
                    'chapiter':'Td serie 1',
                    'link':'TD  1 SMI S4 HADDOUT.pdf'
            },
            {
                'chapiter':'Td serie 2',
                'link':'TD  2 SMI S4 HADDOUT.pdf'
            },
        ],
        
        },
    {
        "title":"Architecure des ordinateurs",
        "text":"Prof: Bouain Abdelhadi <br>Filière : SMI (S4) <br>2023-2022 ",
        "image":'Architecure des ordinateurs.png',
        "Cours": [
                    
                
            ],
            
        },
    {
                "title":"Programmation II  ",
                "text":"Prof: KRIT Salahddine <br> Filière : SMI (S4) <br>2020-2021 ",
                "image":'Programmation II.png',
                "Cours": [
                        {
                        'chapiter':'Tp serie 1',
                        'link':'TP 1 Programmation II corrections.pdf'
                    },
                        {
                            'chapiter':'Tp serie 2',
                            'link':'TP 2 Programmation II corrections.pdf'
                    },
                    {
                        'chapiter':'Tp serie 3',
                        'link':'TP 3 Programmation II corrections.pdf'
                    },
                    {
                        'chapiter':'TPs serie 4',
                        'link':'TP 4 Programmation II corrections.pdf'
                    },
                    
                ],
                
        },
    {
                "title":"Structure de donnee  ",
                "text":"Prof: Abdelhadi Bouain <br> Filière : SMI (S4) <br>2021 ",
                "image":'Structure de donnee.png',
                "Cours": [
                            {
                                'chapiter':'TPs serie 3',
                                'link':'Structure de donnee TP3.pdf'
                        },{
                            'chapiter':'TPs serie 4',
                            'link':'Structure de donnee TP4.pdf'
                    }
                        
                    ],
                    
        },
    {
            "title":"SYSTÈME D'EXPLOITATION ",
            "text":"Prof: Dbibih Imane <br> Filière : SMI (S4) <br>2019-2020 ",
            "image":'SYSTEME D EXPLOITATION.png',
            "Cours": [
                    {
                        'chapiter':'Tds serie 1',
                        'link':'TD1 Systèmes d’exploitation II.pdf'
                },
                {
                    'chapiter':'Tds serie 2',
                    'link':'TD2 Systèmes d’exploitation II.pdf'
                },
                {
                    'chapiter':'TPs serie 1',
                    'link':'TP1 Systèmes d’exploitation II.pdf'
            },
            {
                'chapiter':'TPs serie 2',
                'link':'TP2 Systèmes d’exploitation II.pdf'
            },
                
                
            ],
            
        },
]
/*=================================
=======function Affichher tab======
===================================*/
function AfficherTab(divList,listes,typeLs){
    let i=0;
    for(modul of listes ){
        divList.innerHTML+=
        ` <div class="box">
            <div class="img">
                <img src="Cours/img/${modul.image}" alt="">
            </div>
            <p>${modul.text}</p>
            <button class="leading-[0]" onclick="callafficher${typeLs}(${i})">
                <span class="material-symbols-outlined leading-[0]">
                    download
                </span>
            </button>
        </div>
        `
        i++
    }
}
let CoursListe = document.querySelector(".list")
let tdListe = document.querySelector(".listTd")
/*================call function====================*/
AfficherTab(CoursListe,modules,"Cour")
AfficherTab(tdListe,TDs,"td")

/*=================================
=====afficher liste cour & td======
===================================*/
let  afficherDiv =document.querySelector(".afficher-div")
function afficherCour(i,listes){
    afficherDiv.innerHTML+=
    `
    <div class="afficher z-40 rounded-md fixed text-withbg grid grid-cols-2 sm:grid-cols-1 top-6 left-1/2 shadow  w-10/12 h-5/6 -translate-x-1/2">
        <div class="clos absolute right-2 text-zinc-800 sm:text-withbg text-xl top-2 cursor-pointer">
            <span class="material-symbols-outlined">
                close
            </span></div>
        <div id="box" class="container rounded-md rounded-br-none rounded-tr-none bg-redColorHovr mx-auto p-5 border-solid border-2  border-withbg ">
        <h1 class="text-withbg text-xl">${listes[i].title} :</h1>
        
        </div>
        <div  class="h-full bg-white rounded-md rounded-bl-none rounded-tl-none border-solid border-2 border-l-stone-700  border-l-0 sm:hidden">
            <img src="Cours/img/${listes[i].image}" alt="">
        </div>
    </div>
    `
    afficherChapit(i,listes)
    let closeAffich = document.querySelector(".clos")
closeAffich.addEventListener('click',()=>{
    afficherDiv.innerHTML=""
})
}
/*================call function====================*/
function callafficherCour(i){
    afficherCour(i,modules)
}
function callaffichertd(i){
    afficherCour(i,TDs)
}
/*=================================
=====  Open fill chp || td   ======
===================================*/
function afficherChapit(i,listes){
    let box = document.getElementById('box')
    let chapts =listes[i].Cours
    for(chap of chapts){
        box.innerHTML+=
        `
        <div  class="box flex relative rounded-md p-2 bg-withbg items-center space-x-2 mt-3">
            
            <h1 class=" text-zinc-800 text-lg max-w-[80%]">${chap.chapiter}</h1>
            <a href="Cours/listeCours/${chap.link}" download="${chap.link}" target="_blank" class=" bg-redColorHovr absolute right-2 text-withbg py-3 mt-0 px-3 h-fit rounded-sm leading-[0] text-xl">
                <span class="material-symbols-outlined leading-[0]">
                download
                </span>
            </a>
            </div>
        `
    }
}

/*=================================
=====  botten header coure   ======
===================================*/
let btnHead = document.querySelectorAll(".btnHead");

btnHead[0].onclick=function(){
    for(btn of btnHead){
        btn.classList.remove('is-active')
    }
    this.classList.add('is-active')
    document.querySelector(".Cours").classList.remove("hidden")
    document.querySelector(".td").classList.remove("hidden")
}
btnHead[1].onclick=function(){
    for(btn of btnHead){
        btn.classList.remove('is-active')
    }
    this.classList.add('is-active')
    document.querySelector(".Cours").classList.remove("hidden")
    document.querySelector(".td").classList.add("hidden")
}
btnHead[2].onclick=function(){
    for(btn of btnHead){
        btn.classList.remove('is-active')
    }
    btnHead[2].classList.add('is-active')
    document.querySelector(".Cours").classList.add("hidden")
    document.querySelector(".td").classList.remove("hidden")
}

emailList=[
        {
            "name":'A.El Mouatasim',
            'adrris_email':'a.elmouatasim@uiz.ac.ma'
        },
        {
            "name":'I.Eljaafari',
            'adrris_email':'eljaafari.ilyas@gmail.com'
        },
        {
            "name":'I.Dbibih',
            'adrris_email':'imane.it@gmail.com'
        },
        {
            "name":'M.Boudhane',
            'adrris_email':'mrboudhane@gmail.com'
        },
        {
            "name":'J.Oudaani',
            'adrris_email':'oudaani1970@gmail.com'
        },
        {
            "name":'A.Ellahyani',
            'adrris_email':'a.elahyani@uiz.ac.ma'
        },
        {
            "name":'A.Bouain',
            'adrris_email':'abdelhadi008@gmail.com'
        },
        {
            "name":'R.Dakir',
            'adrris_email':'r.dakir@uiz.ac.ma'
        },
        {
            "name":'M.Laraqui',
            'adrris_email':'laraquimed@gmail.com'
        },
]

function AfficherEmail(){
    boxEmail = document.querySelector(".box_email")
    for(email of emailList){
        boxEmail.innerHTML+=`
        <div class="box flex justify-between px-3 items-center bg-white  rounded-md py-2">
                <p class="text-[#333] capitalize font-bold text-xl tracking-widest sm:text-[1.15rem]">${email.name}</p>
                <div class="email_ink w-14 h-10 flex justify-center items-center  rounded-md text-withbg bg-redClolor">
                <a href="mailto:${email.adrris_email}" target="_blank">
                    <span class="material-symbols-outlined text-3xl sm:text-[24px]">
                        forward_to_inbox
                    </span>
                    </a>
                </div>
        </div>
        `

    }
}
AfficherEmail()