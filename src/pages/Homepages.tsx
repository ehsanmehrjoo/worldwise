import { Link } from "react-router-dom";
import PageNav from "../Component/PageNav";
import AppNav from "../Component/AppNav";
 function Homepages ()  {
  return (
    <div>
      <PageNav />
      <AppNav />
    <h1>
    WorldWise
    </h1>
    <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default Homepages;