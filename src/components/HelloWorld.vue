<template>
<div>
    <link href="/dist/output.css" rel="stylesheet">
    <nav class="m-bg-transparent">
      <div class="m-max-w-5xl m-mx-auto m-px-2">
				<div class="m-flex m-justify-between">
						<div>
							<!-- Website Logo -->
							<a href="" class="m-flex m-items-center m-py-4 m-px-2">
								<img src="logo-moviees.png" width="50" alt="Logo" class="m-h-8 m-w-8 m-mr-2">
								<span class="m-font-semibold m-text-gray-500 m-text-lg">Moviees</span>
							</a>
						</div>
						<!-- Item Navbar -->
						<div class="hidden md:m-flex m-items-center m-space-x-1">
							<a href="home" class="m-py-4 m-px-2 m-text-green-500  m-border-green-500 m-font-semibold ">Home</a>
							<a href="trailer" class="m-py-4 m-px-2 m-text-gray-500 m-font-semibold hover:m-text-green-500 m-transition m-duration-300">Trailer</a>
							<a href="movies" class="m-py-4 m-px-2 m-text-gray-500 m-font-semibold hover:m-text-green-500 m-transition m-duration-300">Movies</a>
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

