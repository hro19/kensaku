import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import FrequentsList from "../components/FrequentsList";

function FrequentsListHook() {
  const [frequents, setFrequents] = useState([]);

  useEffect(() => {
    fetchFrequents(); // 初回のデータ取得
    const interval = setInterval(fetchFrequents, 5000); // 5秒ごとにデータ取得

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされた時にインターバルを解除
    };
  }, []);

  const fetchFrequents = () => {
    fetch("https://kensaku-express.vercel.app/api/frequent")
      .then((response) => response.json())
      .then((data) => {
        setFrequents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleClick(keyword) {
    window.location.href = `/?keyword=${keyword}`;
  }

  return (
    <>
      {frequents.map((frequent, index) => (
        <FrequentsList
          frequent={frequent}
          key={index}
          handleClick={handleClick}
        ></FrequentsList>
      ))}
    </>
  );
}

export default FrequentsListHook;
