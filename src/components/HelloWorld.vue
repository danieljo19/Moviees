<template>
  <link href="/dist/output.css" rel="stylesheet">
  <nav class="m-bg-black">
    <div class="m-max-w-5xl m-mx-auto m-px-2">
      <div class="m-flex m-justify-between">
        <div>
          <!-- Website Logo -->
          <a href="" class="m-flex m-items-center m-py-4 m-px-2">
            <img src="logo-moviees2.png" height="50" alt="Logo" class="m-h-8 m-mr-2">
          </a>
        </div>
        <!-- Item Navbar -->
        <div class="hidden md:m-flex m-items-center m-space-x-1 text-white">
          <a href="home" class="m-py-4 m-px-2 m-text-yellow-400 m-font-semibold ">Home</a>
          <a href="trailer" class="m-py-4 m-px-2 m-font-semibold hover:m-text-green-500 m-transition m-duration-300">Trailer</a>
          <a href="movies" class="m-py-4 m-px-2 m-font-semibold hover:m-text-green-500 m-transition m-duration-300">Movies</a>
          <div class="m-relative m-mx-auto m-text-gray-600">
            <input class="m-bg-white m-h-10 m-px-5 m-pr-16 m-rounded-lg m-text-sm focus:m-outline-none"
              type="search" name="search" placeholder="Cari di Moviees">
            <button type="submit" class="m-absolute m-right-0 m-top-0 m-mt-5 m-mr-4">
              <svg class="m-text-gray-600 m-h-4 m-w-4 m-fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
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