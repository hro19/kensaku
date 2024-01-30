import FrequentButton from "../../components/common/FrequentButton";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { frequentsAtom } from "../../recoil/atoms/frequentsAtom";

function FrequentsListHook() {
  const navigate = useNavigate();
  const [frequents,] = useRecoilState(frequentsAtom);

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
