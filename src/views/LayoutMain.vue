<template>
    <div>
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
                        <a href="/" class="m-py-4 m-px-2 hover:m-text-yellow-500 m-font-semibold m-transition m-duration-300">Home</a>
                        <a href="movies" class="m-py-4 m-px-2 m-font-semibold hover:m-text-yellow-500 m-transition m-duration-300">Movies</a>
                        <a href="about" class="m-py-4 m-px-2 m-font-semibold hover:m-text-yellow-500 m-transition m-duration-300">About</a>
                        <div class="m-relative m-mx-auto m-text-gray-600">
                        <input class="m-bg-white m-h-10 m-px-5 m-pr-10 m-rounded-lg m-text-sm focus:m-outline-none"
                            type="search" name="search" placeholder="Cari di Moviees">
                        <button type="submit" class="m-absolute m-right-0 m-top-0 m-mt-3 m-mr-4"><a href="moviees/Search.vue">
                            <svg class="m-text-gray-600 m-h-4 m-w-4 m-fill-current" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                            width="512px" height="512px">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                            </a>
                        </button>
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
    name : "LayoutMain"
}
</script>