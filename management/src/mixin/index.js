import Vue from 'vue'

// 公用插件 
Vue.mixin({
    data(){

        return {

        }
    },
    methods: {

        pushView(item,index) {
            this.$router.push({path:item.path,name:item.name}),
            this.Activesnum = item.title;
        }
    }
})