/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto, sans-serif"
      },
      colors: {
        "btn-bg":"hsla(0,0%,100%,0.2)",
        "btn-bg-hover": "hsla(0,0%,100%,0.4)",
        "dark-blue": "#0a2540",
        "pink-gradient": "#ff333d",
        "purple-gradient": "#a960ee",
        "yellow-gradient": "#ffcb57"
      },
      transformOrigin: {
        "0": "0"
      },
      gridTemplateColumns: {
        "2-col": "2fr 1fr",
        "fluid": "repeat(auto-fill, minmax(248px, 1fr))"
      },
      backgroundImage: {
        "desk": "linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)"
      },
      maxWidth: {
        "limit": "1080px",
        "0\.85": "85%"
      },
      minWidth: {
        "60": "240px",
        "58": "929px",
      },
      spacing: {
        "1\.2": "5px",
        "1\.7": "7px",
        "25": "100px"
      },
      width: {
        "6\.5": "26px",
        "58": "929px",
      },
      height: {
        "32": "32.5rem",
        "58": "929px",
        "fluid": "40vw"
      },
      margin: {
        "31": "126px"
      },
      padding: {
        "7/10": "70%"
      }
    },
  },
  plugins: [],
}
