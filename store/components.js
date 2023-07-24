export const state = () => ({
    showSkills: false,
    showEducation: false,
    showExperience: false,
    showContact: false,
})

export const mutations = {
    setShowSkills(state, data) {
        state.showSkills = data
    },

    setShowEducation(state, data) {
        state.showEducation = data
    },

    setShowExperience(state, data) {
        state.showExperience = data
    },

    setShowContact(state, data) {
        state.showContact = data
    }
}