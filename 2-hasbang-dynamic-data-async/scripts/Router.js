import { getTeamsPlayers } from './Teams.js';
export default class Router {
    constructor(el) {
        // utilisee dans le classMapping
        this._el = el;
        //console.log(this._el);
        this.init();
    }

    init() {
        // comportement au chargement de la page
        let id = this.getIdInHash('equipe');
        if(id) {
            getTeamsPlayers(id);

            this._el.querySelector(`option[value="${id}"]`).selected = true;

            /* let elOptions = this._el.querySelectorAll('option');
            for (let i = 0; i < elOptions.length; i++) {
                if (elOptions[i].value == id) elOptions[i].selected = true;
                
            } */
        }
        // comportement suite a l'évenement hashchange
        window.addEventListener('hashchange', function(){
            let id = this.getIdInHash('equipe');
            getTeamsPlayers(id);
        }.bind(this));


        // comportement suite a l'évenement du select
        this._el.addEventListener('change', function(){
            //console.log('change');
            let id = this._el.value;
            this.injectLocation('equipe', id);
        }.bind(this))
    }
    
    injectLocation(slug, id) {
        window.location = `#!/${slug}/${id}`;
    }

    getIdInHash(slug) {
        let hash = window.location.hash,
            hashInArray = hash.split(`#!/${slug}/`),
            id = hashInArray[1];
        return id;
    }
}