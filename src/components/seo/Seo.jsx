import { Helmet } from 'react-helmet-async';

const Seo = ({ 
  title = "YAFO Consultora | Expertos en Ciberseguridad y Gestión de Riesgos", 
  description = "Servicios profesionales de consultoría en ciberseguridad, gestión de riesgos y desarrollo de software para instituciones financieras", 
  keywords = "Consultoría en Ciberseguridad, Gestión de Riesgos, Soluciones GRC, Continuidad del Negocio, Desarrollo de Software, Seguridad Financiera, Cumplimiento Normativo", 
  url = window.location.href,
  image = "https://yafoconsultora.com/og-image.jpg",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Meta Tags Primarios */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="YAFO Consultora" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="YAFO Consultora" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YAFOConsultora" />
      <meta name="twitter:creator" content="@YAFOConsultora" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* URL Canónica */}
      <link rel="canonical" href={url} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Datos Estructurados */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "YAFO Consultora",
          "url": "https://yafoconsultora.com",
          "logo": "https://yafoconsultora.com/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tu Dirección",
            "addressLocality": "Tu Ciudad",
            "addressRegion": "Tu Provincia",
            "postalCode": "Tu Código Postal",
            "addressCountry": "AR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-XXX-XXXX-XXXX",
            "contactType": "customer service",
            "email": "contacto@yafoconsultora.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/yafo-consultora-srl/posts/?feedView=all",
            "https://twitter.com/YAFOConsultora"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default Seo;