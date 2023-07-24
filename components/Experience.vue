<template>
    <v-dialog class="dialog" v-model="show"
        fullscreen
    >
        <v-card>
            <v-toolbar class="dialog-toolbar">
                <v-btn icon @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                    My Experience
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>Hello there!</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Experience',

    methods: {
        close() {
            this.$emit('close')
        }
    },

    computed: {
        show: {
            get () {
                return this.$store.state.components.showExperience
            },

            async set () {
                await this.$store.commit('components/setShowExperience', false)
            }
        }
    },
}
</script>

<style scoped>

</style>