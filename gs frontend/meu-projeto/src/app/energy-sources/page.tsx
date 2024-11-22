"use client";

import { useEffect, useState } from "react";
import styles from "./EnergySources.module.css";
import logoIMG from "..//img/logo.png";
import Link from 'next/link';
import Image from 'next/image';

type FonteDeEnergia = {
    id: number;
    nome: string;
    tipo: string;
    potencia: number;
    custoMedio: number;
    impactoAmbiental: string;
};

export default function EnergySourcesPage() {
    const [energySources, setEnergySources] = useState<FonteDeEnergia[]>([]);
    const [formData, setFormData] = useState<Omit<FonteDeEnergia, "id">>({
        nome: "",
        tipo: "",
        potencia: 0,
        custoMedio: 0,
        impactoAmbiental: "",
    });
    const [editId, setEditId] = useState<number | null>(null);

    // Buscar todas as fontes de energia
    useEffect(() => {
        const fetchEnergySources = async () => {
            const response = await fetch("/api/energy-sources");
            if (response.ok) {
                const data = await response.json();
                setEnergySources(data.data);
            } else {
                console.error("Erro ao buscar as fontes de energia");
            }
        };
        fetchEnergySources();
    }, []);

    // Cadastrar ou editar uma fonte
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const method = editId ? "PUT" : "POST";
        const endpoint = "/api/energy-sources";

        const body = editId
            ? { id: editId, ...formData } // Inclui o ID no caso de atualização
            : { ...formData }; // Novo cadastro

        try {
            const response = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();

                if (editId) {
                    // Atualiza a lista com a fonte editada
                    setEnergySources((prev) =>
                        prev.map((item) => (item.id === editId ? data.data : item))
                    );
                } else {
                    // Adiciona uma nova fonte à lista
                    setEnergySources((prev) => [...prev, data.data]);
                }

                // Limpa os campos do formulário
                setEditId(null);
                setFormData({
                    nome: "",
                    tipo: "",
                    potencia: 0,
                    custoMedio: 0,
                    impactoAmbiental: "",
                });
            } else {
                console.error("Erro ao salvar ou atualizar a fonte de energia");
            }
        } catch (error) {
            console.error("Erro ao realizar a operação:", error);
        }
    };

    // Deletar uma fonte de energia
    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/energy-sources?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setEnergySources((prev) => prev.filter((item) => item.id !== id));
            } else {
                console.error("Erro ao excluir a fonte de energia");
            }
        } catch (error) {
            console.error("Erro ao excluir:", error);
        }
    };

    // Preparar para editar uma fonte
    const handleEdit = (source: FonteDeEnergia) => {
        setEditId(source.id);
        setFormData({
            nome: source.nome,
            tipo: source.tipo,
            potencia: source.potencia,
            custoMedio: source.custoMedio,
            impactoAmbiental: source.impactoAmbiental,
        });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
            <Image src={logoIMG} alt="Logo" className={styles.logo}  width={90} height={90}/>
                <nav className={styles.nav}>
                <Link href="/"> Home</Link>
                <Link href="/Impacto-Ambiental">Impacto Ambiental</Link>
                <Link href="/Aderir-Energia">Como Aderir à Energia Limpa</Link>
                <Link href="/Contato">Entre em Contato</Link>
                </nav>
            </header>

            <div className={styles.descriptionbox}>
                <p>
                    Esta página permite o gerenciamento de fontes de energia de forma simples e eficiente.
                    Aqui você pode cadastrar, visualizar, editar e excluir informações sobre diferentes
                    fontes de energia, como Solar, Eólica e outras. Nosso objetivo é facilitar a organização
                    e controle das opções energéticas disponíveis, promovendo o uso sustentável e consciente.
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.formcontainer}>
                    <h2>Gerenciamento de Fontes de Energia</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={formData.nome}
                            onChange={(e) =>
                                setFormData({ ...formData, nome: e.target.value })
                            }
                            required
                        />
                        <input
                            type="text"
                            placeholder="Tipo"
                            value={formData.tipo}
                            onChange={(e) =>
                                setFormData({ ...formData, tipo: e.target.value })
                            }
                            required
                        />
                        <input
                            type="number"
                            placeholder="Potência (kW)"
                            value={formData.potencia}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    potencia: parseFloat(e.target.value),
                                })
                            }
                            required
                        />
                        <input
                            type="number"
                            placeholder="Custo Médio"
                            value={formData.custoMedio}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    custoMedio: parseFloat(e.target.value),
                                })
                            }
                            required
                        />
                        <input
                            type="text"
                            placeholder="Impacto Ambiental"
                            value={formData.impactoAmbiental}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    impactoAmbiental: e.target.value,
                                })
                            }
                            required
                        />
                        <button type="submit">
                            {editId ? "Atualizar" : "Cadastrar"}
                        </button>
                    </form>
                </div>

                <div className={styles.listcontainer}>
                    <h2>Fontes cadastradas</h2>
                    <ul>
                        {energySources.map((source) => (
                            <li key={source.id}>
                                <span>
                                    <strong>{source.nome}</strong> - {source.tipo} (
                                    {source.potencia} kW)
                                </span>
                                <div>
                                    <button onClick={() => handleEdit(source)}>
                                        Editar
                                    </button>
                                    <button onClick={() => handleDelete(source.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
