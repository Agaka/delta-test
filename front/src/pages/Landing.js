import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../style/pages/landing.css';

function Landing() {
    return (
    <div id="page-landing">
      <div className="content-wrapper">

        <main>
          <h1>Gerenciamento de alunos</h1>
          <p>Vocês são o futuro e nós mostramos o caminho.</p>
        </main>

        <Link to="/students" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
    );
}

export default Landing;