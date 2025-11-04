import React from "react";
import { motion } from "framer-motion";
import "./Curriculum.css";
import Contact from "../ContactPage/ContactPage";

export default function Curriculum() {
  return (
    <div className="curriculum-container">
      <motion.h1
        className="curriculum-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Curriculum
      </motion.h1>
      <motion.div
        className="curriculum-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Toddlers</h2>
        <p>
          Pre-school, which comprises Early Childhood Care and Education (ECCE)
          begins at a tender age of 2 years. We are proud to announce that South
          City International School is beginning its first Toddlers Section
          named <strong>Little Explorers</strong>. At this level, the children
          will be introduced to a more structured day with stimulating
          activities, group interactions etc. Children at this age will start
          developing independence and learn through their senses.
        </p>
        <p>
          The curriculum and activities which are in line with the Montessori
          method are designed to help the child to build social, emotional,
          language, cognitive and physical skills. Besides, the child will be
          encouraged to learn, grow and discover as per his developmental
          milestone!
        </p>
      </motion.div>
      <Contact />
    </div>
  );
}
