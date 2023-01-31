import { HomePageWrapper, HomePageTitle, BackgroundWrapper } from "./HomePageStyled";
import MainImage from "../../images/desktop_girl_with_dog.svg";
import BgFrame from "../../images/desktop_Frame.svg";
import BgFrameRight from "../../images/desktop_Frame_right.svg";
import Union from "../../images/desktop_Union.svg";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <HomePageTitle>
        Take good care of
        <br/>your small pets
      </HomePageTitle>
      <BackgroundWrapper>
        <img className="main" src={MainImage} alt="girl with dog" />
        <img className="bg" src={BgFrame} alt="" />
        <img className="bgRight" src={BgFrameRight} alt="" />
        <img className="union" src={Union} alt=""/>
      </BackgroundWrapper>
    </HomePageWrapper>
  );
}
