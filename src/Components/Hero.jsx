import { ChevronDown, CodeXml, Sparkles } from "lucide-react";
import { useState } from "react";
import { codeExamples, floatingCards } from "../data/CodeExample";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function Hero() {
  const [activeTab, setActiveTab] = useState("project1");

  return (
    <section id="Home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex space-x-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
              <CodeXml className="w-4 h-4 text-blue-400 items-center" />
              <span className="text-xs sm:text-sm text-blue-300">
                FrontEnd Developer
              </span>
              
           
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Enthusiastic
              </span>

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Fast Learner
              </span>

              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Ambitious
              </span>
            </h1>
          </div>

          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] w-full border border-white/30">
                {/* IDE Header */}
                <div className="flex items-center justify-between sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>

                  <span className="text-xs sm:text-sm text-gray-300">
                    Projects
                  </span>

                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>

                <div className="p-2 sm:p-4 relative h-full">
                  {/* File Tabs */}
                  <div className="flex space-x-0.5 sm:space-x-1 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("project1")}
                      className={`px-3 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "project1"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Project1
                    </button>

                    <button
                      onClick={() => setActiveTab("project2")}
                      className={`px-3 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "project2"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Project2
                    </button>

                    <button
                      onClick={() => setActiveTab("project3")}
                      className={`px-3 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "project3"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Project3
                    </button>
                  </div>

                  {/* Project Content */}
                        <div className="relative overflow-hidden h-[280px] rounded-lg">
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={nightOwl}
                                    customStyle={{
                                    margin: 0,
                                    height: "100%",
                                    width: "100%",
                                    fontSize: "14px",
                                    borderRadius: "8px",
                                    textColor:"white",
                                    }}
                                >
                                    {codeExamples[activeTab]}
                                </SyntaxHighlighter>
                         </div>
                </div>
              </div>

              {/* Floating Card */}
              <div
                className={`hidden lg:block absolute top-1/2 -right-20 translate-y-28 w-80 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${floatingCards[activeTab].iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {floatingCards[activeTab].icon}
                  </div>

                  <span
                    className={`text-sm font-medium ${floatingCards[activeTab].textColor}`}
                  >
                    {floatingCards[activeTab].title}
                  </span>
                </div>

                <div
                  className={`text-sm text-left ${floatingCards[activeTab].contentColor}`}
                >
                  {floatingCards[activeTab].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}