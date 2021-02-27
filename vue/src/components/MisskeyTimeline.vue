<template>
    <div>
        <div v-for="note in notes" :key="note.id">
            <div>
                <div><h3> {{ note.user.username}}</h3></div>
                <div>{{ note.text }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    data() {
        return {
            notes: [],
            loading: false
        }
    },

    methods: {
        loadPast() {
            
        },
        loadInit() {
            if(this.loading){
                return
            }
            this.loading = true;
            axios.post('https://misskey.io/api/notes/global-timeline')
                .then((data)=> {
                    this.notes = data.data;
                })
                .finally(()=>{
                    this.loading = false;
                });
        }
    },
    created() {
        this.loadInit();
    }
}
</script>