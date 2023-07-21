<template>
  <v-col class="column justify-center">
    <v-row class="typer-row" justify="center" align="center">
      <VueTyper class="typer"
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
        <button @click="isOpen = !isOpen">
          <img 
            class="profile"
            src="~/assets/images/profile-blue.png"
            :style="windowWidth < 800 ? {'height': '150px'} : null"
          />
        </button>
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-item"
            :class="{ 'open': isOpen }"
            :style="getItemStyle(index)"
          >
            <transition name="menu-item-transition">
              <v-btn class="item-btn" text v-if="isOpen" @click="item.click()">
                <span class="item-btn-content">
                  <v-icon class="item-icon" :size="windowWidth < 800 ? 35 : 45">{{item.icon}}</v-icon>
                  <span class="item-name" v-if="windowWidth > 650">&ensp;{{ item.label }}</span>
                </span>
              </v-btn>
            </transition>
          </div>
      </div>
    </v-row>
    <Skills :open="showSkills" @close="showSkills = false" />
    <Education :open="showEducation" @close="showEducation = false" />
    <Experience :open="showExperience" @close="showExperience = false" />
    <Contact :open="showContact" @close="showContact = false" />
  </v-col>
</template>

<script>
import { VueTyper } from 'vue-typer'
import Skills from '~/components/Skills.vue'
import Education from '~/components/Education.vue'
import Experience from '~/components/Experience.vue'
import Contact from '~/components/Contact.vue'
export default {
  name: 'IndexPage',

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  components: {
    VueTyper,
    Skills,
    Education,
    Experience,
    Contact
  },

  data () {
    return {
      menuItems: [
        { icon: 'mdi-code-tags', label: 'Skills', click: () => this.showSkills = true },
        { icon: 'mdi-school', label: 'Education', click: () => this.showEducation = true },
        { icon: 'mdi-briefcase', label: 'Experience', click: () => this.showExperience = true },
        { icon: 'mdi-email', label: 'Contact', click: () => this.showContact = true },
        { icon: 'mdi-github', label: 'Github', click: () => this.openLink('https://github.com/athibau2') },
        { icon: 'mdi-linkedin', label: 'LinkedIn', click: () => this.openLink('https://linkedin.com/in/andrew-thibaudeau/') },
      ],
      typerText: [
        'Hello, my name is Andrew Thibaudeau',
        'I\'m a software developer',
        'I\'m a BYU student',
        'Click my picture to learn more!'
      ],
      showSkills: false,
      showEducation: false,
      showExperience: false,
      showContact: false,
      isOpen: false,
      windowWidth: window.innerWidth
    }
  },

  methods: {
    openLink(link) {
      console.log(link)
      window.open(link)
    },

    getItemStyle(index) {
      const total = this.menuItems.length;
      const angle = (360 / total) * index;
      const position = 30; // Adjust this value to change the radius of the circle
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
    },
  }
}
</script>

<style scoped>
.column {
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
}

.typer-row {
  margin-top: 30px;
}

.typer {
  padding: 6px 20px;
  background-image: linear-gradient(to right, rgb(74, 74, 191), grey, rgb(74, 74, 191)); /**#B39DDB, #E57373, #B39DDB */
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 4px;
}

.menu-container {
  position: relative;
  width: 100%;
  height: 90vh;
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
  font-size: 18px;
}

.menu-item {
  position: absolute;
  transform: translate(-50%, -50%);
}

.menu-item-transition-enter-active,
.menu-item-transition-leave-active {
  transition: all 0.5s;
}

.menu-item-transition-enter,
.menu-item-transition-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

</style>
