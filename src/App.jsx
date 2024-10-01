
import "./App.css";
import Carousel from "./components/Carousel.jsx";
import Features from "./components/Features.jsx";
import AboutCompany from "./components/AboutCompany.jsx";
import OurServices from "./components/OurServices.jsx";
import FAQs from "./components/FAQs.jsx";
import Blog from "./components/Blog.jsx";
import OurTeam from "./components/OurTeam.jsx";
import CustomerReview from "./components/CustomerReview.jsx";
import OurClients from "./components/OurClients.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Contact } from "./components/Contact.jsx";
import CloudServices from "./components/CloudServices"; 
import DigitalMarketing from "./components/DigitalMarketing";
import EcommerceDevelopment from "./components/EcommerceDevelopment"; 
import Career from "./components/Career.jsx";
import EmailServices from "./components/EmailServices.jsx";
import NetworkServices from "./components/NetworkServices.jsx";
import SoftwareDevelopment from "./components/SoftwareDevelopment.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* Main Routes */}
        <Route index element={
          <>
            <div className="main-content bg-[#F2F5F9] flex flex-col items-center">
              <Carousel />
              <Features />
              <AboutCompany />
              <OurClients />
              <OurServices />
              <FAQs />
              <Blog />
              <OurTeam />
              <CustomerReview />
            </div>
          </>
        } />
        
        {/* Service Routes */}
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/services/email-services" element={<EmailServices />} />
        <Route path="/services/network-services" element={<NetworkServices />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />

        {/* Pages Routes */}
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages/our-teams" element={<OurTeam />} /> 
        <Route path="/pages/career" element={<Career />} /> 
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/faqs" element={<FAQs />} /> 
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;