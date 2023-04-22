import { r as react, j as jsx, c as addHmrIntoView, d as createRoot } from "./_virtual_reload-on-update-in-view.js";
function App() {
  react.exports.useEffect(() => {
    console.log("content view loaded");
  }, []);
  return /* @__PURE__ */ jsx("div", {
    className: "content-view",
    children: "content view"
  });
}
addHmrIntoView("pages/content");
const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-root";
document.body.append(root);
createRoot(root).render(/* @__PURE__ */ jsx(App, {}));
