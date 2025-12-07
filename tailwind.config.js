/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: "#000212", // Linear's deep black
                    card: "rgba(255, 255, 255, 0.05)",
                },
                primary: {
                    DEFAULT: "#5E6AD2",
                    glow: "rgba(94, 106, 210, 0.5)",
                },
                border: "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            },
            animation: {
                'spotlight': 'spotlight 2s ease .75s 1 forwards',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                spotlight: {
                    '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
                    '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
                },
                shimmer: {
                    from: { backgroundPosition: '0 0' },
                    to: { backgroundPosition: '-200% 0' },
                }
            }
        },
    },
    plugins: [],
}
