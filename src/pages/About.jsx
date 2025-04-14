import React from 'react';
import './About.css';
import Pic from '../assets/top1.webp';

const sections = [
  {
    title: "Origin of Putharekulu",
    content: `The word “Putharekulu” comes from two Telugu words: “Putha,” which means coating or cover, and “Reku,” which means sheet or layer. This sweet is made by layering thin rice starch sheets that resemble paper and filling them with a mixture of sugar, jaggery, and ghee. Sometimes, dry fruits are added for extra flavor. It is believed that the sweet originated several centuries ago in Atreyapuram when locals discovered that rice flour, when heated and spread over a hot pan, could be made into delicate sheets that could hold sweet fillings.`,
    img: Pic
  },
  {
    title: "Role of Atreyapuram in Putharekulu’s Popularity",
    content: `While Putharekulu is made in other parts of Andhra Pradesh, Atreyapuram has become synonymous with the sweet due to the villagers’ dedication to maintaining the authenticity and taste of this time-honored delicacy. The village’s unique climate, access to quality ingredients, and skilled artisans have helped establish Atreyapuram as the epicenter of Putharekulu production.`,
    img: Pic
  },
  {
    title: "Cultural Significance",
    content: `Putharekulu is more than just a dessert; it is a symbol of celebration in Andhra culture. This sweet treat is commonly served during festivals, weddings, and other auspicious events. Families often prepare large quantities of Putharekulu during festivals like Sankranti and Diwali, and then distribute it among friends and relatives.`,
    img: Pic
  },
  {
    title: "Traditional Method of Preparation",
    content: (
      <>
        <p>The traditional method of preparing Putharekulu requires exceptional skill and precision:</p>
        <ul>
          <li><strong>Rice Starch Sheets:</strong> A special kind of rice batter is spread thinly on an inverted clay pot that is heated over a fire. As the batter touches the pot, it forms a thin, translucent sheet.</li>
          <li><strong>Filling:</strong> Once the rice sheet is dried, it is carefully peeled off and layered with a mixture of ghee, powdered sugar or jaggery, and dry fruits.</li>
          <li><strong>Rolling:</strong> The sheets are then folded and rolled into cylindrical shapes to create the final sweet.</li>
        </ul>
      </>
    ),
    img: Pic
  },
  {
    title: "Putharekulu’s Growing Fame",
    content: `Originally made only in local households, Putharekulu has gained popularity beyond Andhra Pradesh. Improved packaging and transportation have made Atreyapuram’s Putharekulu available in various parts of India and even abroad. Its unique flavor and delicate texture have led to its popularity in stores, attracting many visitors to Atreyapuram to enjoy its authentic taste.`,
    img: Pic
  },
  {
    title: "Modern Innovations",
    content: `While the traditional Putharekulu continues to be highly regarded, modern variations have emerged to cater to evolving tastes. Some versions include different fillings like chocolate, nuts, and even fruit-flavored sheets. Despite these innovations, Atreyapuram remains steadfast in preserving the traditional recipe that made the sweet famous in the first place.`,
    img: Pic
  },
  {
    title: "Conclusion",
    content: `The history of Putharekulu is intertwined with the cultural heritage of Atreyapuram. This village has become the hallmark of this cherished sweet. From its humble beginnings as a homemade treat to its rise as a popular dessert across India, Putharekulu reflects the culinary artistry and dedication of the people of Atreyapuram. They have preserved a tradition that has continued to captivate taste buds for generations.`,
    img: Pic
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Atreyapuram, a charming village in the East Godavari district of Andhra Pradesh, India, is famous for its traditional sweet delicacy called “Putharekulu.” This wafer-thin sweet, often known as the “Paper Sweet” due to its delicate, paper-like texture, has a unique history deeply connected to the region’s cultural and culinary traditions.
      </p>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`section ${index % 2 === 0 ? 'row' : 'row reverse'}`}
        >
          <div className="section-image">
            <img src={section.img} alt={section.title} />
          </div>
          <div className="section-content">
            <h2>{section.title}</h2>
            <div>{section.content}</div>
          </div>
        </div>
      ))}

      <p className="author">– From Garimella Sarwan Sai</p>
    </div>
  );
};

export default About;