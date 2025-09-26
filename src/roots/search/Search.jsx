import { useParams } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { NewsWrapper } from "../news/news/NewsWrapper";

const Search = () => {
  const { id } = useParams();
  return (
    <NewsWrapper>
      <Header />
      <BackGroundColor>
        <div className="container ">
          <div className="news">
            <LargeText color={true}>Search {id}</LargeText>
            <div className="news__card">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </div>
      </BackGroundColor>
      <Footer />
    </NewsWrapper>
  );
};

export default Search;
