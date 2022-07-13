import {afficherDetail } from './Vins.js';
export default class Router {
    constructor(){
        this.init();
    }

    init(){
        
            //console.log('hashchange');
            let id = this.getIdInHash('vin');
            if(id) afficherDetail(id);


            //console.log(hashInArray);
            window.addEventListener('hashchange', function(){
                let id = this.getIdInHash('vin');
                afficherDetail(id);
        }.bind(this));
    }

    getIdInHash(slug) {
        let hash = window.location.hash,
            hashInArray = hash.split(`#!/${slug}/`),
            id = hashInArray[1];

        return id;
    }

}