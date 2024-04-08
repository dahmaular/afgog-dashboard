import {
  Airplay,
  BarChart,
  Box,
  Cloud,
  Command,
  FileText,
  FolderPlus,
  Grid,
  Home,
  Layers,
  Server,
  Users,
} from "react-feather";

const MENUITEMS = [
  {
    title: "Dashboard",
    icon: <Home />,
    menu: [
      {
        title: "Home",
        url: `${process.env.PUBLIC_URL}/dashboard/`,
        type: "link",
      },
      // {
      //   title: "Product List",
      //   type: "link",
      //   url: `${process.env.PUBLIC_URL}/ECommerce/ProductList`,
      // },
      // {
      //   title: "Order History",
      //   type: "link",
      //   url: `${process.env.PUBLIC_URL}/ECommerce/OrderHistory`,
      // },
      // {
      //   title: "Invoice",
      //   type: "link",
      //   url: `${process.env.PUBLIC_URL}/ECommerce/Invoice`,
      // },
      // {
      //   title: "Payment Details",
      //   type: "link",
      //   url: `${process.env.PUBLIC_URL}/ECommerce/PaymentDetails`,
      // },
    ],
  },

  {
    title: "Pages",
    icon: <Grid />,
    menu: [
      {
        title: "Home",
        menu: [
          {
            title: "Banner Section",
            bookmark: true,
            type: "link",

            url: `${process.env.PUBLIC_URL}/home/banner`,
          },
          {
            title: "Services Section",
            type: "link",
            url: `${process.env.PUBLIC_URL}/home/service`,
          },
          {
            title: "About Us Section",
            type: "link",
            url: `${process.env.PUBLIC_URL}/home/about`,
          },
          {
            title: "Contact Section",
            type: "link",
            url: `${process.env.PUBLIC_URL}/home/contact`,
          },
          // {
          //   title: "Wishlist",
          //   type: "link",
          //   url: `${process.env.PUBLIC_URL}/ECommerce/Wishlist`,
          // },
          // {
          //   title: "Checkout",
          //   type: "link",

          //   url: `${process.env.PUBLIC_URL}/ECommerce/Checkout`,
          // },
          // {
          //   title: "Pricing",
          //   type: "link",

          //   url: `${process.env.PUBLIC_URL}/ECommerce/Pricing`,
          // },
        ],
      },
      // {
      //   title: "Service",
      //   menu: [
      //     {
      //       title: "User Profile",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-profile`,
      //     },
      //     {
      //       title: "User Edit",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-edit`,
      //     },
      //     {
      //       title: "User Cards",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-cards`,
      //     },
      //   ],
      // },
      // {
      //   title: "About Us",
      //   menu: [
      //     {
      //       title: "User Profile",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-profile`,
      //     },
      //     {
      //       title: "User Edit",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-edit`,
      //     },
      //     {
      //       title: "User Cards",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-cards`,
      //     },
      //   ],
      // },
      // {
      //   title: "Contact",
      //   menu: [
      //     {
      //       title: "User Profile",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-profile`,
      //     },
      //     {
      //       title: "User Edit",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-edit`,
      //     },
      //     {
      //       title: "User Cards",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/user/user-cards`,
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "Profile",
    icon: <Users />,
    menu: [
      {
        title: "Users",
        menu: [
          {
            title: "User Profile",
            type: "link",
            url: `${process.env.PUBLIC_URL}/user/user-profile`,
          },
          {
            title: "User Edit",
            type: "link",
            url: `${process.env.PUBLIC_URL}/user/user-edit`,
          },
          // {
          //   title: "User Cards",
          //   type: "link",
          //   url: `${process.env.PUBLIC_URL}/user/user-cards`,
          // },
        ],
      },
      // {
      //   title: "Editors",
      //   menu: [
      //     {
      //       title: "Ck Editor",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/editor/ck-editor`,
      //     },
      //     {
      //       title: "MDE Editor",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/editor/mde-editor`,
      //     },
      //     {
      //       title: "ACE Code Editor",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/editor/ace-code-editor`,
      //     },
      //   ],
      // },

      // {
      //   url: `${process.env.PUBLIC_URL}/apps/social-app`,
      //   type: "link",
      //   title: "SocialApp",
      // },
      // {
      //   url: `${process.env.PUBLIC_URL}/apps/todo`,
      //   type: "link",
      //   title: "To-do",
      // },
      // {
      //   url: `${process.env.PUBLIC_URL}/apps/FAQ`,
      //   type: "link",
      //   title: "FAQ",
      // },
      // {
      //   url: `${process.env.PUBLIC_URL}/apps/knowledge-base`,
      //   type: "link",
      //   title: "Knowledgebase",
      // },
      // {
      //   url: `${process.env.PUBLIC_URL}/apps/support-ticket`,
      //   type: "link",
      //   title: "Support Ticket",
      // },
    ],
  },

  // {
  //   title: "Others",
  //   icon: <Layers />,
  //   menu: [
  //     {
  //       title: "Search Pages",
  //       menu: [
  //         {
  //           type: "link",
  //           title: "Search Website",
  //           url: `${process.env.PUBLIC_URL}/others/search-website`,
  //         },
  //         {
  //           title: "Search images",
  //           type: "link",
  //           url: `${process.env.PUBLIC_URL}/others/search-images`,
  //         },
  //         {
  //           title: "Search Video",
  //           type: "link",
  //           url: `${process.env.PUBLIC_URL}/others/search-video`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Error Page",
  //       menu: [
  //         {
  //           title: "Error 400",
  //           type: "link",
  //           url: `${process.env.PUBLIC_URL}/Others/Error400`,
  //         },
  //         {
  //           title: "Error 401",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/Error401`,
  //         },
  //         {
  //           title: "Error 403",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/Error403`,
  //         },
  //         {
  //           title: "Error 404",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/Error404`,
  //         },
  //         {
  //           title: "Error 500",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/Error500`,
  //         },
  //         {
  //           title: "Error 503",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/Error503`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Authentication",
  //       menu: [
  //         {
  //           title: "Login Sample",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/login`,
  //         },
  //         {
  //           title: "Login With Bg image",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/login-bg-img`,
  //         },
  //         {
  //           title: "Login With Bg Video",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/login-bg-video`,
  //         },
  //         {
  //           title: "Register Simple ",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/register-simple`,
  //         },
  //         {
  //           title: "Register with bg image",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/register-with-bg-image`,
  //         },
  //         {
  //           title: "Register With bg Video ",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/register-With-bg-video`,
  //         },
  //         {
  //           title: "Unlock User",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/unlock-user`,
  //         },
  //         {
  //           title: "Forget Password",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/forget-password`,
  //         },
  //         {
  //           title: "Reset Password ",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/auth/reset-password`,
  //         },
  //         {
  //           title: "Maintence ",

  //           type: "link",
  //           url: `${process.env.PUBLIC_URL}/auth/maintenance`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Coming Soon",

  //       menu: [
  //         {
  //           title: "Coming Simple",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/ComingSimple`,
  //         },
  //         {
  //           title: "Coming with Bg Video",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/ComingwithBgVideo`,
  //         },
  //         {
  //           title: "Coming With Bg Image",
  //           type: "link",

  //           url: `${process.env.PUBLIC_URL}/Others/ComingWithBgImage`,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default MENUITEMS;
