const state = () => ({
  page: 0,
  imagesToPreload: [
    require('../../assets/landing/button.png'),
    require('../../assets/landing/Tindahan BG Wide.png'),
    require('../../assets/form/Background.png'),
    require('../../assets/form/Notepad.png'),
    require('../../assets/form/back.png'),
    require('../../assets/form/next.png'),
    require('../../assets/exit/tindahan.png'),
    require('../../assets/exit/Background.png')
  ],
  clickAudio: new Audio(require('../../assets/audio/click noise.mp3')),
  bgAudio: new Audio(require('../../assets/audio/ambient noise.mp3'))
})

// getters
const getters = {
  currentPage(state){
    return state.page;
  },
  currentlyInForm(state){
    return state.inForm;
  }
}

// actions (Compound Asynchronous Actions)
const actions = {
  acquirePage(context){
    if (localStorage.page){
      context.commit('jumpToPage', localStorage.page);
    } else {
      context.commit('incrementPage');
    }
  },
  incrementPage(context){
    context.commit('incrementPage');
  },
  incrementPageBG(context){
    context.commit('incrementPage');
    context.state.bgAudio.play();
  },
  preloadImages(context){
    const images = context.state.imagesToPreload.map(imageSrc => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(images).then(() => {context.commit('incrementPage')});
  }
}

// mutations (Primitive Synchronous Actions)
const mutations = {
  incrementPage(state){
    state.page++;
    state.clickAudio.play();
  },
  jumpToPage(state, n){
    state.page = n;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
