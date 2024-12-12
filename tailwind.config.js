/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#005231",
        primaryHover: "#004827",
        dim: "#00150D",
        harvestaBlack: "#242424",
        harvestaSecondBlack: "#3F3D4D",
        tertiaryGreen: "rgba(1, 190, 114, 0.3)",
        tertiaryGreenHover: "rgba(1, 152, 91, 0.3)"
      },
      boxShadow: {
        "3xl": " 0 -10px 25px -10px rgba(0, 0, 0, 0.75)",
        "userSignup": "0px 0px 14px 15px rgba(0, 0, 0, 0.25)",
        marketCustom: "0px 4px 16.66px 0px rgba(2, 2, 2, 0.15)",
        "uploadRiderShadow" : " 0px 5.12px 25.37px -10.25px #00000040;"
      },
      width  : {
        'size': "calc(50% + 25px)",
        'marketcards': 'calc(33.33% - .725rem)',
      },
      dropShadow: {
        'custom':  "0px 4px 8px 0px rgba(0, 64, 216, 0.30)",
        
      },
      backgroundImage: {
        "faq-pattern":
          "url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957971/Greencloud_bbihtg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        soon: "url('/images/soon.png')",
        soonGradient: "linear-gradient(180deg, #FFFFFF 14%, rgba(255, 255, 255, 0) 100%)", 

        careerTile: "linear-gradient(180deg, rgba(1, 190, 114, 0.3), rgba(1, 190, 114, 0.12))",
        careerGradient: "url('/images/Vector.png')",
        careerGradient2: "url('/images/Vector (1).png')",
        marketSec1: "url('/images/Rectangle 1.png')",
      },
      height: {
        "max": "max-content",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans"],
        secondary: ['Rubik Wet Paint'],
        rider: ['Helvetica'],
        opensans: ["Open Sans"],
        career: ['Headland One'],
        soon: ["Pacifico"],
        soon2: ["Poppins"],
        soonNumbers: ["Digital Numbers"],
      },

      animation: {
        iconBounce: "iconBounce 1s ease-in-out infinite",
      },
      
      keyframes: {
        iconBounce: {
          "0%, 40%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10%)" },
        },
      },
    },
  },

  plugins: [],
}   
