export default {
    //"les données descendent", ici, le parent envoie le prénom sous la forme d'un props
    props: {
        prenom: String
    },
    //"l'état remonte", par exemple ici l'enfant ne peut pas supprimer dans le tableau du parent, on emet donc un évenement (qu'il va falloir écouter au niveau du parent)
    methods: {
        askToSuppress() {
            this.$emit('asktosuppress', this.prenom)
        }
    },

    template: `
        <li>{{ prenom }} <button v-on:click="askToSuppress">Supprimer</button></li>
    `
}