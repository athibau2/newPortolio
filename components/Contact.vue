<template>
    <v-dialog class="dialog" v-model="open"
        fullscreen
    >
        <v-card>
            <v-toolbar class="dialog-toolbar">
                <v-btn icon @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
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

    props: {
        open: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>

</style>