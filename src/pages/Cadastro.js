import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Cadastro() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!titulo) {
            alert('o campo título é obrigatório.');
            return;
        }
        await api.post('/tarefas', { titulo, descricao });
        navigate('/');
    }

    return (
        <div className="form-container">
            <h2>Cadastrar nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <label>Descrição:</label>
                <textarea
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                ></textarea>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}