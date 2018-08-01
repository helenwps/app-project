/**
 * 插件
 */
// import UPanel from '@/plugins/UPanel'
const Api = require('@/api/index').default
const lodash = require('lodash');  // api http://lodashjs.com/docs/


// const UPlugins = {
//     UPanel
// }

const install = function (Vue, opts = {}) {
    
    // Object.keys(UPlugins).forEach((key) => {
    //     Vue.component(key, UPlugins[key]);
    // });
    Vue.mixin({
        data(){
            return {
                Api,
                lodash    // lodash
            }
        }
    })
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export const UCenterPlugins = install;//Object.assign(UPlugins, {install});