export const state = () => ({
    showSkills: false,
    showPortfolioList: false,
    showContact: false,
    showAbout: false,
})

export const mutations = {
    setShowSkills(state, data) {
        state.showSkills = data
    },

    setShowPortfolioList(state, data) {
        state.showPortfolioList = data
    },

    setShowContact(state, data) {
        state.showContact = data
    },

    setShowAbout(state, data) {
        state.showAbout = data
    }
}