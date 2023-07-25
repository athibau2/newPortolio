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
                    {{listType}}
                </v-toolbar-title>
            </v-toolbar>
            <v-row class="item gradient"
                v-for="(item, i) in list"
                :key="i"
                :class="{ 'show': show }"
                :style="{ animationDelay: show ? (i * 0.3) + 's' : '0s' }"
            >
                <div class="item-content">
                    <div class="item-image-container" v-if="windowWidth >= 700">
                        <img class="item-image" :src="item.image" />
                    </div>
                    <div :class="`item-details ${windowWidth < 700 ? 'text-center' : null}`" :style="windowWidth < 700 ? {'margin': 'auto', 'width': '100%'} : null">
                        <div class="item-image-container" v-if="windowWidth < 700" :style="windowWidth < 700 ? {'margin': '10px auto', 'width': '150px'} : null">
                            <img class="item-image" :src="item.image" />
                        </div>
                        <h2 class="item-title">{{ item.title }}</h2>
                        <h4 class="item-subtitle">{{ item.subtitle }}</h4>
                        <p class="item-description" v-html="item.description"></p>
                        <div>
                            <v-row :class="`image-row ${windowWidth < 700 ? 'justify-center' : null}`"
                                v-if="item.media.length > 0"
                                :style="windowWidth < 700 ? {'margin': 'auto'} : null"
                            >
                                <img class="list-image"
                                    :src="image"
                                    v-for="image in item.media"
                                    :key="image"
                                />
                                <a class="item-url" v-if="item.url" target="_blank" :href="item.url">
                                    <v-btn class="btn">View Site</v-btn>
                                </a>
                            </v-row>
                            <a class="item-url" v-if="item.media.length == 0 && item.url" target="_blank" :href="item.url">
                                <v-btn class="btn">View Site</v-btn>
                            </a>
                        </div>
                    </div>
                </div>
            </v-row>
        </div>
    </v-dialog>
</template>

<script>
export default {
    name: 'PortfolioList',

    props: {
        list: {
            type: Array,
            required: true
        },

        listType: {
            type: String,
            required: true
        }
    },

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
            await this.$store.commit('components/setShowPortfolioList', false)
        }
    },

    computed: {
        show: {
            get () {
                return this.$store.state.components.showPortfolioList
            },

            async set () {
                await this.$store.commit('components/setShowPortfolioList', false)
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

.item {
  display: flex;
  margin: 20px auto;
  width: 90%;
  border-radius: 50px;
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

.item-content {
    padding: 20px;
    display: flex;
}

.item-image-container {
  width: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  /* left: -14%; */
}

.item-image {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.item-details {
  padding: 20px;
  width: 80%;
}

h2, h4, p {
    font-family: Arial, Helvetica, sans-serif;
    color: #e9e9e9;
}

h4 {
    font-style: italic;
}

p {
    white-space: pre-line;
}

.image-row {
    margin: 10px 0;
}

.list-image {
    height: 25px;
    margin: 5px;
}

.item-url {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}

.btn {
    font-size: 12px !important;
    background-color: rgba(61, 61, 61, 0.9) !important;
}

</style>