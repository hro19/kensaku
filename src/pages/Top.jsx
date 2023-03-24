import { useState } from "react";

import axios from "axios";

import Form from "../components/Form";
import Results from "../components/Results";
import Frequent from "../components/Frequent";

import { useIndexedDB } from "../useIndexedDB";

const Top = () => {
  const [count, setCount] = useIndexedDB("count", 0);
  const [count2, setCount2] = useIndexedDB("count2", 0);

  const increment = () => {
    setCount(count + 1);
  };

　const increment2 = () => {
    setCount2(count2 + 1);
  };

  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // 初期値をuseStateで保持している変数のwordにした。そしてこの変数は外部から代入することが可能としている。
  const searchImages = async (word2 = word) => {
    const pexelsAPIKey =
      "ycuX09ywi56e2xu3hSuMWNDw4vzJAyye7HKi7LYQIoEUz0QnoQC0sE7S";
    const unsplashAPIKey = "UrTEHHwYhYpE612HSg7bfj7KPAHUADyp1YCJsoLEcL8";

    // Pexels APIのリクエスト 最大８０件まで
    const pexelsResponse = await axios.get(
      `https://api.pexels.com/v1/search?query=${word2}&per_page=10`,
      {
        headers: {
          Authorization: pexelsAPIKey,
        },
      }
    );
    const pexelsPhotos = pexelsResponse.data.photos.map((photo) => ({
      id: photo.id,
      source: "pexels",
      url: photo.src.medium,
      link: photo.url,
      photographer: photo.photographer,
      created_at: photo.created_at,
    }));

    // Unsplash APIのリクエスト 最大３０件まで
    const unsplashResponse = await axios.get(
      `https://api.unsplash.com/search/photos?query=${word2}&per_page=10`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashAPIKey}`,
        },
      }
    );
    const unsplashPhotos = unsplashResponse.data.results.map((photo) => ({
      id: photo.id,
      source: "unsplash",
      url: photo.urls.regular,
      link: photo.links.html,
      photographer: photo.user.name,
      created_at: photo.created_at,
    }));

    // PexelsとUnsplashの結果を合わせる
    const mergedPhotos = [...pexelsPhotos, ...unsplashPhotos];

    // 作成日の新しい順にソートする
    mergedPhotos.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    // 結果をセットする
    setPhotos(mergedPhotos);
  };

  const getPhotoData = async (e) => {
    e.preventDefault();
    setLoading(true);
    await searchImages();
    setLoading(false);
  };

  return (
    <>
      <div className="haedtitle">
        <h1>画像検索アプリ</h1>
        <p>
          By <a href="https://unsplash.com/">Unsplash</a>・
          <a href="https://www.pexels.com/ja-jp/">Pexels</a>
        </p>
      </div>
      <Frequent
        setWord={setWord}
        searchImages={searchImages}
        loading={loading}
        setLoading={setLoading}
      />
      <Form setWord={setWord} word={word} getPhotoData={getPhotoData} />
      検索文字:{word}
      <Results photos={photos} loading={loading} />
      <div>
        <p>Count: {count}</p><p>Count2: {count2}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={increment2}>Increment2</button>
      </div>
    </>
  );
};

export default Top;
