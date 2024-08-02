import React, { useEffect, useState } from "react";
import {client, urlFor} from '../client';
import './landingpage.scss';

// Contact & Biography Packages
import {PortableText} from '@portabletext/react';

// Gallery Related Packages
import PhotoAlbum from "react-photo-album";
import {getImageDimensions} from '@sanity/asset-utils'

const LandingPage = ({ selectedSection }) => {

  // General variable
  const [loading, setloading] = useState(true);

  // Contact, Biography, Education, & Research
  const [contact, setcontact] = useState([]);
  const [biography, setbiography] = useState([]);
  const [education, seteducation] = useState([]);
  const [research, setresearch] = useState([]);
  
  useEffect(() => {
    const contactQuery = '*[_type == "contact"]';
    const bioQuery = '*[_type == "biograph"]';
    const educationQuery = '*[_type == "education"] | order(order asc)';
    const researchQuery = '*[_type == "research"]';
    
    client
    .fetch(contactQuery)
    .then((contactData) => {
      setcontact(contactData);
    });

    client
    .fetch(bioQuery)
    .then((bioData) => {
      setbiography(bioData);
    });

    client
    .fetch(educationQuery)
    .then((educationData) => {
      seteducation(educationData);
    });

    client
    .fetch(researchQuery)
    .then((researchData) => {
      setresearch(researchData);
    });

  }, [])

  // Lecture part
  const [lecture, setlecture] = useState([]);

  useEffect(() => {
    const query = '*[_type == "lecture"]';

    client
    .fetch(query)
    .then((lectureData) => {
      setlecture(lectureData);
    });

  }, []);

  // Publication part
  const [publication, setpublication] = useState([]);

  useEffect(() => {
    const query = '*[_type == "publication"] | order(order desc)';

    client
    .fetch(query)
    .then((publicationData) => {
      setpublication(publicationData);
      console.log(publicationData);
    });
  }, []);


  // Gallery part
  const [galleryOverview, setgalleryOverview] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client
    .fetch(query)
    .then((galleryOverview) => {
      setgalleryOverview(galleryOverview);
      setloading(false);
    });
  }, [])
  
  const photos = [];

  galleryOverview.map((gallery, index) => {
    const {_, height, width} = getImageDimensions(gallery.image);
    photos.push({
      src: urlFor(gallery.image).url(),
      width: width,
      height: height,
    });
  });

  if (loading) {
    return (
      <></>
    )
  }


  return (
    <div className="profile">
      {selectedSection === 'profile' && (
        <div className="content">
          <section id="profile" className="section">
            <img src={urlFor(contact[0].image)} alt="profile picture" className="profile_image"/>
            <h1 className="name1">{contact[0].name1}</h1>
            <h3 className="name2">{contact[0].name2}</h3>
            <p className="role">{contact[0].role}</p>
            <p className="department">{contact[0].department}</p>
            <p className="email">{contact[0].email}</p>
            <p className="phone">{contact[0].phone}</p>
            
                        
            <div className="p">
              <h2>Education</h2>
              {education.map((school, index) => (
                <p key={index}>{school.degree}, {school.major}, {school.school}, {school.year}</p>
              ))}
              <h2>About me</h2>
              <PortableText value={biography[0].description}/>
              <h2>Research Area</h2>
              <ul>
                {research.map((study, index) => (
                  <li key={index}>{study.name}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
      {selectedSection === 'lecture' && (
        <div className="content">
          <section id="lecture" className="section">
          <ul>
            {lecture.map((lectureClass, index) => (
              <li key={index} className="p">
                <h2>{lectureClass.name}</h2>
                <PortableText value={lectureClass.description} />
              </li>
            ))}
          </ul>
          </section>
        </div>
      )}
      {selectedSection === 'publication' && (
        <div className="content">
          <section id="publication" className="section">
            <h2>Publications</h2>
            <ul className="no_bullet_point">
              {publication.map((article, index) => (
                <li key={index} className="p">
                  {article.author}, <strong>{article.name}</strong>, {article.journal}, {article.year}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
      {selectedSection === 'gallery' && (
        <div className="content">
          <section id="gallery" className="image__gallery section">
            <h2>Gallery</h2>
            <div className="image__gallery">
              <PhotoAlbum 
                photos={photos} 
                layout="masonry" 
                renderPhoto={props => (
                  <a href={props.photo.link} style={props.wrapperStyle} target="_blank" rel="noreferrer">
                    {props.renderDefaultPhoto(props)}
                  </a>
                )}
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default LandingPage;