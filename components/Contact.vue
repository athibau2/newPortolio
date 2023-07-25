<template>
    <v-dialog class="dialog" v-model="show"
        fullscreen
    >
        <v-card>
            <v-toolbar class="dialog-toolbar">
                <v-btn icon @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="code-font">
                    Contact Me
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>Hello there!</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Contact',

    methods: {
        async close() {
            await this.$store.commit('components/setShowContact', false)
        }
    },

    computed: {
        show: {
            get () {
                return this.$store.state.components.showContact
            },

            async set () {
                await this.$store.commit('components/setShowContact', false)
            }
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>