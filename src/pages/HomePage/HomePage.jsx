import { HomePageWrapper, HomePageTitle, BackgroundWrapper } from "./HomePageStyled";
import PaddingWrapper from "../../components/baseComponents/PaddingWrapper/PaddingWrapper"
import MainImage from "../../images/desktop_girl_with_dog.png";
import BgFrame from "../../images/desktop_Frame.png";
import BgFrameRight from "../../images/desktop_Frame_right.png";
import Union from "../../images/desktop_Union.png";
import MainImageTablet from "../../images/tablet_girl_with_dog.png";
import FrameTablet from "../../images/tablet_Frame.png";
import MainImageMobile from "../../images/mobile_girl_with_dog.png";
import FrameMobile from "../../images/mobile_Frame.png";

export default function HomePage() {

  return (
    <HomePageWrapper>
      <PaddingWrapper>
        <HomePageTitle>
        Take good care of
          <br />your small pets
      </HomePageTitle>
      <BackgroundWrapper>
        <img className="main" src={MainImage} alt="girl with dog" />
        <img className="bg" src={BgFrame} alt="" />
        <img className="bgRight" src={BgFrameRight} alt="" />
        <img className="union" src={Union} alt="" />
        <img className="mainTablet" src={MainImageTablet} alt="girl with dog"/>
        <img className="bgTablet" src={FrameTablet} alt=""/>
        <img className="mainMobile" src={MainImageMobile} alt="girl with dog"/>
        <img className="bgMobile" src={FrameMobile} alt=""/>
      </BackgroundWrapper>
      </PaddingWrapper>
    </HomePageWrapper>
  );
}
