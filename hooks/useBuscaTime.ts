import React, { useEffect, useState } from 'react';
interface TimeNBA {
  id: number;
  name: string;
  nickname: string;
  city: string;
  logo: string;
}

export function useBuscaJogo() {
    const [input, setInput] = useState('');
    const [times, setTimes] = useState<TimeNBA[]>([]);
    const [filtrados, setFiltrados] = useState<TimeNBA[]>([]);

    useEffect(() => {
        fetch('https://v2.nba.api-sports.io/teams?league=standard', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f40146d86156a266de3b738a24f2e35f',

        }
        })

        .then((res) => res.json())
        .then((data) => {
            const resultado = data.response.map((item: any): TimeNBA => ({
            id: item.id,
            name: item.name,
            nickname: item.nickname,
            city: item.city,
            logo: item.logo
            }));
            setTimes(resultado);
            setFiltrados(resultado);
        })
        .catch((err) => {
            console.error('Erro ao buscar times:', err);
        });
    }, []);

    const buscar = () => {
        const termo = input.toLowerCase();
        const resultado = times.filter(
        (t) =>
            t.name.toLowerCase().includes(termo) ||
            t.nickname.toLowerCase().includes(termo)
        );
        setFiltrados(resultado);
    }

    return {
        input,
        setInput,
        times,
        setTimes,
        filtrados,
        setFiltrados,
        buscar,
    };
}


