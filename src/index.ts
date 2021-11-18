
import("react").then((react) => {
  import(/* webpackChunkName: 'react-dom' */ "react-dom").then((reactDom) => {
    import(/* webpackChunkName: 'app-main' */ "./App").then((App) =>
      reactDom.default.render(react.createElement(App.default), document.querySelector("#root"))
    );
  });
});
