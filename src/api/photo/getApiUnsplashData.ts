import axios from "axios";
// import { PexelsImagesResults, PexelsPhoto } from "../../../ts/pexels";
import { UnsplashApiSchema } from "../../ts/photo";
import { ApiUnsplashPhoto, ApiUnsplashImagesResults } from "../../ts/unsplash";

const unsplashAPIKey = import.meta.env.VITE_REACT_APP_API_unsplash;

// Unsplash APIのリクエスト 最大３０件まで
export const getApiUnsplashData = async ({
  word,
  num,
}: UnsplashApiSchema): Promise<ApiUnsplashPhoto[] | null> => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${word}&per_page=${num}`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashAPIKey}`,
        },
      }
    );

    const responseData: Awaited<ApiUnsplashImagesResults> = await response.data;
    // console.log(responseData);
    const responseDataPhotos: ApiUnsplashPhoto[] = await responseData.results;

    return responseDataPhotos;
  } catch (error) {
    // エラーハンドリングを行う場合のコード
    console.error("Unsplash APIエラー:", error);
    return null; // またはエラーを適切に処理して返す
  }
};
