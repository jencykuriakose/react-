// const heading=React.createElement
// ("h1",
// {id:"heading",xyz:"abc"},
// "hello world from react!");

const parent=React.createElement("div",{id:parent},[
React.createElement("div",{id:child},
React.createElement("h1",{},"i am from h1"))
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);