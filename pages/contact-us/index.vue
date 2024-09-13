<template>
    <Navbar />
    <nav class="bg-custom-image bg-cover bg-center h-[620px] w-full text-white bg-transparent  mybg p-4">


        <div class="flex items-center justify-center flex-grow pt-24">
            <div class="text-center px-4 md:px-8">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.</p>
            </div>
        </div>
    </nav>

    <!--  done-->

    <!--  create changes in contact-->
    <div class="flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-6 my-10 max-w-[800px] mx-auto items-center">
        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100 md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/contact-us.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Call us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    +1-917-609-4597
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/location.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Visit us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    USA, NewYork
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/whatsapp.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Mail Us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    info@zemy-group.com
                </p>

            </div>
        </div>



    </div>

    <footer class="mycol text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <!-- Get in Touch Section -->
                <div class="text-center md:text-left mb-6 md:mb-0">
                    <h5 class="text-xl font-bold mb-2">Get in Touch</h5>
                    <p class="mb-2">147 W 35th St, New York, NY 10001</p>
                    <p class="mb-2">Phone: +1 (917) 6094-597</p>
                    <p>Email: <a href="mailto:info@zemy-group.com" class="hover:text-gray-400">info@zemy-group.com</a>
                    </p>
                </div>
                <!-- Follow Us Section -->
                <div class="text-center md:text-left mt-4 md:mt-0">
                    <h5 class="text-xl font-bold mb-2">Follow Us</h5>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="#" class="text-white hover:text-blue-200">Facebook</a>
                        <a href="#" class="text-white hover:text-blue-200">Twitter</a>
                        <a href="#" class="text-white hover:text-blue-200">LinkedIn</a>
                    </div>
                </div>
            </div>
            <!-- Copyright Text -->
            <div class="text-center mt-6">
                <p>&copy; 2024 Zemy Group LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Navbar from '~/layouts/navbar.vue';


</script>



<style scoped>
.mybg {
    background-color: rgb(193, 216, 212);
}

.bg-custom-image {
    background-image: url('~/assets/images/med-1.jpg');
}

.mycol {
    background-color: rgb(158, 40, 41);
}
</style>