import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineX } from "react-icons/ai";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 text-gray-800 py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center">
          Connect with me on social media or drop a message through any platform
          below.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlineMail size={24} />
            <a
              href="mailto:111harisawan@gmail.com"
              className="ml-2 hover:underline"
            >
              111harisawan@gmail.com
            </a>
          </div>

          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlinePhone size={24} />
            <a href="tel:+92 3132003571" className="ml-2 hover:underline">
              +92 313 2003571
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a
            href="https://github.com/harisawan27"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Github"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://x.com/harisawan27"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Twitter"
          >
            <AiOutlineX size={40} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61558545486623"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={40} />
          </a>
          <a
            href="https://www.instagram.com/mharisawan27"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/m-haris-awan/"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
