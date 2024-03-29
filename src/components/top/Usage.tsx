const TopHero = () => {
  return (
    <div>
      <h2 className="text-lx my-4">このアプリの使い方</h2>
      <div className="hero_container">
        <div className="visual">
          検索窓にキーワードを入力して、searchボタンを押すと、画像検索アプリUnsplashとPexelsの両方から画像を検索してきます
        </div>
        <div className="number">
          気に入った画像はお気に入りとして保存することが出来ます。保存した画像は、【トップページのスライダー】か【お気に入りページ】から確認できます
        </div>
        <div className="expression">
          お気に入りの画像情報データはindexedDBに保存しております、ですのでお使いのデバイスごとに異なる保存データとなることをご了承ください
        </div>
        <div className="other">
          良く検索されるキーワードとしても検索することが出来ます、登録は【ワード追加ページ】から登録できます
        </div>
      </div>
    </div>
  );
};

export default TopHero;
