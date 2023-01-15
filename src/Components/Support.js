import React from "react";
import { FaQuestion, FaQuoteLeft } from "react-icons/fa";
import Navbar from "./NavBar";

const questions = [
  {
    id: 1,
    question: "Comment commencer une reunions",
    answer:
      "Pour commencer une reunion il suffit de cliquer sur le button nouvelle reunion dans le tableau de bord et insirer touts les informations sur la reunions ",
  },

  {
    id: 2,
    question: "Comment commencer une reunions",
    answer:
      "Un compte n'est pas requis si vous rejoignez strictement Zoom Meetings en tant que participant. Si quelqu'un vous invite à sa réunion, ",
  },
  {
    id: 3,
    question: "Puis-je enregistrer ma réunion ?",
    answer:
      "Vous pouvez enregister vous reunions en cliquant sur le button enregistrer dans la bare des outiles",
  },
  {
    id: 4,
    question: "Où puis-je trouver mes amis",
    answer:
      "L'interface participants n'est pas encore presente dans l'application mais tu peut envoyer des demandes seulement en envoyant le lien de reunion ",
  },
  {
    id: 5,
    question: "Comment programmer une reunions",
    answer:
      "Pour programmer une reunion il suffit de cliquer sur le button programmer reunion dans le tableau de bord et insirer touts les informations sur la reunions ",
  },
  {
    id: 6,
    question: "Comment inviter quelqu'un dans une reunions",
    answer:
      "Pour inviter quelqu'un dans une reunions il suffit de lui passer le lien de la reunion",
  },
];

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="pages">
        <div className="container">
          <div className="supportFaq">
            <form>
              <h2>FAQ! Besoin d'aide?</h2>
              <div className="faqQuestion">
                <input type="text" placeholder="question ?" />
                <button>Envoyer</button>
              </div>
            </form>
          </div>
          <h3>Questions fréquemment posées</h3>
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
      </div>
    </>
  );
};

export default Support;
