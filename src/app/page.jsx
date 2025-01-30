"use client";
import React from "react";
import NewComponent from "../components/new-component";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [showResume, setShowResume] = useState(false);
  const [resumeUrl] = useState(
    "https://ucarecdn.com/26da2566-2944-453d-92bf-0581dc48c5ba/-/format/auto/"
  );
  const handleHireMe = () => {
    const emailSubject = "Interview Invitation for Data Engineering Position";
    const emailBody = "";

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    window.location.href = `mailto:babamalik206@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-6 h-3 border-2 border-[#2d2e32] rounded-full transform rotate-[30deg]"
                    style={{ animation: "infiniteTop 2s infinite" }}
                  ></div>
                  <div
                    className="w-6 h-3 border-2 border-[#2d2e32] rounded-full transform -rotate-[30deg] absolute"
                    style={{ animation: "infiniteBottom 2s infinite" }}
                  ></div>
                </div>
              </div>
              <div className="text-2xl font-bold font-montserrat text-[#2d2e32]">
                BM
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-montserrat capitalize ${
                    activeSection === item ? "text-[#2d2e32]" : "text-[#767676]"
                  } hover:text-[#2d2e32] transition-colors`}
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4">
                <NewComponent onClick={handleHireMe} label="Hire Me" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section id="home" className="pt-24 md:pt-32 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8">
            <div className="w-full order-2 md:order-1 md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#2d2e32] mb-4 text-center md:text-left">
                Data Engineer
              </h1>
              <p className="text-[#767676] text-lg mb-6 font-montserrat text-center md:text-left">
                Hi, I'm{" "}
                <span className="inline-flex gap-2">
                  <span className="inline-flex">
                    {"Baba".split("").map((char, index) => (
                      <span
                        key={`baba-${index}`}
                        className="font-bold text-black"
                        style={{
                          animation: `animateChar${index} 2s infinite ${
                            index * 0.1
                          }s`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex">
                    {"Malik".split("").map((char, index) => (
                      <span
                        key={`malik-${index}`}
                        className="font-bold text-black"
                        style={{
                          animation: `animateChar${index + 4} 2s infinite ${
                            (index + 4) * 0.1
                          }s`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
                , a Data Engineer specializing in building scalable data
                pipelines using Azure, Big Data tools, Python, PySpark, and SQL.
                Skilled in data processing, validation, and quality management.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#2d2e32]"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/BabaMalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#2d2e32]"
                >
                  <i className="fab fa-github"></i>
                </a>
                <button
                  onClick={handleHireMe}
                  className="text-2xl text-[#2d2e32] hover:text-[#4a90e2] transition-colors"
                >
                  <i className="fas fa-envelope"></i>
                </button>
                <a href="tel:+917702026606" className="text-2xl text-[#2d2e32]">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
            <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center">
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#2d2e32] shadow-xl transition-transform hover:scale-105 duration-300">
                <img
                  src="https://ucarecdn.com/a364874a-c638-4b33-9fca-571881a65657/-/format/auto/"
                  alt="Baba Malik - Data Engineer at NJIT campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-6">
                Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-[#2d2e32] mb-4">
                    Programmer Analyst at Cognizant
                  </h3>
                  <ul className="space-y-4 text-[#767676] font-montserrat">
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-code-branch mt-1 text-[#2d2e32]"></i>
                      <span>
                        Built and maintained data pipelines using Azure,
                        ensuring efficient data processing and transformation
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-database mt-1 text-[#2d2e32]"></i>
                      <span>
                        Created and optimized database schemas using Spark
                        Enterprise Architect for improved query performance
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-sync mt-1 text-[#2d2e32]"></i>
                      <span>
                        Implemented real-time data synchronization and loading
                        with Change Data Capture (CDC)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-tachometer-alt mt-1 text-[#2d2e32]"></i>
                      <span>
                        Enhanced database performance through advanced modeling
                        techniques
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-users mt-1 text-[#2d2e32]"></i>
                      <span>
                        Mentored junior engineers on big data architecture and
                        best practices
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fas fa-handshake mt-1 text-[#2d2e32]"></i>
                      <span>
                        Led technical discussions to align data solutions with
                        business requirements
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-6">
                Education
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-graduation-cap mt-1 text-[#2d2e32] text-xl"></i>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#2d2e32]">
                      Master in Data Science
                    </h3>
                    <p className="text-[#767676] font-montserrat">
                      New Jersey Institute of Technology
                    </p>
                    <p className="text-[#767676] font-montserrat">Dec 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-graduation-cap mt-1 text-[#2d2e32] text-xl"></i>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#2d2e32]">
                      Bachelor in Computer Science
                    </h3>
                    <p className="text-[#767676] font-montserrat">
                      Narasaraopeta Engineering College
                    </p>
                    <p className="text-[#767676] font-montserrat">Sep 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 col-span-2">
              <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-6">
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 bg-[#f8f9fa] p-4 rounded-lg">
                  <i className="fas fa-certificate text-[#2d2e32] text-2xl"></i>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#2d2e32]">
                      Microsoft Certified Azure Data Engineer
                    </h3>
                    <p className="text-[#767676] font-montserrat">Microsoft</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-[#f8f9fa] p-4 rounded-lg">
                  <i className="fas fa-certificate text-[#2d2e32] text-2xl"></i>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#2d2e32]">
                      Databricks Certified Data Engineer Associate
                    </h3>
                    <p className="text-[#767676] font-montserrat">Databricks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-8">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="font-bold font-montserrat text-[#2d2e32] mb-4 text-center">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      PySpark
                    </span>
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      SQL
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="font-bold font-montserrat text-[#2d2e32] mb-4 text-center">
                    Cloud Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      Azure Data Factory
                    </span>
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      Azure Databricks
                    </span>
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      Azure Synapse
                    </span>
                    <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                      Azure Functions
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-4 text-center">
                  ML Techniques
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Logistic Regression
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Decision Trees
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Random Forests
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Linear Regression
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    SVM
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    RNN
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-4 text-center">
                  Big Data Tools
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Apache Hadoop
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Apache Spark
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Apache Kafka
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Apache Airflow
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Databricks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-8">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animation: "projectHover 3s infinite" }}
            >
              <div className="p-4">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-2">
                  Retail Sales Forecasting
                </h3>
                <p className="text-[#767676] font-montserrat mb-4">
                  Built machine learning models to predict daily sales for
                  retail stores. Improved forecasting accuracy by 15% using SVM
                  and RNNs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    ML
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    SVM
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    RNN
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animation: "projectHover 3s infinite 0.5s" }}
            >
              <div className="p-4">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-2">
                  Kansas City Crime Analysis
                </h3>
                <p className="text-[#767676] font-montserrat mb-4">
                  Developed a Tableau dashboard for crime data analysis,
                  enabling data-driven decisions for resource distribution and
                  crime prevention.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Tableau
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Data Analysis
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Visualization
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animation: "projectHover 3s infinite 1s" }}
            >
              <div className="p-4">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-2">
                  Real-time Data Pipeline Architecture
                </h3>
                <p className="text-[#767676] font-montserrat mb-4">
                  Designed and implemented a scalable data pipeline processing
                  1TB+ daily data using Apache Kafka, Spark Streaming, and Azure
                  Data Lake. Reduced processing time by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Apache Kafka
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Spark Streaming
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Azure
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animation: "projectHover 3s infinite 1.5s" }}
            >
              <div className="p-4">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-2">
                  Customer Churn Prediction Model
                </h3>
                <p className="text-[#767676] font-montserrat mb-4">
                  Developed an ML model using XGBoost to predict customer churn
                  with 85% accuracy. Implemented feature engineering and model
                  deployment using MLflow.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    XGBoost
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    MLflow
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animation: "projectHover 3s infinite 2s" }}
            >
              <div className="p-4">
                <h3 className="font-bold font-montserrat text-[#2d2e32] mb-2">
                  Enterprise Data Lake Migration
                </h3>
                <p className="text-[#767676] font-montserrat mb-4">
                  Led the migration of on-premises data warehouse to Azure Data
                  Lake, implementing data pipelines using Azure Data Factory and
                  Databricks. Achieved 60% cost reduction and improved data
                  processing efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Azure Data Factory
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    Databricks
                  </span>
                  <span className="px-3 py-1 bg-[#2d2e32] text-white rounded-full text-sm">
                    PySpark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat text-[#2d2e32] mb-8">
            Contact Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl text-[#2d2e32]"></i>
                <div>
                  <h3 className="font-bold font-montserrat text-[#2d2e32]">
                    Email
                  </h3>
                  <p className="text-[#767676] font-montserrat">
                    babamalik206@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-2xl text-[#2d2e32]"></i>
                <div>
                  <h3 className="font-bold font-montserrat text-[#2d2e32]">
                    Phone
                  </h3>
                  <p className="text-[#767676] font-montserrat">
                    +1 (862)-231-9081
                    <br />
                    +91 7893156278
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-2xl text-[#2d2e32]"></i>
                <div>
                  <h3 className="font-bold font-montserrat text-[#2d2e32]">
                    Location
                  </h3>
                  <p className="text-[#767676] font-montserrat">
                    United States, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#2d2e32] text-white py-8">
        <div className="container mx-auto px-4 text-center font-montserrat">
          <p>© 2025 Your Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold font-montserrat">Resume</h2>
              <button onClick={() => setShowResume(false)} className="text-2xl">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="w-full h-[80vh] overflow-auto">
              <img
                src={resumeUrl}
                alt="Baba Malik's Resume"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes highlight {
          0% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          50% { transform: scale(1.03); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2); }
          100% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        }
        
        @keyframes projectHover {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar0 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-15px) rotate(10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px) rotate(-10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar1 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px) rotate(-10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-15px) rotate(10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar2 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-5px) rotate(10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-10px) rotate(-10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar3 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-15px) rotate(-10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px) rotate(10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar4 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px) rotate(10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-15px) rotate(-10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar5 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-5px) rotate(-10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-10px) rotate(10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar6 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-15px) rotate(10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px) rotate(-10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar7 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px) rotate(-10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-15px) rotate(10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes animateChar8 {
          0% { transform: translateY(0); }
          25% { transform: translateY(-5px) rotate(10deg); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-10px) rotate(-10deg); }
          100% { transform: translateY(0); }
        }

        @keyframes infiniteTop {
          0% { transform: rotate(30deg) scale(1); }
          50% { transform: rotate(30deg) scale(1.2); }
          100% { transform: rotate(30deg) scale(1); }
        }

        @keyframes infiniteBottom {
          0% { transform: rotate(-30deg) scale(1.2); }
          50% { transform: rotate(-30deg) scale(1); }
          100% { transform: rotate(-30deg) scale(1.2); }
        }

        @keyframes nameHighlight {
          0% { color: #2d2e32; transform: scale(1); }
          50% { color: #4a90e2; transform: scale(1.1); }
          100% { color: #2d2e32; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;