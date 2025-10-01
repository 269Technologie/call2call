import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SEO = ({ 
  title = "Call2Call - Votre réceptionniste IA 24/7",
  description = "Soyez serein : Call2Call répond à vos appels 24/7. Votre secrétaire virtuelle prend note, informe vos clients et renforce votre image",
  path = ""
}: SEOProps) => {
  const siteUrl = "https://call2call.fr";
  const fullUrl = path ? `${siteUrl}/${path}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};