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
                    My Skills
                </v-toolbar-title>
            </v-toolbar>
            <v-row class="skills-row">
                <v-card
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="skill-card"
                    :class="{ 'show': show }"
                    :style="{ animationDelay: show ? (index * 0.1) + 's' : '0s' }"
                >
                    <span class="skill-title-row">
                        <a target="_blank" :href="skill.link">
                            <img class="skill-img" :src="skill.imgSrc" />
                        </a>
                        <span class="skill-title">{{ skill.title }}</span>
                    </span>
                </v-card>
            </v-row>
        </div>
    </v-dialog>
</template>

<script>
export default {
    name: 'Skills',
    
    mounted () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },
    
    data () {
        return {
            skills: [
                {
                    imgSrc: "icons/angular.png",
                    title: "Angular",
                    link: "https://angular.dev/",
                },
                {
                    imgSrc: "icons/typescript-logo.png",
                    title: "TypeScript",
                    link: "https://typescriptlang.org/",
                },
                {
                    imgSrc: "icons/vue-logo.png",
                    title: "VueJS",
                    link: "https://vuejs.org/",
                },
                {
                    imgSrc: "icons/nuxt.png",
                    title: "NuxtJS",
                    link: "https://nuxtjs.org/",
                },
                {
                    imgSrc: "icons/html-css.png",
                    title: "HTML/CSS",
                    link: "https://html.com/",
                },
                {
                    imgSrc: "icons/flutter-logo.png",
                    title: "Flutter",
                    link: "https://flutter.dev/",
                },
                {
                    imgSrc: "icons/dart.png",
                    title: "Dart",
                    link: "https://dart.dev/",
                },
                {
                    imgSrc: "icons/firebase-logo.png",
                    title: "Firebase",
                    link: "https://firebase.google.com/",
                },
                {
                    imgSrc: "icons/supabase.png",
                    title: "Supabase",
                    link: "https://supabase.com/",
                },
                {
                    imgSrc: "icons/javascript-logo.png",
                    title: "JavaScript",
                    link: "https://javascript.com/",
                },
                {
                    imgSrc: "icons/node-logo.png",
                    title: "NodeJS",
                    link: "https://nodejs.org/",
                },
                {
                    imgSrc: "icons/postgres-logo.png",
                    title: "PostgreSQL",
                    link: "https://postgresql.org/",
                },
                {
                    imgSrc: "icons/sql.png",
                    title: "SQL",
                    link: "https://en.wikipedia.org/wiki/SQL",
                },
                {
                    imgSrc: "icons/strapi.png",
                    title: "Strapi",
                    link: "https://strapi.io",
                },
                {
                    imgSrc: "icons/netlify.png",
                    title: "Netlify",
                    link: "https://netlify.com/",
                },
                {
                    imgSrc: "icons/npm.png",
                    title: "NPM",
                    link: "https://npmjs.com/",
                },
                {
                    imgSrc: "icons/github.png",
                    title: "Github",
                    link: "https://github.com/",
                },
                {
                    imgSrc: "icons/aws.png",
                    title: "AWS",
                    link: "https://aws.amazon.com/",
                },
                {
                    imgSrc: "icons/cpp-logo.png",
                    title: "C++",
                    link: "https://www.cplusplus.com/",
                },
                {
                    imgSrc: "icons/expressjs.png",
                    title: "ExpressJS",
                    link: "https://expressjs.com/",
                },
            ],
            windowWidth: window.innerWidth
        }
    },

    methods: {
        async close() {
            await this.$store.commit('components/setShowSkills', false)
        },
    },

    computed: {
        show: {
            get () {
                return this.$store.state.components.showSkills
            },

            async set () {
                await this.$store.commit('components/setShowSkills', false)
            }
        }
    },

    watch: {
        show(newValue) {
            if (newValue) {
            }
        },
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

.dialog {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-card {
    height: 100%;
    overflow-y: scroll;
    background-color: rgba(61, 61, 61, 0.9);
}

/* CSS for the skill cards grid */
.skills-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-bottom: 100px;
}

/* Styles for the skill cards */
.skill-card {
  margin: 10px;
  width: 200px;
  color: #3d3d3d;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0; /* Start with the cards hidden */
  animation: fade-up 0.5s forwards;
}

.skill-card.show {
  animation: fade-up 0.5s forwards;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.skill-img {
    height: 30px;
}

.skill-img:hover {
    opacity: 0.6;
}

.skill-title-row {
    display: flex;
    align-items: center;
}

.skill-title {
    margin: 0 10px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}

.skill-level-row {
    display: flex;
    justify-content: center;
}

.skill-level-icon {
    color: rgb(74, 74, 191);
    margin-top: 15px;
}

</style>