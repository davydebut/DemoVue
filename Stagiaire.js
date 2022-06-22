export default {
    props: {
        prenom: String
    },

    methods: {
        askToSuppress() {
            this.$emit('asktosuppress', this.prenom)
        }
    },

    template: `
        <li>{{ prenom }} <button v-on:click="askToSuppress">Supprimer</button></li>
    `
}