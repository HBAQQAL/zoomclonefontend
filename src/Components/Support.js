import React from "react";
import { FaQuestion, FaQuoteLeft } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "Do you need an account to use Zoom?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },

  {
    id: 2,
    question: "Do I have to have a webcam to join on Meeting?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },
  {
    id: 3,
    question: "Can I record my meeting?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },
  {
    id: 4,
    question: "Where can I find my account owner?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },
  {
    id: 5,
    question: "How do I schedule a meeting?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },
  {
    id: 6,
    question: "How do I schedule a meeting?",
    answer:
      "A Zoom account is not required if you are strictly joining Zoom Meetings as a participant. If someone invites you to their meeting, ",
  },
];

const Support = () => {
  return (
    <div className="container">
      <div className="supportFaq">
        <form>
          <h2>FAQ! Need Help?</h2>
          <div className="faqQuestion">
            <input type="text" placeholder="question ?" />
            <button>Send</button>
          </div>
        </form>
      </div>
      <h3>Frequently asked Questions</h3>
      <div className="questions">
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
              {" "}
              <div>
                {" "}
                <FaQuoteLeft className="ico" /> <h3>{question.question}</h3>{" "}
              </div>
              <h5>{question.answer}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
