import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/homepage/Home";
import Catagorypage from "../pages/catagory/Catagorypage";
import Searce from "../pages/searce/Searce";
import Soppage from "../shop/Soppage";
import SingleProduct from "../shop/productDetails/SingleProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
        {
          path: "/",
    element: <Home/>,
    },
        {
          path: "/catagorie/:catagorieName",
    element: <Catagorypage/>,
    },
        {
          path: "search",
    element: <Searce/>,
    },
        {
          path: "shop",
    element: <Soppage/>,
    },
        {
          path: "/shop/:id",
    element: <SingleProduct/>,
    },
    //     {
    //       path: "/pages",
    // element: <div>Page</div>,
    // },
    //     {
    //       path: "/contact",
    // element: <div>Contact</div>,
    // },
     
    
]
  },
]);

export default router