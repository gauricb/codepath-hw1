import "./App.css";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <h1>Restaurants in Amherst</h1>
      <div id="container">
        <Restaurant
          name="Miss Saigon"
          cuisine="Vietnamese"
          img="https://media-cdn.tripadvisor.com/media/photo-s/19/61/50/01/entrance-to-miss-saigon.jpg"
        />
        <Restaurant
          name="Pasta E Basta"
          cuisine="Italian"
          img="https://lh3.googleusercontent.com/p/AF1QipN2zwJuvWwzR_ym6cpLRB_01CUjy3jpkx1Hr2wx=s680-w680-h510"
        />
        <Restaurant
          name="Bistro 63"
          cuisine="American"
          img="https://image.masslive.com/home/mass-media/width960/img/republican/photo/2016/09/30/-1eadbea4bc5768cb.jpg"
        />
        <Restaurant
          name="IYA Sushi"
          cuisine="Japanese"
          img="https://lh3.googleusercontent.com/p/AF1QipOkSKxCdUUBppfrSFAV7lk534qdd9bZDS9AQHWa=s680-w680-h510"
        />
        <Restaurant
          name="Moge Tea"
          cuisine="Boba"
          img="https://lh3.googleusercontent.com/p/AF1QipPoy_0jdDXcyZ8eVNvoUcildACSQ4D_fbZOZBuU=s680-w680-h510"
        />
        <Restaurant
          name="Antonio's Pizza"
          cuisine="Italian"
          img="https://lh3.googleusercontent.com/p/AF1QipOFdTvF2AKE1_MqAnyID3tSR58djIF2yvMSyppf=s680-w680-h510"
        />
        <Restaurant
          name="Mexcalito Taco Bar"
          cuisine="Mexican"
          img="https://lh3.googleusercontent.com/p/AF1QipN4DvScBOo-Ys8vTAssIM4yt4B7-h9h-f1js2jH=s680-w680-h510"
        />
        <Restaurant
          name="Oriental Flavor"
          cuisine="Chinese"
          img="https://lh3.googleusercontent.com/p/AF1QipN6lSIzizFLApnOXAjFxn-lwJGnhorqrWLqg9n4=s680-w680-h510"
        />
        <Restaurant
          name="Lili's Restaurant"
          cuisine="Chinese"
          img="https://lh3.googleusercontent.com/p/AF1QipOW96TiMW1SW4XpmD0ffGRx4KXqPLU2t6k63hOm=s680-w680-h510"
        />
        <Restaurant
          name="Mission Cantina"
          cuisine="Mexican"
          img="https://lh3.googleusercontent.com/p/AF1QipPptEPWZOl7_NZmwzX-F8-dh2U22-WsK2Ftzqcx=s680-w680-h510"
        />
      </div>
    </div>
  );
};

export default App;
