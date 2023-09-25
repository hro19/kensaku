import { useState, useEffect } from "react";
import FrequentButton from "../../components/common/FrequentButton";
import { useNavigate } from "react-router-dom";
import { getFrequents } from "../../api/frequent/getFrequents";
import { Frequent } from "../../ts/frequent";

function FrequentsListHook() {
  const navigate = useNavigate();
  const [frequents, setFrequents] = useState<Frequent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFrequents();
      if (data !== null) {
        setFrequents(data);
      }
    };

    fetchData(); // 初回のデータ取得

    const interval = setInterval(fetchData, 5000); // 5秒ごとにデータ取得

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされた時にインターバルを解除
    };
  }, []);

  const handleClick = (word: string): void => {
    return navigate(`/?keyword=${word}`, { state: { word } });
  };

  return (
    <>
      {frequents.map((frequent, index) => (
        <FrequentButton
          word={frequent.word}
          key={index}
          getPhotosbyFrequent={handleClick}
        />
      ))}
    </>
  );
}

export default FrequentsListHook;
