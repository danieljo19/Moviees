<template>
    <div>
        <layout-main>
            
        </layout-main>
        <div class="h1 m-mt-10 m-ml-5">ALL MOVIES</div>
        <div v-for="movie in dataMovies" :key="movie" class="card; m-mx-2.5 m-my-5 m-bg-gray-100" style="width: 15%; height: 30%; float: left;">
            <img :src="movie.image" style="width: 100%; height: 270px; margin: auto;">
            <div class="card-body">
                <img src="star.svg" width="20" style="float: left; margin-right: 10px;">{{movie.imDbRating}}
                <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.title}}</p>
                <router-link :to="{name:'detailMovies', params: {rank: movie.rank}}" class="btn btn-warning m-mt-2">Details</router-link>
            </div> 
            
        </div>
    </div>
</template>

<script>
import LayoutMain from "@/views/LayoutMain"
export default { 
    components: {
        LayoutMain
    },
    data(){
        return {
            dataMovies: null
        }
    },
    methods: 
    {
        getMovies()
        {
            fetch("https://imdb-api.com/en/API/Top250Movies/k_7tm6nttr")
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
        this.getMovies();
    }
}
</script>