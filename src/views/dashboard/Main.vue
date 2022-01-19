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
                  <h2>Spider-Man: Homecoming</h2>
                  <p>Peter Parker yang menghadapi krisis besar karena identitasnya diungkap Mysterio. Peter Parker kemudian meminta bantuan Doctor Stranger agar orang-orang bisa melupakan identitasnya sebagai Spider-Man.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="img-container">
                <img src="carousel-2.webp">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Interstellar</h2>
                  <p>Dengan umat manusia yang sedang berada di ambang kepunahan, sekelompok astronot melakukan perjalanan melalui lubang cacing untuk mencari planet lain yang bisa dihuni.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="img-container">
                <img src="carousel-3.webp">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Your Name</h2>
                  <p>Dua remaja berbagi hubungan aneh setelah mengetahui bahwa mereka bertukar tubuh satu sama lain. Segalanya menjadi lebih rumit ketika anak laki-laki dan perempuan itu memutuskan untuk bertemu secara langsung.</p>
                </div>
              </div>
            </div>
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
    <div class="h2 m-mt-10 m-ml-5 m-font-bold">Top 5 Movies</div>
    <div v-for="movie in dataMovies" :key="movie" class="card; m-mx-2.5 m-my-2 m-bg-gray-100" style="width: 18%; height: 20; float: left;" >
      <div v-if="movie.rank==='1'|| movie.rank==='2' || movie.rank==='3'|| movie.rank==='4'|| movie.rank==='5'">
        <img :src="movie.image" style="width: 100%; height: 300px; margin: auto;">
        <div class="card-body">
            <img src="star.svg" width="20" style="float: left; margin-right: 10px;">{{movie.imDbRating}}
            <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.title}}</p>
            <router-link :to="{name:'detailMovie1', params: {rank: movie.rank}}" class="btn btn-warning m-mt-2">Details</router-link>
        </div>
      </div>
    </div>
    <div class="m-bottom-0 m-fixed m-w-full">
        <footer class="m-bg-black m-text-center lg:m-text-left">
            <div class="m-text-gray-400 m-text-center m-p-4">
                © 2022 Copyright:
                <a class="m-text-gray-400 hover:m-text-yellow-500 m-transition m-duration-300" href="about">Moviees</a>
            </div>
        </footer>
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
            fetch("https://imdb-api.com/en/API/Top250Movies/k_kzb59xch")
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