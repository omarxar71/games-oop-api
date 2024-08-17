
import { Details } from './details.module.js';
import { Ui } from './ui.module.js';
export class Home{
    constructor(){
        document.querySelectorAll('nav ul li').forEach((link)=> {
            link.addEventListener('click', ()=>{
                this.changeLiColor(link)
                this.getApi(link.innerHTML)
            })
        })
        
        this.getApi("shooter")
    }

    async changeLiColor(link){
       
        document.querySelector(".active").classList.remove('active');
        link.classList.add("active");
    }

      async getApi(cat) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e5966617a6mshc326f82a79a80b6p1b2ef4jsnceb819da27c3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };




        let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options)
        let response = await api.json();
        let finalData= response;
        this.Ui=new Ui()
        console.log(finalData)
        this.Ui.display(finalData)
        document.querySelectorAll(".card").forEach((link)=> {
            link.addEventListener("click", ()=>{
                document.getElementById("Home").classList.add("hidden");
                document.getElementById("Details").classList.remove('hidden')
                new Details(link.dataset.id)

            })
        })
    }
















 





}