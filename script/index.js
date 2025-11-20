
function removeActiveClass (){
  const activeButtons = document.getElementsByClassName("active");

  for (let btn of activeButtons){
    btn.classList.remove("active");
  }

}

function loadCategories () {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then ((res) => res.json())
    .then ((data) => displayData (data.data));
 }

function loadCard (){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then (Response => Response.json())
    .then (data => {
      displayCard (data.data)
    });
    
    
    
}

//{
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// } 

const loadCategoriesCard =(id)=>{
    
    const url =`https://openapi.programming-hero.com/api/level/5`;
    console.log(url);
    fetch(url)
    .then((res)=>res.json())
    .then ((data)=> {
      removeActiveClass();
      const clickedButton = document.getElementById(`btn-${id}`);
      clickedButton.classList.add("active");
      
      displayCard (data.data)
    });
}


function displayData (data){
    const categoryContainer = document.getElementById ("category-container");
     
    for (let cat of data){
        // console.log (cat);

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`

        <button id="btn-${cat.id}" onclick="loadCategoriesCard(${cat.id})" class="btn btn-sm text-sm font-medium hover:bg-[#422AD5] hover:text-white ">lesson- ${cat.level_no}</button>
        `
        categoryContainer.append(categoryDiv);
    }
}

const displayCard = (cards) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML="";
   cards.forEach(card=> {
    console.log(card);

    const videoCard = document.createElement("div");

    videoCard.innerHTML=`
    <div class="card bg-base-200 shadow-sm">
  <div class="card-body">
    <h2 class="text-3xl font-bold text-center pb-6">${card.word}</h2>
    <p class=" pb-6 text-lg font-medium ">Meaning /Pronounciation</p>
    
     <p class=" text-xl text-[#18181B] font-semibold pb-6">${card.meaning} / ${card.pronunciation}</p> 
     <div class="flex justify-between px-14 ">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
        </div>

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </div>
    </div>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    `
    cardContainer.append(videoCard);

   })
}

 loadCategories();
 