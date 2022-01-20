<template>
    <div>
        <layout-main> </layout-main>
       
        <div class="container m-mb-20">
            <div class="row section-separator align-items-center m-mt-10">
                <div class="col-0.5"></div>
                <div class="h3 m-font-bold">About Moviees</div>
                <hr>
                <div class="col-3 m-mt-10">
                    <img src="logo-moviees2.png" alt="">
                </div>
                <div class="col-8 m-pl-10 m-mt-8">Moviees adalah website yang menyediakan berbagai macam rekomendasi film/movies. Moviees dibuat pada tahun 2022 dan saat ini telah dipakai oleh 10.000 pengguna. Selain itu, Moviees selalu mengupdate rekomendasi film setiap harinya.</div>
                <div class="col-0.5"></div>
                <div class="h3 m-mt-20 m-font-bold">Our Team</div>
                <hr>
            </div>
            <li>Daniel Johan</li>
            <li>Fellyca Effendi</li>
            <li>Jasen Jonathan</li>
            <li>Kevin Andreas</li>
            <li>San Gabriel Vanness K.E.</li>
            <li>Sinshevan Viswanatan K.E.</li>
        </div>
    </div>
</template>

<script>
import LayoutMain from "@/views/LayoutMain"
export default {
    components: {
        LayoutMain
    }
}
</script>
<style scoped>
    li{
        margin: 10px 0px;
    }
</style>