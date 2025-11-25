

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

      console.log(data)
      // displayCard (data.data)
    });
    
    
    
}

//{
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// } 

const loadCategoriesCard =(id)=>{
    
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    console.log("URL: ",url);
    fetch(url)
    .then((res)=>res.json())
    .then ((data)=> {
      removeActiveClass();
      // const clickedButton = document.getElementById(`btn-${id}`);
      // clickedButton.classList.add("active");
      // console.log (data)
      displayCard (data.data)
    });
}

function displayData (data){
    const categoryContainer = document.getElementById ("category-container");
     
    for (let cat of data){
        console.log ("Levels: ",cat);
        console.log ("ID: ",cat?.level_no);

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`

        <button id="btn-${cat.id}" onclick="loadCategoriesCard(${cat.level_no})" class="btn btn-sm text-sm font-medium hover:bg-[#422AD5] hover:text-white ">lesson- ${cat.level_no}</button>
        `
        categoryContainer.append(categoryDiv);
    }
}

const loadCardDetails = (id) => {
    console.log ("id:",id);
    const url = ` https://openapi.programming-hero.com/api/word/${id} `;
    fetch (url)
    .then (res => res.json())
    .then ((data) => displayCardDetails (data.data));
}

const displayCardDetails = (card) => {
    console.log (card);
    document.getElementById("card_details").showModal();
    const detailsContainer = document.getElementById ("details-container");
    detailsContainer.innerHTML = `
    <div class="card   ">
  
  <div class="card-body justify-center items-start">
    <h2 class="text-xl text-[#18181B] font-semibold pb-6"> ${card.word} (${card.pronunciation})</h2>
    <p class=" text-xl text-[#18181B] font-semibold "> Meaning:</p>
     <p class=" text-xl text-[#18181B] font-medium pb-6"> ${card.meaning}</p>
     <h2 class="text-xl text-[#18181B] font-semibold" > Example:</h2>
     <p class=" text-xl text-[#18181B] font-medium pb-6"> ${card.sentence}</p>
     <h2 class="text-xl text-[#18181B] font-semibold" >সমার্থক শব্দ গুলো:</h2>
     <p class=" text-xl text-[#18181B] font-medium pb-6"> ${card.synonyms}</p>

    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    `
};

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
    
         <button onclick=loadCardDetails('${card.id}') class="btn btn-block">Show Details</button>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    `
    cardContainer.append(videoCard);

   })
   
}

 loadCategories();
 

 
