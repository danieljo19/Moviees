<template>
<div>
    <link href="/dist/output.css" rel="stylesheet">
    <nav class="bg-transparent">
      <div class="max-w-5xl mx-auto px-2">
				<div class="flex justify-between">
						<div>
							<!-- Website Logo -->
							<a href="" class="flex items-center py-4 px-2">
								<img src="logo-moviees.png" width="50" alt="Logo" class="h-8 w-8 mr-2">
								<span class="font-semibold text-gray-500 text-lg">Moviees</span>
							</a>
						</div>
						<!-- Item Navbar -->
						<div class="hidden md:flex items-center space-x-1">
							<a href="home" class="py-4 px-2 text-green-500  border-green-500 font-semibold ">Home</a>
							<a href="trailer" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Trailer</a>
							<a href="movies" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Movies</a>
						</div>
        </div>
      </div>
    </nav>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ml-50 mt-10">
    <div class="carousel-item active">
      <div class="img-container">
        <img src="2.jpg">
      </div>
    </div>
    <div class="carousel-item">
      <div class="img-container">
        <img src="one.jpg" >
      </div>
    </div>
    <div class="carousel-item">
       <div class="img-container">
        <img src="2.jpg" >
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
</div>


</template>

<script>
export default 
{
  name: 'HelloWorld',
  props: 
  {
    msg: String
  },
}
</script>

