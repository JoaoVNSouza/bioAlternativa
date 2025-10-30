import { Instagram, Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { SocialIcon } from "@/components/SocialIcon";
import { BrandCard } from "@/components/BrandCard";
import { LocationMap } from "@/components/LocationMap";
import storeLogo from "@/assets/store-logo.png";

const Index = () => {
  const brands = [
    {
      name: "Lança Perfume",
      description: "Exuberante, Sofisticada e Poderosa",
      instagramUrl: "https://www.instagram.com/lancaperfume/"
    },
    {
      name: "Arezzo",
      description: "Conceito, Qualidade e Design contemporâneo",
      instagramUrl: "https://www.instagram.com/arezzo/"
    },
    {
      name: "Acostamento",
      description: "Cnfiança através de looks autênticos para os seus momentos",
      instagramUrl: "https://www.instagram.com/acostamento/"
    },
    {
      name: "Tommy Hilfiger",
      description: "Moda premium e estilo de vida do mundo",
      instagramUrl: "https://www.instagram.com/tommyhilfiger/"
    },
    {
      name: "Lez a Lez",
      description: "Equilíbrio entre a leveza da praia e a modernidade da cidade",
      instagramUrl: "https://www.instagram.com/lezalez/"
    },
    {
      name: "Melissa",
      description: "Moda, Arte e Design",
      instagramUrl: "https://www.instagram.com/melissaoficial/"
    },
    {
      name: "Gatos & Atos",
      description: "Moda com elegância. Sofisticada como você",
      instagramUrl: "https://www.instagram.com/gatoseatos/"
    },
    {
      name: "Ilicito",
      description: "Liberdade, estilo e frescor ",
      instagramUrl: "http://instagram.com/ilicito_oficial/"
    }


  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-in fade-in duration-700">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <img
              src={storeLogo}
              alt="Logo da Loja"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="text-center mb-8 animate-in fade-in duration-700 delay-150">
          <h1 className="text-3xl sm:text-4xl font-light text-foreground mb-3">
            Alternativa Modas
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Estilo único, qualidade excepcional. Descubra as melhores marcas de moda em um só lugar.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12 animate-in fade-in duration-700 delay-300">
          <SocialIcon
            icon={Instagram}
            href="https://www.instagram.com/alternativamdas/"
            label="Instagram"
          />
          <SocialIcon
            icon={Facebook}
            href="https://www.facebook.com/alternativa.mdas"
            label="Facebook"
          />
          <SocialIcon
            icon={Mail}
            href="mailto:cida_alternativamodas@hotmail.com"
            label="Email"
          />
          <SocialIcon
            icon={FaWhatsapp}
            href="https://api.whatsapp.com/send?phone=5567999775219"
            label="Telefone"
          />
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto mb-12"></div>

        {/* Brand Cards */}
        <div className="space-y-4 animate-in fade-in duration-700 delay-500">
          <h2 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Nossas Marcas
          </h2>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="animate-in fade-in duration-700"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <BrandCard {...brand} />
            </div>
          ))}
        </div>

        {/* Mapa de localização */}
        <div className="mt-12 animate-in fade-in duration-700 delay-700">
          <h2 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Onde nos encontrar
          </h2>
          <LocationMap 
            address="Avenida Mato Grosso 1625, Itaquiraí, Mato Grosso Do Sul"
            className="max-w-xl mx-auto"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-in fade-in duration-700 delay-1000">
          <p className="text-sm text-muted-foreground">
            © 2025 Alternativa Modas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
