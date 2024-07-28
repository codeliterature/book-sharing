import flowbitePlugin from 'flowbite/plugin'

// import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      fontFamily: {
        custom: ["DM Sans", "sans-serif"]
      },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#424242',
          600: '#303030',
          700: '#212121',
          800: '#121212',
          900: '#000000'
        }
        
      }
    }
	},

	plugins: [flowbitePlugin]
}