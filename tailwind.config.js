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
        "yellow-gradient": "#ffcb57",
        "light-gray": "#F6F9FC",
        "accent": "#635bff",
        "accent-2": "#00d4ff",
        "title-color": "#0a2540",
        "pcolor": "#425466",
        "body-light": "#adbdcc"
      },
      transformOrigin: {
        "0": "0"
      },
      gridTemplateColumns: {
        "2-col": "2fr 1fr",
        "3-col-lg": "330px 519px 241px",
        "3-col": "253px 392px 201px",
        "fluid": "repeat(auto-fill, minmax(248px, 1fr))"
      },
      gridTemplateRows: {
        "4-col-lg": "90px 215px 128px 549px",
        "4-col": "70px 157px 97px 333px",
        "footer": "repeat(3, fit-content)"

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
        "fluid": "40vw",
        "near-full": "98%"
      },
      margin: {
        "31": "126px"
      },
      padding: {
        "7/10": "70%"
      },
      borderRadius: {
        "4xl": "30px",
        "5xl": "40px",
        "6xl": "50px"
      },
      skew: {
        "4": "4deg",
      },
      fontSize: {
        "15": "15px"
      }
    },
  },
  plugins: [],
}
