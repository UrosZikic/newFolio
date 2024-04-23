import SocialMediaLinks from "././socialMediaLinks/SocialMediaLinks";

export default function SocialMedia({ loadAnimation }) {
  return (
    <div className={"socialMediaContainer"}>
      <SocialMediaLinks loadAnimation={loadAnimation} />
      <div
        className={
          "socialMediaVerticalLine" +
          (loadAnimation >= 6 ? " socialMediaExpandLine" : "")
        }
      ></div>
    </div>
  );
}
