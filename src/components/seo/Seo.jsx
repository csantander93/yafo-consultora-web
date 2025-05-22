import { Helmet } from 'react-helmet-async';

const Seo = ({ 
  title = "YAFO Consultora", 
  description = "Descripción por defecto de tus servicios profesionales", 
  keywords = "Consultoría Especializada, Cybersecurity Assessment, Desarrollo de Software", 
  url = window.location.href,
  image = "https://yafoconsultora.com/og-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;