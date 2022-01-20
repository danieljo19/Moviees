<template>
    <div>
        <layout-main>
            
        </layout-main>
        <input class="m-bg-gray-200 m-h-10 m-px-5 m-ml-5 m-rounded-lg m-text-sm focus:m-outline-none m-mt-5 m-mb-5" style="width:20%" v-model="search" type="search" name="search" placeholder="Cari di Moviees">
        <br>
        <div v-for="movie in filteredMovies" :key="movie" class="card; m-ml-5 m-bg-gray-100 m-mb-20" style="width: 15%; height: 30%; float: left;">
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
            dataMovies: null,
            search:''
        }
    },
    methods: 
    {
        
    },
    created(){
        fetch("https://imdb-api.com/en/API/Top250Movies/k_mvvv05bd")
                .then(response => response.json())
                .then(json => {
                    this.dataMovies=json.items;
                })
                .catch(error =>
                {
                    console.log(error);
                })
    },
    computed:{
        filteredMovies: function(){
            return this.dataMovies.filter((movie)=> {
                return movie.title.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}
</script>