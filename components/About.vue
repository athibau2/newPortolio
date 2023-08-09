<template>
    <v-dialog class="dialog" v-model="show"
        fullscreen
    >
        <v-card class="dialog-card">
            <v-toolbar class="dialog-toolbar">
                <v-btn icon @click="close()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="code-font">
                    About Me
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <div class="item" v-for="(item, i) in topics"
                    :key="i"
                    :class="{ 'show': show }"
                    :style="{ animationDelay: show ? (i * 0.3) + 's' : '0s' }"
                >
                    <span class="header" style="margin-bottom: 0px">{{item.name}}</span>
                    <v-divider class="divider" />
                    <p class="about-me-text" :style="windowWidth < 800 ? {'width': '80%'} : null" v-html="item.text"></p>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'About',

    created () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },

    data () {
        return {
            topics: [
                {
                    name: 'Who Am I?',
                    text: 'First and foremost, I am a husband and father. My family means everything to me. Being from Minnesota, I am also a very active person with a love for the outdoors! I love playing sports, hiking, boating, and swimming.'
                },
                {
                    name: 'What Do I Do?',
                    text: 'My passion is mobile and web software development. I have worked hard while a student at BYU to develop many different development skills, as shown in my Education section. With all these skills, I build web and mobile apps that help solve real world problems.'
                },
                {
                    name: 'How Do I Do It?',
                    text: 'My ability to solve problems through technology has come through the formation of my own development business. Listed in my Experience section, Delta Apps is my company where I build and own many different apps that solve various problems for businesses and consumers. This fuels my entrepreneurial spirit to do good and keep building!'
                },
                {
                    name: 'Why Do I Do It?',
                    text: 'One of the first things anyone will learn about me is how much I love to help people. That\'s one of the biggest reasons I fell in love with software development; it gives me a chance to use my skills to build things that can help people.\n\nUsing technology to benefit the world is rewarding in so many ways. I have taken on several personal projects and entrepreuerial endeavors, all in the hopes to provide something of value to people.'
                },
            ],
            windowWidth: window.innerWidth,
        }
    },

    methods: {
        async close() {
            await this.$store.commit('components/setShowAbout', false)
        }
    },

    computed: {
        show: {
            get () {
                return this.$store.state.components.showAbout
            },

            async set () {
                await this.$store.commit('components/setShowAbout', false)
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
    background-color: rgba(61, 61, 61, 0.95);
}

.item {
    opacity: 0;
    animation: fade-up 1s forwards;
}

.item.show {
  animation: fade-up 1s forwards;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.divider {
    margin: 15px;
}

.about-me-text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 150%;
    width: 50%;
    display: flex;
    margin: 20px auto 30px auto;
    white-space: pre-line;
}

</style>
