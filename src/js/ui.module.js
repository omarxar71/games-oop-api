
export class Ui {
    constructor() {}
    display(data){
        let box=``;
        for (let i =0 ; i <data.length ; i++){
            box+=`
            <div data-id="${data[i].id}" class="card w-3/12 bg-gray-900 p-3 ">
                <div class="all-content text-white p-3">
                     <img class="w-100" src="${data[i].thumbnail}" alt="game picture">
                    <div class="content">
                    <div class="name flex justify-between">
                        <span id="gameName">game</span>
                        <span>Free</span>
                    </div>
                    <div class="desc border-b-2">
                        <p id="descreption">${data[i].short_description}</p>
                    </div>
                    <div class="category flex justify-between">
                        <span id="genre">shooter</span>
                        <span id="platform">${data[i].platform}</span>
                    </div>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById("cardsContainer").innerHTML=box;
    }
    displayDetail(data){
        let box=``;
        box=` <div class="image w-1/2">
        <img class="w-max" src="${data.thumbnail}" alt="game picture">
       </div>
       <div class="content w-1/2 flex justify-center items-center p-5">
        <h4>${data.description}</h4>
  
       </div>`;
       document.getElementById("detailsAboutCard").innerHTML=box;

    }
    
}