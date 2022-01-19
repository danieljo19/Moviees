<template>
    <div>
        <nav class="m-bg-black">
            <div class="m-max-w-5xl m-mx-auto m-px-2">
                <div class="m-flex m-justify-between">
                    <div>
                        <!-- Website Logo -->
                        <a href="/" class="m-flex m-items-center m-py-4 m-px-2">
                        <img src="logo-moviees2.png" height="50" alt="Logo" class="m-h-8 m-mr-2">
                        </a>
                    </div>
                    <!-- Item Navbar -->
                    <div class="hidden md:m-flex m-items-center m-space-x-1 text-white">
                        <a href="/" class="m-py-4 m-px-2 hover:m-text-yellow-500 m-font-semibold m-transition m-duration-300">Home</a>
                        <a href="movies" class="m-py-4 m-px-2 m-font-semibold hover:m-text-yellow-500 m-transition m-duration-300">Movies</a>
                        <a href="about" class="m-py-4 m-px-2 m-font-semibold hover:m-text-yellow-500 m-transition m-duration-300">About</a>
                        <div class="m-relative m-mx-auto m-text-gray-600">
                    
                        </div>
                    </div>
                </div>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <slot></slot>
                </main>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name : "LayoutMain",
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