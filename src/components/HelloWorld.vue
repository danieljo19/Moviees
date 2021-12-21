<template>
<div>
    <link href="/dist/output.css" rel="stylesheet">
    <nav id="home" class="navbar navbar-expand-lg navbar-dark fixed-top pt-1" style="background-color: rgb(10, 154, 250);">
        <div class="container text-xl">
          <a class="navbar-brand" href="#home">Moviees</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
              <a class="nav-link" href="#trailer">Trailer</a>
              <a class="nav-link" href="#movie-list">Movie List</a>
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
  <div class="carousel-inner">
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

