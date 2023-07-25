<template>
  <v-col class="column justify-center">
    <v-row class="typer-row" justify="center" align="center">
      <VueTyper class="typer code-font gradient"
        :text="typerText"
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='1500'
        :erase-delay='50'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      ></VueTyper>
    </v-row>
    <v-row>
      <div class="menu-container">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button @click="openMenuItem('about')" v-on="on" v-bind="attrs" >
              <img
                class="profile"
                src="~/assets/images/profile-blue.png"
                :style="windowWidth < 800 ? {'height': '150px'} : null"
              />
            </button>
          </template>
          <span>About Me</span>
        </v-tooltip>
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item"
          :class="{ 'open': isOpen }"
          :style="getItemStyle(index)"
        >
          <transition name="menu-item-transition">
            <v-btn
              v-if="isOpen"
              class="item-btn"
              @click="item.click()"
              text
            >
              <span class="item-btn-content" v-if="windowWidth <= 650">
                <v-icon class="item-icon" name="icon" size="35">{{item.icon}}</v-icon>
                <br><label class="item-name" style="font-size: 12px" for="icon">{{item.label}}</label>
              </span>
              <span class="item-btn-content" v-else>
                <v-icon class="item-icon" :size="windowWidth < 800 ? 35 : 40">{{item.icon}}</v-icon>
                <span class="item-name">&ensp;{{ item.label }}</span>
              </span>
            </v-btn>
          </transition>
        </div>
      </div>
    </v-row>
    <Skills />
    <PortfolioList :list="openedList" :listType="listType" />
    <Contact />
    <About />
  </v-col>
</template>

<script>
import { VueTyper } from 'vue-typer'
import Skills from '~/components/Skills.vue'
import PortfolioList from '~/components/PortfolioList.vue'
import Contact from '~/components/Contact.vue'
import About from '~/components/About.vue'
import { educationList, experienceList } from '~/models/portfolio-list'
export default {
  name: 'IndexPage',

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  mounted () {
    this.isOpen = true
  },

  components: {
    VueTyper,
    Skills,
    PortfolioList,
    Contact,
    About
  },

  data () {
    return {
      menuItems: [
        { icon: 'mdi-code-tags', label: 'Skills', click: () => this.openMenuItem('skills') },
        { icon: 'mdi-school', label: 'Education', click: () => this.openMenuItem('education') },
        { icon: 'mdi-briefcase', label: 'Experience', click: () => this.openMenuItem('experience') },
        { icon: 'mdi-email', label: 'Contact', click: () => this.openMenuItem('contact') },
        { icon: 'mdi-github', label: 'Github', click: () => this.openLink('https://github.com/athibau2') },
        { icon: 'mdi-linkedin', label: 'LinkedIn', click: () => this.openLink('https://linkedin.com/in/andrew-thibaudeau/') },
      ],
      typerText: [
        'Hello, my name is Andrew Thibaudeau',
        'I\'m a software developer',
        'I\'m a BYU student',
        'Click a topic below to learn more!'
      ],
      isOpen: false,
      openedList: [],
      listType: '',
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },

  methods: {
    openLink(link) {
      console.log(link)
      window.open(link)
    },

    async openMenuItem(source) {
      switch(source) {
        case 'skills':
          await this.$store.commit('components/setShowSkills', true)
          break;
        case 'education':
          this.openedList = educationList
          this.listType = 'My Education'
          await this.$store.commit('components/setShowPortfolioList', true)
          break;
        case 'experience':
          this.openedList = experienceList
          this.listType = 'My Experience'
          await this.$store.commit('components/setShowPortfolioList', true)
          break;
        case 'contact':
          await this.$store.commit('components/setShowContact', true)
          break;
        case 'about':
          await this.$store.commit('components/setShowAbout', true)
      }
    },

    getItemStyle(index) {
      const total = this.menuItems.length;
      const angle = (360 / total) * index;
      const position = 35; // Adjust this value to change the radius of the circle
      const radians = (angle * Math.PI) / 180;
      const x = 50 + position * Math.cos(radians);
      const y = 50 + position * Math.sin(radians);
      return {
        left: `${x}%`,
        top: `${y}%`,
      };
    },

    resizeHandler() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

.column {
  height: 100vh;
  margin: auto;
  padding-top: 30px;
}

.typer {
  padding: 6px 20px;
  font-size: 20px;
  /* font-family: 'Courier New', Courier, monospace; */
  border-radius: 4px;
}

.menu-container {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  height: 200px;
  border-radius: 50%;
}

.profile:hover {
  opacity: 0.8;
}

.item-btn {
  height: 50px !important;
}

.item-btn-content {
  background-image: linear-gradient(to bottom right, blue, grey, blue);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.item-icon {
  background-image: linear-gradient(to bottom right, blue, grey, blue);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.item-name {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-item {
  position: absolute;
  transform: translate(-50%, -50%);
}

.menu-item-transition-enter-active,
.menu-item-transition-leave-active {
  transition: all 1.5s;
}

.menu-item-transition-enter,
.menu-item-transition-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

</style>
