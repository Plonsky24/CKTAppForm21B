const state = () => ({
  page: 0
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
  preloadImages(context){
    const imagesToPreload = [
      '../../landing/button.png',
      '../../landing/Tindahan BG Wide.png',
      '../../form/Background.png',
      '../../form/Notepad.png',
      '../../form/back.png',
      '../../form/next.png',
      '../../exit/tindahan.png',
      '../../exit/Background.png'
    ];

    const images = imagesToPreload.map(imageSrc => {
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
