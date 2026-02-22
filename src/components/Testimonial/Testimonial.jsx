import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Testimonial.css";

export default function Testimonial() {
  // const reviews = [
  //   {
  //     imgUrl:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-person&psig=AOvVaw2X8lqu5ExALhq9uPtGrYDG&ust=1760860504237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPia3Y-ZrZADFQAAAAAdAAAAABAv",
  //     name: "SAGNIK BANIK",
  //     title: "MD, AJANTA SHOES & IMPAKTO",
  //     review:
  //       "I was thoroughly impressed with our partnership at Taaza TV’s Youngotsav. Youngotsav demonstrated exceptional smoothness in execution innovative activities that appealed to a broad spectrum. The differential branding created a distinctive identity that stood out in the market. The setup was both functional and visually impressive, contributing to an overall memorable experience that effectively engaged participants.",
  //   },
  //   {
  //     imgUrl:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frandom-casual-men-standing&psig=AOvVaw2X8lqu5ExALhq9uPtGrYDG&ust=1760860504237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPia3Y-ZrZADFQAAAAAdAAAAABA1",
  //     name: "Nakul jalan",
  //     title: "vice president, win pens",
  //     review:
  //       "Youngotsav 2025 was a refreshing and impactful campaign for us. Taaza TV’s approach of removing the typical setup barriers ensured maximum student engagement with the best cost per customer reached. The focus was purely on experience and interaction, not sales — which truly elevated our branding.",
  //   },
  //   {
  //     imgUrl:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Findian-man&psig=AOvVaw2X8lqu5ExALhq9uPtGrYDG&ust=1760860504237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPia3Y-ZrZADFQAAAAAdAAAAABBZ",
  //     name: "VINEET DAGA",
  //     title: "Director @ McNROE - WILD STONE",
  //     review:
  //       "Youngotsav was a brilliantly executed college activation, seamlessly blending engaging experiences with strategic branding. The event stood out for its great planning & execution, ensuring high participation from all the colleges where the activity was done. Its unique approach to engage the youth made it a standout campaign, successfully driving mass engagement. A truly well-coordinated and impactful initiative!",
  //   },
  //   {
  //     imgUrl:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenerated.photos%2Ffaces%2Fmale&psig=AOvVaw2X8lqu5ExALhq9uPtGrYDG&ust=1760860504237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPia3Y-ZrZADFQAAAAAdAAAAABBl",
  //     name: "ARVIND SRIVASTAVA",
  //     title: "joint registrar, The Heritage College",
  //     review:
  //       "Fantastic initiative that energized our campus with fun, talent, and excitement. The on-ground management was smooth, and students felt proud seeing themselves on Taaza TV. More than 7,000 students turned for the event at our campus.",
  //   },
  //   {
  //     imgUrl:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frandom-casual-men-standing&psig=AOvVaw2X8lqu5ExALhq9uPtGrYDG&ust=1760860504237000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPia3Y-ZrZADFQAAAAAdAAAAABBy",
  //     name: "DILIP SHAH",
  //     title: "Dean, Bhawanipur College",
  //     review:
  //       "Youngotsav was a wonderfully organized event that brought out the true talent and vibrancy of our students. The telecast on Taaza TV gave them a huge morale boost and a platform to shine. The activities, gifts, and overall execution reflected great planning and showcased youth culture beautifully.",
  //   },
  // ];

  // const [reviewId, setReviewId] = useState(0);

  // const lastReview = () =>
  //   reviews[(reviewId + reviews.length - 1) % reviews.length];
  // const currentReview = () => reviews[reviewId];
  // const nextReview = () => reviews[(reviewId + 1) % reviews.length];

  return (
    // <section className="testimonial-section">
    //   <hr className="section-divider" />
    //   <div className="section-title">Reviews</div>

    //   <div className="image-slider">
    //     <img
    //       src={lastReview().imgUrl}
    //       alt={lastReview().name}
    //       className="review-img small"
    //       onClick={() =>
    //         setReviewId((reviewId + reviews.length - 1) % reviews.length)
    //       }
    //     />
    //     <img
    //       src={currentReview().imgUrl}
    //       alt={currentReview().name}
    //       className="review-img large"
    //     />
    //     <img
    //       src={nextReview().imgUrl}
    //       alt={nextReview().name}
    //       className="review-img small"
    //       onClick={() => setReviewId((reviewId + 1) % reviews.length)}
    //     />
    //   </div>

    //   <div className="reviewer-name">{currentReview().name}</div>
    //   <div className="reviewer-title">{currentReview().title}</div>
    //   <div className="review-text">{currentReview().review}</div>

    //   <button
    //     className="nav-button left"
    //     onClick={() =>
    //       setReviewId((reviewId + reviews.length - 1) % reviews.length)
    //     }
    //   >
    //     <FontAwesomeIcon icon={faChevronLeft} />
    //   </button>

    //   <button
    //     className="nav-button right"
    //     onClick={() => setReviewId((reviewId + 1) % reviews.length)}
    //   >
    //     <FontAwesomeIcon icon={faChevronRight} />
    //   </button>
    // </section>
    <section className="testimonial-section">
      <hr className="section-divider" />
      {/* <div className="section-title">Reviews</div> */}

      {/* YOUTUBE VIDEO SECTION START */}
      <div style={{ width: "100%", maxWidth: "900px", aspectRatio: "16/9" }}>
        <iframe
          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          src="https://youtu.be/n2in7iVy0ro?si=RT6URSqALcK0vs1l"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {/* YOUTUBE VIDEO SECTION END */}
    </section>
  );
}
