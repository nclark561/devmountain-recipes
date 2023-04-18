import React from "react";
import salmon from "../../assets/salmon.jpg";
import "./DetailScreen.css";

const DetailScreen = () => {
  return (
    <section className="detail-screen">
      <div
        className="ad-banner"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
          backgroundSize: "cover",
        }}
      >
        <div className="wrd-div">
          <h1 className="banner-title">Pineapple Salmon</h1>
        </div>
      </div>
      <div className="details">
        <div className="ingredients">
          <h2 className="ing">Recipe</h2>
          <div className="rec">
            <p className="ing-p">Prep Time: 15 minutes</p>
            <p className="ing-p">Cook Time: 30 minutes</p>
            <p className="ing-p">Serves: 5</p>
          </div>
          <h2 className="ing">Ingredients</h2>
          <ul className="ing-list">
            <li>asd</li>
            <li>asd</li>
            <li>asdf</li>
            <li>adsf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </div>
        <div className="instructions">
          <h2 className="instr">Instructions</h2>
          <p className="instr-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            libero et metus lacinia convallis non ut ipsum. Sed fringilla non ex
            in volutpat. Morbi ornare enim quis sapien tristique efficitur.
            Curabitur aliquam, velit lobortis pharetra posuere, mi justo mollis
            arcu, a auctor neque metus vel neque. Donec consectetur odio felis,
            eu suscipit velit varius in. Duis eu lobortis erat. Fusce volutpat
            finibus erat non molestie Sed convallis euismod ligula in elementum.
          </p>
          <p className="instr-p">
            Nullam purus purus, finibus vitae dui ut, fringilla dignissim augue.
            Duis vehicula, orci nec suscipit sollicitudin, tortor ipsum dictum
            magna, a consectetur nisi urna eu erat. Quisque mattis eu felis non
            vestibulum. Vivamus justo justo, venenatis quis vehicula at,
            imperdiet ut nibh. Integer non diam ut nunc posuere fermentum.
            Aenean odio arcu, rhoncus quis pharetra vel, iaculis vitae risus.
            Suspendisse efficitur at augue non facilisis. Nulla ut dignissim
            ligula. Ut eleifend lorem sit amet leo porttitor, vitae laoreet leo
            mattis. Curabitur id condimentum purus. Morbi vehicula, arcu sit
            amet molestie commodo, odio mi vestibulum nisi, quis faucibus libero
            est et odio. Donec ac auctor nibh, ac volutpat nunc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
