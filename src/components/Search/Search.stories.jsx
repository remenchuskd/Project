import React from "react";
import Search from "./Search";

export default {
  name: "Components/Search",
  component: Search,
  argTypes: {
    text:{control: 'text'},
  },
};

export const Default = ({ text }) => {
  let [isSearch, setIsSearch] = React.useState("");

  function whatSearch(event) {
    setIsSearch(event);
    return isSearch;
  }
  return (
    <Search text={"What do you want to learn?" || text} onChange={whatSearch} />
  );
};
