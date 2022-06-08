import React from 'react';

export default function Chanels() {
  return (
    <div id="chanels" className="cusktom">
      <div className="container">
        <div className="chanels-wrapper">
          <h2>Fanpage D'Queen</h2>
          <div className="fanpage">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdqueen.thiennhien&tabs=600&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="130"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <h2>Youtube Chanel D'Queen</h2>
          <div className="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hGu_K8YGBD8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
