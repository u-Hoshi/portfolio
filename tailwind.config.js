module.exports = {
  // 必要に応じてスタイルを反映するモード
  mode: "jit",
  // purge オプションを設定することで、ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行う
  purge: ["./src/**/**/*.{js,ts,jsx,tsx}", "./src/**/**/**//*.{js,ts,jsx,tsx},/src/img/**.png"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        "text-black": "#384359",
        "text-green": "#008c8d",
        "back-green": "#6bc2c3",
        "back-black": "#262c3a",
        "progress-dark-green": "#c5eaea",
        "progress-thin-green": "#2bb9ba",
        "line-green": "#c5eaea",
      },
      height: {
        lg: "560px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
