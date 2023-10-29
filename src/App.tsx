import { useCallback, useEffect, useState } from "react";
import "./App.css";
import ArticleCard from "./components/article-card";
import { HTTP } from "./lib/http";
import { Article, ArticlesResponse } from "./types/articles.type";
import { Topic } from "./types/topics.type";
import { AxiosError } from "axios";
import Header from "./components/header";
import { TOPICS } from "./constants/topics.constants";
import DubAutocomplete from "./components/ui/dub-autocomplete";
import DubLoader from "./components/ui/dub-loader";
import DubTextField from "./components/ui/dub-textfield";
import { Language } from "./types/language.type";
import { LANGUAGES } from "./constants/languages.constants";

function App() {
  /*
   * States
   */
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topic, setTopic] = useState<Topic>("apple");
  const [language, setLanguage] = useState<Language>("en");

  const fetchArticles = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await HTTP<ArticlesResponse>({
        method: "GET",
        url: `?q=${topic}&sortBy=publishedAt&language=${language}`,
      });
      setArticles(data.articles);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
    } finally {
      setIsLoading(false);
    }
  }, [topic, language]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <Header />
      <main className="main-section">
        <div className="controls-container">
          {/* <DubAutocomplete
            options={TOPICS}
            value={topic}
            onChange={(e, value) => {
              if (value) {
                setTopic(value);
              }
            }}
            disablePortal
            disableClearable
            renderInput={(params) => <DubTextField {...params} label="Topic" />}
          /> */}
          <DubAutocomplete
            options={LANGUAGES}
            value={language}
            onChange={(e, value) => {
              if (value) {
                setLanguage(value);
              }
            }}
            disablePortal
            disableClearable
            renderInput={(params) => (
              <DubTextField {...params} label="Language" />
            )}
          />
        </div>
        {isLoading ? (
          <div className="loading-container">
            <DubLoader />
          </div>
        ) : (
          <div className="articles-container">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} {...article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
