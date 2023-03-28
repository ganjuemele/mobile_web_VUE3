import {reactive, watch} from 'vue'

export const store = reactive({
    hotSearch: [],
    increment(e){
        this.hotSearch = e
    }
})
watch(
    ()=> store.hotSearch,
    (hotSearch) => {
        store.hotSearch = hotSearch
    },
    {deep: true}
)
