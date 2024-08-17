import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        document.getElementById("exit-btn").addEventListener("click",()=>{
            document.getElementById("Home").classList.remove("hidden");
            document.getElementById("Details").classList.add('hidden')
        } )
       this.getDetailsApi(id)
    }
    async getDetailsApi(id){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e5966617a6mshc326f82a79a80b6p1b2ef4jsnceb819da27c3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };





        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        let response= await api.json()
        let finalDetailsData= response;
        console.log(finalDetailsData)
        new Ui().displayDetail(finalDetailsData)

     
    }
}