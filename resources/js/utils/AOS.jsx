// Import library AOS dan style CSS-nya
import AOS from "aos";
import "aos/dist/aos.css";

const MYAOS = () => {
    return AOS.init({
        duration: 800,
        once: true,
        offset: 300,
        disable: "phone",
    });
};

export default MYAOS;
