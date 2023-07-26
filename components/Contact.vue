<template>
    <v-dialog class="dialog" v-model="show"
        fullscreen
    >
        <div class="dialog-card">
            <v-toolbar class="dialog-toolbar">
                <v-btn icon @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="code-font">
                    Contact Me
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="card-text">
                <form class="form"
                    name="contact-form"
                    method="POST"
                    data-netlify="true"
                    :style="windowWidth < 700 ? {'width': '95%'} : null"
                >
                    <span class="header">Send Me a Message!</span>
                    <v-row class="form-row" align="center" justify="center">
                        <input class="form-row-field"
                            style="margin-right: 3px"
                            type="name"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                        <input class="form-row-field"
                            style="margin-left: 3px"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </v-row>
                    <input class="form-field"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        class="form-field"
                        name="message"
                        rows="6"
                        placeholder="Your message"
                        required
                    ></textarea>
                    <v-btn class="send-btn" type="submit" text>
                        <span class="send-btn-content">
                            <v-icon class="send-icon">mdi-send</v-icon>
                            <span class="send-btn-text code-font">Send</span>
                        </span>
                    </v-btn>
                </form>
            </v-card-text>
        </div>
    </v-dialog>
</template>

<script>
export default {
    name: 'Contact',

    mounted () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },

    data () {
        return {
            windowWidth: window.innerWidth
        }
    },

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

.dialog-card {
    height: 100%;
    overflow-y: scroll;
    background-color: rgba(61, 61, 61, 0.9);
}

.card-text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin: 20px auto;
}

.form {
    width: 50%;
}

.form-row {
    margin: 10px 0 5px 0;
}

.form-row-field, .form-field {
    border: solid 3px transparent;
    border-image: linear-gradient(to right, rgba(74, 74, 191, 0.7), rgb(128, 128, 128, 0.7), rgba(74, 74, 191, 0.7)) 1;
    padding: 8px;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 14px;
    color: #f0f0f0 !important;
    background-color: rgba(61, 61, 61, 0.8);
}

.form-row-field {
    width: 49%;
}

.form-field {
    width: 100%;
    margin-bottom: 5px;
}

.send-btn {
    display: flex;
    margin: auto;
    color: #f0f0f0 !important;
}

.send-icon {
    margin-right: 4px;
}

.send-btn-text {
    font-size: 18px !important;
}

</style>