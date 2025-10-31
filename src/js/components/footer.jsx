import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>&copy; 2025. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li>
              <a href="/politica-privacidad">Política de Privacidad</a>
            </li>
            <li>
              <a href="/terminos-condiciones">Términos y Condiciones</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>Síguenos:</p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          {/* Se pueden añadir más enlaces a redes sociales */}
        </div>
      </footer>
    </div>
  );
};
