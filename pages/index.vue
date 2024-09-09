<template>
  <Navbar />
  <div>
    <!-- Navigation -->



    <!-- Main Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 mybg">
      <!-- Text Section -->
      <div class="flex items-center justify-center p-8 bg-gray-100 mybg">
        <h4 class="text-[20px] font-bold leading-tight p-12">
          <span class="text-5xl pb-4">Revolutionized medicine</span> <br />Developing life-saving drugs, vaccines, and
          treatments that have extended and improved countless lives.
        </h4>
      </div>

      <!-- Image Section -->
      <div class="flex items-center justify-center bg-auto bg-no-repeat bg-center">
        <img src="~/assets/images/bg5.jpg" alt="Medical Background" class="object-cover h-full w-full">
      </div>
    </div>

    <!-- Services Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Our Medical Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="service.image" :alt="service.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ service.name }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <button @click="openModal(service)"
                class="mycol text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <!-- Image Section -->
      <div class="flex items-center justify-center">
        <img src="~/assets/images/bg7.jpg" alt="Medical Innovation"
          class="w-full h-auto object-cover rounded-lg shadow-md">
      </div>
      <!-- Text Section -->
      <div class="flex items-center justify-center p-4">
        <div class="max-w-lg text-center md:text-left">
          <h5 class="font-bold text-xl md:text-xl lg:text-xl mb-4">
            At the forefront of medical innovation, we are revolutionizing the field of medicine with cutting-edge drugs,
            vaccines, and treatments. Our pioneering solutions are not just advancing science but are crucial in saving
            lives and improving the quality of countless others. Join us in our mission to continue this life-changing
            journey and make a profound impact on global health.
          </h5>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-gray-100 rounded-lg shadow-md p-6">
            <p class="text-gray-600 mb-4">“{{ testimonial.feedback }}”</p>
            <p class="font-semibold text-gray-800">{{ testimonial.name }}</p>
            <p class="text-gray-500">{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="selectedService" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl w-full">
        <h2 class="text-2xl font-bold mb-4">{{ selectedService.name }}</h2>
        <img :src="selectedService.image" :alt="selectedService.name" class="w-full h-64 object-cover mb-4 rounded">
        <p class="text-gray-700 mb-4">{{ selectedService.fullDescription }}</p>
        <ul class="list-disc list-inside mb-4">
          <li v-for="feature in selectedService.keyFeatures" :key="feature" class="text-gray-600">
            {{ feature }}
          </li>
        </ul>
        <button @click="closeModal"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Close
        </button>
      </div>
    </div>
  </div>
  <div>

    <!-- Contact Form Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">We'd Love to Hear From You</h2>
        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input v-model="form.name" id="name" type="text" class="w-full p-3 border border-gray-300 rounded" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input v-model="form.email" id="email" type="email" class="w-full p-3 border border-gray-300 rounded"
              required>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 text-sm font-semibold mb-2">Message</label>
            <textarea v-model="form.message" id="message" rows="4" class="w-full p-3 border border-gray-300 rounded"
              required></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button type="submit" class="mycol text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
  <footer class="mycol text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Get in Touch Section -->
        <div class="text-center md:text-left mb-6 md:mb-0">
          <h5 class="text-xl font-bold mb-2">Get in Touch</h5>
          <p class="mb-2">147 W 35th St, New York, NY 10001</p>
          <p class="mb-2">Phone: +1 (917) 6094-597</p>
          <p>Email: <a href="mailto:info@zemy-group.com" class="hover:text-gray-400">info@zemy-group.com</a></p>
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
import { ref } from 'vue';
import Navbar from '~/layouts/navbar.vue';

const isMenuOpen = ref(false);
const selectedService = ref(null);

const services = [
  // Example services data
  { id: 1, name: 'Equipment Manufacturing', description: 'We manufacture a wide range of electronic equipment', image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg', fullDescription: 'Full description for service 1', keyFeatures: ['Feature 1', 'Feature 2'] },
  { id: 2, name: 'Medicine Manufacturing', description: 'We develop approved medications for use by the general public', image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg', fullDescription: 'Full description for service 2', keyFeatures: ['Feature 1', 'Feature 2'] },
  { id: 3, name: 'Genetic Research', description: 'We undertake research on behalf of clients to discover and correlate phenomena', image: 'https://images.pexels.com/photos/1059161/pexels-photo-1059161.jpeg', fullDescription: 'Full description for service 3', keyFeatures: ['Feature 1', 'Feature 2'] },
];

const testimonials = [
  // Example testimonials data
  { id: 1, name: 'John Doe', position: 'CEO, Company A', feedback: 'This service was outstanding and exceeded our expectations.' },
  { id: 2, name: 'Jane Smith', position: 'Manager, Company B', feedback: 'An amazing experience with professional staff and excellent results.' },
  { id: 3, name: 'Emily Johnson', position: 'Director, Company C', feedback: 'Highly recommended! The service provided was top-notch.' },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function openModal(service) {
  selectedService.value = service;
}

function closeModal() {
  selectedService.value = null;
}
const form = ref({
  name: '',
  email: '',
  message: '',
});

function handleSubmit() {
  // Handle form submission logic here, such as sending an email or storing the data
  console.log('Form submitted', form.value);

  // Clear form after submission
  form.value = {
    name: '',
    email: '',
    message: '',
  };
}

</script>

<style scoped>
.mybg {
  background-color: rgb(193, 216, 212);
}

.mycol {
  background-color: rgb(158, 40, 41);
}
</style>