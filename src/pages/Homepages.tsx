import { Link } from "react-router-dom";
import PageNav from "../Component/PageNav";
 function Homepages ()  {
  return (
    <div>
      <PageNav />
    <h1>
    WorldWise
    </h1>
    <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default Homepages;