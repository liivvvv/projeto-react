import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Edicao() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('pendente');

    useEffect(() => {
        api.get(`/tarefas/${id}`).then(response => {
            setTitulo(response.data.titulo);
            setDescricao(response.data.descricao);
            setStatus(response.data.status);
        });
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        await api.put(`/tarefas/${id}`, { titulo, descricao, status });
        navigate('/');
    }

    return (
        <div className="form-container">
            <h2>Editar tarefa</h2>
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
                <label>Status:</label>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="pendente">pendente</option>
                    <option value="em andamento">em andamento</option>
                    <option value="concluída">concluída</option>
                </select>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}