import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


import '../style/components/Sidebar.css';

export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <aside className="app-sidebar">

            <footer>
            <button type="button" onClick={() => navigate(-1)}>
                <FiArrowLeft size={24} color="#FFF" />
            </button>
            </footer>
        </aside>
    );
}