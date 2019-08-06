const axios = require("axios");

async function getInfoById(idNum){
     try{
        const people = await axios.get('');
        if (typeof(idNum) != "undefined"){ 
            let ln = 0;
            let list = [];
            for (let i=0; i < people.data.length; i++){
                if(people.data[i].id_badge.toLowerCase() == idNum.toLowerCase()){
                    list[ln] = people.data[i];
                    ln++;
                }
            } 
        return list; //returns list of people with lan id that matches given lan id. Should be only 1 person, length=0
        }
    } 
    catch(e){
        throw "errors";
    }
}

async function getReservationInfoByNumber(reservationid){
    try{
        const reserv = await axios.get('');
        if (typeof(reservationid) != "undefined"){ 
            let ln = 0;
            let list = [];
            for (let i=0; i < reserv.data.length; i++){
                if(reserv.data[i].resNum.toLowerCase() == reservationid.toLowerCase()){
                    list[ln] = reserv.data[i]; //returns reservation details, should be 1
                    ln++;
                }
            } 
        return list; //returns list of people with lan id that matches given lan id. Should be only 1 person, length=0
        }
    } 
    catch(e){
        throw "errors";
    }
}






module.exports={getInfoById, getReservationInfoByNumber};
