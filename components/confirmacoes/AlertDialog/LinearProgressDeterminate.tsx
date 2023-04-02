import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface LinearDeterminateProps {
  time: number;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit"
}

export default function LinearDeterminate({ time, color }: LinearDeterminateProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //timer para iniciar
    const init = setTimeout(() => {

      //timer para atualizar o progresso
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(timer);
            return 100
          }
          return oldProgress + time;
        });

      }, 100);

      //return o clearInterval para limpar o timer de atualizar o progresso
      return () => {
        clearInterval(timer);
        //fim do timer para atualizar o progresso
      }

    //fim do timer para iniciar que é sincronizado com o tempo de aparecimento do alert.
    //ao alterar o tempo abaixo também altere o tempo de aparecimento do alert no css
    //arquivo : ./style.module.scss Container      
    //animation: animacao-sair 1s ease-in-out 0s forwards, animacao-voltar 1s ease-in-out 3s forwards;
    //                                                                                    ↑
    //deve combinar com esse tempo, porem fica a seu critério!
    }, 300)

    //return o clearTimeout para limpar o timer de inicio
    return () => {
      clearTimeout(init);
    }
  }, [time]);

  return (
    <LinearProgress color={color} variant="determinate" value={progress} />
  );
}