// CurvedDivider.jsx - Versión Transición Orgánica
import React from "react";

const CurvedDivider = ({ 
  position = "bottom", // 'top' | 'bottom'
  colorTop = "#FFFFFF",    // Blanco (para Intro)
  colorBottom = "#0F2D44", // Azul petróleo (para About)
  height = 120,
  intensity = 0.6 // 0.1 a 1 (controla la curvatura)
}) => {
  const isTopPosition = position === "top";
  
  // Ajustamos la curvatura basada en la intensidad
  const waveIntensity = Math.min(Math.max(intensity, 0.1), 1);
  const waveHeight = waveIntensity * 100;

  return (
    <div style={{ 
      lineHeight: 0,
      backgroundColor: colorTop,
      marginBottom: isTopPosition ? 0 : `-${waveHeight * 0.2}px`,
      marginTop: isTopPosition ? `-${waveHeight * 0.2}px` : 0
    }}>
      <svg
        viewBox={`0 0 1200 ${waveHeight}`}
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: `${height}px`,
          display: "block",
          transform: isTopPosition ? "rotate(180deg)" : "none",
          marginBottom: isTopPosition ? `-${waveHeight * 0.1}px` : 0
        }}
      >
        {/* Onda principal con curvatura dinámica */}
        <path
          d={`M0,0 C200,${waveHeight * 0.8} 400,${waveHeight} 600,${waveHeight * 0.8} C800,${waveHeight * 0.6} 1000,${waveHeight * 0.3} 1200,0 L1200,${waveHeight} L0,${waveHeight} Z`}
          fill={colorBottom}
          opacity="1"
        />
        
        {/* Onda secundaria para profundidad */}
        <path
          d={`M0,${waveHeight * 0.3} C150,${waveHeight * 0.5} 300,${waveHeight * 0.7} 450,${waveHeight * 0.6} C600,${waveHeight * 0.5} 750,${waveHeight * 0.4} 900,${waveHeight * 0.3} C1050,${waveHeight * 0.2} 1150,${waveHeight * 0.1} 1200,0 L1200,${waveHeight} L0,${waveHeight} Z`}
          fill={colorBottom}
          opacity="0.7"
        />
        
        {/* Detalle de espuma (transición suave) */}
        <path
          d={`M0,${waveHeight * 0.1} C100,${waveHeight * 0.2} 250,${waveHeight * 0.15} 400,${waveHeight * 0.1} C550,${waveHeight * 0.05} 700,0 800,0 C900,0 1000,${waveHeight * 0.05} 1100,${waveHeight * 0.1} L1200,0 L1200,${waveHeight * 0.3} L0,${waveHeight * 0.3} Z`}
          fill={colorTop}
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default CurvedDivider;