
const heading1 = React.createElement("h1", { id: "heading1" }, "heading1");

const heading2 = React.createElement("h2", { class: "abhi" }, "heading2");

const container = React.createElement("div", {}, [heading1, heading2]);

const root_1_2 = ReactDOM.createRoot(document.getElementById("root"))

root_1_2.render(container)
