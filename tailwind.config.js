/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
    './app.vue',
    './node_modules/preline/preline.js',
    'node_modules/preline/dist/*.js',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg')",
      },
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'white': '#ffffff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    plugins: [
      require('preline/plugin'),
    ],
  }
}

