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

