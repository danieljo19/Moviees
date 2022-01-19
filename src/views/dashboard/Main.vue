<template>
    <div>
        <layout-main></layout-main>
        <link href="/dist/output.css" rel="stylesheet">
  
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div class="carousel-inner ml-50 mt-10">
          <div class="carousel-item active">
            <div class="img-container">
              <img src="carousel-1.webp">
              <div class="carousel-caption d-none d-md-block">
                <h2>Promo Akhir Tahun</h2>
                <p>Langganan Moviees Premier Platinum hanya dengan 2.022 rupiah aja, Pas banget kan buat movie marathon semua #CariDiMoviees</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="img-container">
              <img src="carousel-2.webp">
              <div class="carousel-caption d-none d-md-block">
                <h2>Thailand vs Vietnam</h2>
                <p>26 DES - 19.30 WIB | Mampukah Vietnam mengejar kebobolan 2 gol di leg 1 atau Thailand yang akan melangkah mulus ke final?</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="img-container">
              <img src="carousel-3.webp">
              <div class="carousel-caption d-none d-md-block">
                <h2>Spider-Man: Homecoming</h2>
                <p>Meski masih duduk di bangku SMA, Peter Parker harus menyelesaikan misi untuk menghentikan perdagangan senjata ilegal.</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  </div>
  <div class="h1 m-mt-10 m-ml-5">TOP 5 MOVIES</div>
  <div v-for="movie in dataMovies" :key="movie" class="card; m-mx-2.5 m-my-5 m-bg-gray-100" style="width: 18%; height: 20; float: left;" >
    <div v-if="movie.rank==='1'|| movie.rank==='2' || movie.rank==='3'|| movie.rank==='4'|| movie.rank==='5'">
            <img :src="movie.image" style="width: 100%; height: 300px; margin: auto;">
            <div class="card-body">
                <img src="star.svg" width="20" style="float: left; margin-right: 10px;">{{movie.imDbRating}}
                <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.title}}</p>
                <router-link :to="{name:'detailMovie1', params: {rank: movie.rank}}" class="btn btn-warning m-mt-2">Details</router-link>
            </div> 
            
        </div>
        </div>
=======
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
    <div class="h2 m-mt-10 m-ml-5 m-font-bold">Top 5 Movies</div>
    <div v-for="movie in dataMovies" :key="movie" class="card; m-mx-2.5 m-my-5 m-bg-gray-100" style="width: 18%; height: 20; float: left;" >
      <div v-if="movie.rank==='1'|| movie.rank==='2' || movie.rank==='3'|| movie.rank==='4'|| movie.rank==='5'">
        <img :src="movie.image" style="width: 100%; height: 300px; margin: auto;">
        <div class="card-body">
            <img src="star.svg" width="20" style="float: left; margin-right: 10px;">{{movie.imDbRating}}
            <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.title}}</p>
            <router-link :to="{name:'detailMovie1', params: {rank: movie.rank}}" class="btn btn-warning m-mt-2">Details</router-link>
        </div>
      </div>
    </div>

    <footer class="m-mt-20 m-bg-black m-text-center lg:m-text-left">
      <div class="m-text-gray-400 m-text-center m-p-4">
        © 2021 Copyright:
        <a class="m-text-gray-400 hover:m-text-yellow-500 m-transition m-duration-300" href="about">Moviees</a>
      </div>
    </footer>

>>>>>>> parent of 0b5c162 (update fix footer)
=======
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  </div>
  <div class="h1 m-mt-10 m-ml-5">TOP 5 MOVIES</div>
  <div v-for="movie in dataMovies" :key="movie" class="card; m-mx-2.5 m-my-5 m-bg-gray-100" style="width: 18%; height: 20; float: left;" >
    <div v-if="movie.rank==='1'|| movie.rank==='2' || movie.rank==='3'|| movie.rank==='4'|| movie.rank==='5'">
            <img :src="movie.image" style="width: 100%; height: 300px; margin: auto;">
            <div class="card-body">
                <img src="star.svg" width="20" style="float: left; margin-right: 10px;">{{movie.imDbRating}}
                <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.title}}</p>
                <router-link :to="{name:'detailMovie1', params: {rank: movie.rank}}" class="btn btn-warning m-mt-2">Details</router-link>
            </div> 
            
        </div>
        </div>
>>>>>>> parent of e1e9347 (minor update)
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
        },
        showInfo(){
            this.$emit('ShowModal', this.dataMovies.imdbID)
        }
    },
    mounted(){
        this.getMovies();
    }
}
</script>