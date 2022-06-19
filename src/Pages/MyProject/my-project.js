import { useState } from "react";
import items from "./../../Assets/Data/DataProject";
import { Menu } from "../../Components/Menu";

export const MyProject = () => {
  const [menuItem, setMenuItem] = useState(items);

  return (
    <>
      <div className="m-6 md:mx-10 md:my-12 space-y-8">
        <Menu menuItem={menuItem} />
      </div>
    </>
  );
};
