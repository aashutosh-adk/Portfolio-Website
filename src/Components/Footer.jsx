import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <div className="inline-block bg-blue-600/10 rounded-full px-6 py-3 mb-4">
            <h1 className="text-3xl font-bold">
              Contact<span className="text-blue-400">ME</span>
            </h1>
          </div>

          <p className="text-gray-400 mt-2">
            Feel free to reach out for collaborations, projects, or just to say hi.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-3 text-gray-200">
          <span>📞 +977-9865011833</span>
          <span>✉️ aashutoshadhikari82@gmail.com</span>
          <span>📍 Kathmandu, Nepal</span>
          <a
  href="https://www.linkedin.com/in/aashutosh-adhikari-383135310/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
>
  <FaLinkedin size={20} />
  LinkedIn
</a>

<a
  href="https://github.com/aashutosh-adk"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
>
  <FaGithub size={20} />
  GitHub
</a>
        </div>

      </div>
    </div>
  );
}