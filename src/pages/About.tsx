import React from "react";
import myPhoto from "../images/giteaa.jpg";
import barcaLogo from "../images/visca.jpg"; // logo Barca untuk background

const About: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #0a1e5a, #7c0a02)",
      }}
    >
      {/* LOGO BARCA SAMAR */}
      <img
        src={barcaLogo}
        alt="Background FC Barcelona"
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none"
        style={{
          zIndex: 0,
          filter: "blur(1px)",
          transform: "scale(1.2)",
        }}
      />

      {/* KONTEN UTAMA */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start max-w-7xl w-full space-y-8 md:space-y-0 md:space-x-12">

        {/* ABOUT ME DI KIRI */}
        <div className="flex-1 text-yellow-200 leading-relaxed text-justify md:text-right">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-md">About Me 💫</h3>
          <p className="text-lg italic">
            Hi! I’m <b>Gita Gloria Sabatini Alaidi</b> — a quiet soul at first, but once I get comfortable… 
            I can be the loudest in the room 🤭 I love traveling to peaceful places, spending time with kids, 
            and finding beauty in simple moments.
          </p>
        </div>

        {/* FOTO DI TENGAH */}
        <div className="flex-1 flex justify-center md:justify-center">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
            <img
              src={myPhoto}
              alt="Gita Gloria Sabatini Alaidi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DATA DIRI DI KANAN */}
        <div className="flex-1 text-yellow-300 leading-relaxed md:text-left">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-3 drop-shadow-lg">
            Gita Gloria Sabatini Alaidi
          </h2>

          <p className="italic mb-6 text-lg text-yellow-200">
            In a complicated relationship with TypeScript 🙃
          </p>

          <ul className="space-y-2 text-xl italic text-yellow-100">
            <li><b>Nama Lengkap:</b> Gita Gloria Sabatini Alaidi</li>
            <li><b>NIM:</b> 105012310009</li>
            <li><b>Fakultas:</b> Ilmu Komputer</li>
            <li><b>Jurusan:</b> Sistem Informasi</li>
          </ul>

          
        </div>
      </div>
    </div>
  );
};

export default About;
