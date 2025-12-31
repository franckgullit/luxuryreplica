import React from "react";
import "./Home.scss";

import watch1 from "../../Assets/rolex-datejust-replica-00001.webp";
import watch2 from "../../Assets/rolex-datejust-replica-00002.webp";
import watch4 from "../../Assets/rolex-datejust-replica-00004.webp";
import watch5 from "../../Assets/rolex-datejust-replica-00005.webp";

import heroimg from "../../Assets/rmbanner.webp";

import breitling from "../../Assets/brlogo.webp";
import rolex from "../../Assets/rolexlogo.webp";
import omega from "../../Assets/omegalogo.webp";
import hublot from "../../Assets/hublogo.webp";
import tagheuer from "../../Assets/taglogo.webp";
import patekphilippe from "../../Assets/pplogo.webp";

function Home() {
  return (
    <>
      {/* NEW ARRIVALS */}
      <section className="home-new-arrivals">
        <div className="home-new-arrivals__header">
          <h1>NEW ARRIVALS</h1>
          <p>hot selling collection</p>
        </div>

        <div className="home-new-arrivals__platform">
          <div className="home-new-arrivals__products">
            <img src={watch1} alt="New arrival watch" />
            <img src={watch2} alt="New arrival watch" />
            <img src={watch4} alt="New arrival watch" />
            <img src={watch5} alt="New arrival watch" />
          </div>

          <a href="/shop" className="home-new-arrivals__cta">
            NEW ARRIVALS
          </a>
        </div>
      </section>

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__brand">WATCH EXPRESSIONS</span>
          <h1>Own Your Dream Watch</h1>
          <p>
            Discover an extensive collection of replica watches spanning various styles, from classic dress watches to sporty chronographs. Whether you admire Rolex’s precision engineering or Audemars Piguet’s avant-garde designs, we perfectly match your taste. Please explore our site and find the timepiece that reflects your unique personality.
          </p>
          <a href="/shop" className="home-hero__cta">Shop Now</a>
        </div>

        <div className="home-hero__image">
          <img src={heroimg} alt="Luxury watch" />
        </div>
      </section>

      {/* FEATURED BRANDS */}
      <section className="featured-brands">
        <h2>Featured Brands</h2>
        <div className="featured-brands__grid">
          <img src={breitling} alt="Breitling" />
          <img src={rolex} alt="Rolex" />
          <img src={omega} alt="Omega" />
          <img src={hublot} alt="Hublot" />
          <img src={tagheuer} alt="Tag Heuer" />
          <img src={patekphilippe} alt="Patek Philippe" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="home-content">
        <h2>The Allure of Replica Watches</h2>
        <p>
          For many watch enthusiasts, owning a luxury timepiece is a lifelong aspiration. However, the high price tags often associated with prestigious brands can be daunting. This is where replica watches come in, offering a compelling alternative. Replica watches meticulously recreate the design and functionality of their original counterparts, allowing you to experience the prestige and craftsmanship without breaking the bank. Imagine yourself sporting a Rolex Submariner on your wrist, its iconic bezel and luminous dial catching the light. Or perhaps you’ve always admired the elegant simplicity of an Omega Speedmaster. With replica watches, these dreams become attainable. You can explore a wide range of styles and designs, from classic dress watches to sporty chronographs and intricate complications.
        </p>

        <h2>Unveiling the World of Watches Replicas</h2>
        <p>
          When diving into the realm of watch replicas, it’s essential to prioritize quality and authenticity. Seek out reputable sellers who source their replica watches from skilled artisans known for their attention to detail. Examine high-resolution images and detailed descriptions to assess the accuracy of the design and finishing touches. Consider the movement used in the watch replica. Some offer reliable quartz movements, while others feature more sophisticated automatic calibers that mimic the smooth sweeping motion of genuine luxury watches. Choose a movement that aligns with your budget and desired level of precision.
        </p>

        <h2>Style and Value: The Replica Watch Advantage</h2>
        <p>
          Replica watches are not merely timekeeping devices; they are expressions of personal style. They allow you to showcase your appreciation for horology and elevate your wardrobe without the hefty price tag associated with genuine luxury watches. Whether you’re drawn to the classic elegance of a Cartier Tank or the sporty versatility of a Breitling Navitimer, there’s a replica watch out there to suit your taste. Enjoy the confidence and satisfaction that comes from wearing a timepiece that reflects your discerning eye for quality and design.
        </p>

        <h2>Experience the Luxury You Deserve</h2>
        <p>
          Exploring the world of watch replicas opens up a world of possibilities. It allows you to experiment with different styles, discover new brands, and build a collection that reflects your unique personality. With careful research and a discerning eye, you can find stunning replica watches that will bring joy and satisfaction for years.
        </p>
      </section>
    </>
  );
}

export default Home;
