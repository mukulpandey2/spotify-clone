let songElement = new Audio('songs/0.mp3');
let rangeBar = document.getElementById("rangeBar");
let masterplay = document.getElementById("masterplay");
let songTimeStart = document.getElementById("songTimeStart");
let songTimeEnd = document.getElementById("songTimeEnd");
let cardImg = document.getElementById("cardImg");
let playListImg = document.getElementById("playListImg");
let priviousplay = document.getElementById("priviousplay");
let nextplay = document.getElementById("nextplay");
let songTitle = document.getElementById("songTitle");
let singerAlbum = document.getElementById("singerAlbum");
let volumeControl = document.getElementById("volumeControl");
let muteIcon = document.getElementById("muteIcon");
let playListData =document.getElementsByClassName("playListData");
let helloplays = document.getElementsByClassName("helloPlay ");

// console.log(helloplays)


const songList = [
  {
    song: "songs/0.mp3",
    songName: "kahani Suno",
    songImage: "pics/0.jpg",
    albumSinger:"Kaifi Khalil - Kahani Suno"
  },
  {
    song: "songs/1.mp3",
    songName: "All eyez on me",
    songImage: "pics/1.jpg",
    albumSinger:"2Pac - All Eyez On Me"
  },
  {
    song: "songs/2.mp3",
    songName: "Gangster Paradise",
    songImage: "pics/2.jpg",
    albumSinger:"Coolio - The Collection"
  },
  {
    song: "songs/3.mp3",
    songName: "East Side Flow",
    songImage: "pics/3.jpg",
    albumSinger:"Sidhu Moose Wala- East Side Flow"
  },
  {
    song: "songs/4.mp3",
    songName: "Industry Baby",
    songImage: "pics/4.jpg",
    albumSinger:"Lil NasX, Jack Harlow - INDUSTRY BABY"
  },
  {
    song: "songs/5.mp3",
    songName: "Introduction",
    songImage: "pics/5.jpg",
    albumSinger:"Faris Saifi - Introduction"
  },
  {
    song: "songs/6.mp3",
    songName: "Love Dose",
    songImage: "pics/6.jpg",
    albumSinger:"Yo Yo Honey Singh - Desi Kalakaar"
  },
  {
    song: "songs/7.mp3",
    songName: "Desi Kalakaar",
    songImage: "pics/7.jpg",
    albumSinger:"Yo Yo Honey Singh - Desi Kalakaar"
  },
  {
    song: "songs/8.mp3",
    songName: "Still D.R.E",
    songImage: "pics/8.jpg",
    albumSinger:"Dr. Dre ,ft. Snoop Dogg - STILL D.R.E"
  }
];

const bollywoodContainer = document.getElementById("bollywood");
const bollywoodFunction = ()=>{
  songList.forEach((data,index)=>{
    bollywoodSong = document.createElement("div");
    bollywoodSong.classList.add( 'col')
    bollywoodSong.innerHTML=`
    <div class=" mycard playListData card p-3 ">
                    <img src=${data.songImage} class="card-img-top"  alt="..."/>
                    <span><i class="fa-solid fa-circle-play fs-2 mt-2 bg-black rounded-circle helloPlay" id=${index}></i></span>
                    <div class="card-body text-white p-0">
                     <p class="card-title fw-bold mt-2">${data.songName} </p>
                      <p class="card-text m-0">${data.albumSinger} </p>
                    </div>
                    </div>`;
          bollywoodContainer.appendChild(bollywoodSong);
        })
      }
      bollywoodFunction();


      let songLink =0;

      
      // masterplay handle
      
      masterplay.addEventListener('click' , ()=>{
        if (songElement.paused || songElement.currentTime<=0) {
          songElement.play();
          masterplay.classList.remove('fa-circle-play');
          masterplay.classList.add('fa-circle-pause');
          Array.from(helloplays)[`${songLink}`].classList.add("fa-circle-pause");
          Array.from(helloplays)[`${songLink}`].classList.remove("fa-circle-play");
        } else {
          songElement.pause();
          masterplay.classList.remove('fa-circle-pause');
          masterplay.classList.add('fa-circle-play');
          Array.from(helloplays)[`${songLink}`].classList.add("fa-circle-play");
          Array.from(helloplays)[`${songLink}`].classList.remove("fa-circle-pause");

        }
        
      })
      

// seekbar set

      songElement.addEventListener('timeupdate', ()=>{
       
         progress =parseInt((songElement.currentTime/songElement.duration)*100) ;
        rangeBar.value =  progress ;
        let min = Math.floor(songElement.duration/60);
        let sec = Math.floor(songElement.duration%60);
        if(sec<10){
          sec =`0${sec}`
        }
        songTimeEnd.innerText=`0${min}:${sec}`;
        let min1 = Math.floor(songElement.currentTime/60);
        let sec1 = Math.floor(songElement.currentTime%60);
        if(sec1<10){
          sec1 =`0${sec1}`
        }
        songTimeStart.innerText=`0${min1}:${sec1}`;

      })
        rangeBar.addEventListener('change' , ()=>{
          songElement.currentTime = rangeBar.value*songElement.duration/100;
          
        })

        
        
        const playSong = ()=>{
          Array.from(helloplays).forEach((element)=>{
          element.classList.add("fa-circle-play");
          element.classList.remove("fa-circle-pause")
          
        })
      
      };
      const makeback = ()=>{
        Array.from(playListData).forEach((element)=>{
          element.style.backgroundColor="#3b3b3b"; 
          element.style.color="#000";
          
          
        })
      };
      
      
       
      
      Array.from(helloplays).forEach((element)=>{ 
        element.addEventListener("click", (e)=>{
          
        if (songElement.paused || songElement.currentTime<=0){
              songLink =e.target.id;
              songElement.currentTime=0;
              playSong();
              e.target.classList.add("fa-circle-pause");
              e.target.classList.remove("fa-circle-play");
              songElement.src=`songs/${songLink}.mp3`;
              cardImg.src=songList[songLink].songImage;
              songTitle.innerText=songList[songLink].songName;
              singerAlbum.innerText=songList[songLink].albumSinger;
              songElement.play();
              makeback();
              Array.from(playListData)[`${songLink}`].style.backgroundColor="rgb(125, 123, 123)";
              Array.from(playListData)[`${songLink}`].style.color="#fff";
              masterplay.classList.remove('fa-circle-play');
              masterplay.classList.add('fa-circle-pause');
              
            }  
        else{
          songElement.pause();
          e.target.classList.add("fa-circle-play");
          e.target.classList.remove("fa-circle-pause");
          masterplay.classList.remove('fa-circle-pause');
          masterplay.classList.add('fa-circle-play');
        }
        });
      });
      // console.log(songList.length)
    

      nextplay.addEventListener('click', ()=>{
        if(songLink >= songList.length -1){
          songLink = -1;
        }
        else{
          songLink++;
          songElement.src=`songs/${songLink}.mp3`;
          songElement.currentTime=0;
          cardImg.src=songList[songLink].songImage;
          songTitle.innerText=songList[songLink].songName;
          singerAlbum.innerText=songList[songLink].albumSinger;
          console.log(songLink)
          songElement.play();
          makeback();
          playSong();
          Array.from(playListData)[`${songLink}`].style.backgroundColor="rgb(125, 123, 123)";
          Array.from(playListData)[`${songLink}`].style.color="#fff";
          masterplay.classList.remove('fa-circle-play');
          masterplay.classList.add('fa-circle-pause');
          Array.from(helloplays)[`${songLink}`].classList.add("fa-circle-pause");
          Array.from(helloplays)[`${songLink}`].classList.remove("fa-circle-play");
          
          
        }
      });
      priviousplay.addEventListener('click', () => {
        if(songLink<=0){
          songLink = songList.length;
        }
        else{
          songLink--;
          
          songElement.currentTime=0;
          songElement.src=`songs/${songLink}.mp3`;
            cardImg.src=songList[songLink].songImage;
            songTitle.innerText=songList[songLink].songName;
            singerAlbum.innerText=songList[songLink].albumSinger;
            songElement.play();
            makeback();
            playSong();
            Array.from(playListData)[`${songLink}`].style.backgroundColor="rgb(125, 123, 123)";
            Array.from(playListData)[`${songLink}`].style.color="#fff";
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            Array.from(helloplays)[`${songLink}`].classList.add("fa-circle-pause");
            Array.from(helloplays)[`${songLink}`].classList.remove("fa-circle-play");
            
          }
      });


      
   

      // Update volume on input change
      volumeControl.addEventListener('input', function () {
        songElement.volume = volumeControl.value;
      });


      muteIcon.addEventListener('click' , (e) =>{
        if(volumeControl.value > 0 || songElement.volume > 0){
          volumeControl.value = 0;
          songElement.volume = 0; 
          e.target.classList.remove("fa-volume-low")
          e.target.classList.add("fa-volume-xmark");
        }
        else{
          volumeControl.value = 0.2;
          songElement.volume = 0.2;
          e.target.classList.remove('fa-volume-xmark');
          e.target.classList.add('fa-volume-low');

        }
      })
        // Set initial volume
   
      