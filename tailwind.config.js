module.exports = {
  // 必要に応じてスタイルを反映するモード
  mode: "jit",
  // purge オプションを設定することで、ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行う
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
