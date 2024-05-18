const allPaths=["./images/cloudy.jpg","./images/robot.jpg","./images/ship.jpg","./images/wall.jpg","./images/war.jpg","./images/path.jpg"]
function sticker(){
    for(let k=0;k<40;k++){
        document.querySelector('.earth').innerHTML+=`
        <div class="cards">
                    <div class="cover">
                        <div class="details">
                            <p>card</p>
                            <div class="interactions">
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined">
                                    download_for_offline
                                </span> 
                            </div>
                        </div>
                    </div>
        `;
    }

    const allCards= document.querySelectorAll('.cards');

    for(let i of allCards){
        i.style.background=`url(${allPaths[Math.floor(Math.random()*6)]}) no-repeat center/cover`;
        i.onmouseenter=e=>{
            i.style.backgroundPositionX="35%";
        }
        i.onmouseleave=e=>{
            i.style.backgroundPositionX="50%";
        }
    }
}

// allCards[0].style.background=`url(${allPaths[0]}) no-repeat center/cover`;

sticker();