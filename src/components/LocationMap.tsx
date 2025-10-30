interface LocationMapProps {
  address: string;
  className?: string;
}

export const LocationMap = ({ address, className = "" }: LocationMapProps) => {
  // Usar o embed 'pb' gerado pelo Google Maps para posicionamento exato
  const src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.8962396358008!2d-54.187361!3d-23.475431000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b646f449c6a4f%3A0xd7686b7e9525af5a!2sAv.%20Mato%20Grosso%2C%201625%20-%20Centro%2C%20Itaquira%C3%AD%20-%20MS%2C%2079965-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1761853361944!5m2!1spt-BR!2sus`;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
        <iframe
          title="Localização da loja"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          src={src}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        {address}
      </p>
    </div>
  );
};