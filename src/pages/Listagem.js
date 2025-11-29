import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Listagem() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        api.get('/tarefas').then(response => {
            setTarefas(response.data);
        });
    }, []);

    async function handleDelete(id) {
        const confirm = window.confirm('tem certeza que deseja excluir esta tarefa?');
        if (confirm) {
            await api.delete(`/tarefas/${id}`);
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
        }
    }

    return (
        <div className="listagem-container">
            <h2>Lista de tarefas</h2>
            <table>
                <thead>
                    <tr>
                        <th>título</th>
                        <th>status</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.status}</td>
                            <td className="actions">
                                <Link to={`/editar/${tarefa.id}`} className="btn-edit">Editar</Link>
                                <button onClick={() => handleDelete(tarefa.id)} className="btn-delete">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}