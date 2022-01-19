<template>
    <div>
        <div v-for="movie in dataMovies" :key="movie">
            <div v-if="movie.rank===rank">
                <div class="container m-10 m-bg-gray-200">
                    <div class="row section-separator align-items-center m-mt-10">
                        <div class="col-5">
                             <img :src="movie.image" style="width: 80%; margin: 20px">
                        </div>
                        <div class="col-6">
                            ID: {{movie.id}} <br> <br>
                            Rank: {{movie.rank}} <br> <br>
                            Title: {{movie.title}} <br> <br>
                            Full Title: {{movie.fullTitle}} <br> <br>
                            Year: {{movie.year}} <br> <br>
                            Crew: {{movie.crew}} <br> <br>
                            Imdb Rating: {{movie.imDbRating}} <br> <br>
                            Imdb Rating Count: {{movie.imDbRatingCount}} <br> <br>
                        </div>
                        <div class="col-1">
                            <router-link :to="{name:'movies'}" class="btn-close" style="top: 60px; position: fixed;" aria-label="Close" ></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default { 
    
    data(){
        return {
            rank : this.$route.params.rank,
            dataMovies: null
        }
    },
    methods: 
    {
        getDetailMovie()
        {
            fetch("https://imdb-api.com/en/API/Top250Movies/k_kzb59xch")
                .then(response => response.json())
                .then(json => {
                    this.dataMovies=json.items;
                })
                .catch(error =>
                {
                    console.log(error);
                })
        }
    },
    mounted(){
        this.getDetailMovie();
    }
}
</script>