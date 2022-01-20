<template>
    <div>
        <iframe :src="dataTrailer" width="100%" height="500px"></iframe>
        
    </div>
</template>
<script>
export default { 
    
    data(){
        return {
            id : this.$route.params.id,
            dataTrailer: null
        }
    },
    
    methods: 
    {
        
        getTrailer()
        {
            fetch("https://imdb-api.com/en/API/Trailer/k_mvvv05bd/"+this.id)
                .then(response => response.json())
                .then(json => {
                    this.dataTrailer=json.linkEmbed;
                })
                .catch(error =>
                {
                    console.log(error);
                })
        },

        
    },
    mounted(){
        this.getTrailer();
    }
}
</script>