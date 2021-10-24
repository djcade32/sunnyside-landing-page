import "./TestimonialsContainer.css";
import Testimonial from "./Testimonial/Testimonial";

import testimonialOnePic from "../../images/image-emily.jpg";
import testimonialTwoPic from "../../images/image-jennie.jpg";
import testimonialThreePic from "../../images/image-thomas.jpg";

function TestimonialsContainer() {
  const testimonialOneParagraph =
    "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.";
  const testimonialOneName = "Emily R.";
  const testimonialOneJob = "Marketing Director";

  const testimonialTwoParagraph =
    "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!";
  const testimonialTwoName = "Jennie F.";
  const testimonialTwoJob = "Business Owner";

  const testimonialThreeParagraph =
    "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.";
  const testimonialThreeName = "Thomas S.";
  const testimonialThreeJob = "Chief Operating Officer";

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-container-header">Client Testimonials</h1>
      <div className="all-testimonials">
        <Testimonial
          img={testimonialOnePic}
          paragraph={testimonialOneParagraph}
          name={testimonialOneName}
          job={testimonialOneJob}
        />
        <Testimonial
          img={testimonialTwoPic}
          paragraph={testimonialTwoParagraph}
          name={testimonialTwoName}
          job={testimonialTwoJob}
        />
        <Testimonial
          img={testimonialThreePic}
          paragraph={testimonialThreeParagraph}
          name={testimonialThreeName}
          job={testimonialThreeJob}
        />
      </div>
    </div>
  );
}

export default TestimonialsContainer;
