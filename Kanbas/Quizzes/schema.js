// creating a quizz
// publish/unpublish a quizz
// updating a quizz
// deleting a quizz

// can students attempt a quizz
import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "courseModel" },
    title: String,
    description: String,
    points: Number,
    quizType: {
      type: String,
      enum: [
        "Ungraded Quiz",
        "Graded Quiz",
        // "Graded Survey",
        // "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    timeLimit: Number,
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleForEachStudent: Boolean,
    allowMultipleAttempts: Boolean,
    isPublished: Boolean,
    viewResponse: {
      type: String,
      enum: ["Always"],
      default: "Always",
    },
    showCorrectAnswers: {
      type: String,
      enum: ["Immediately", "After all attempts are graded", "After due date"],
      default: "Immediately",
    },
    accessCode: String,
    singleQuestionAtATime: Boolean,
    cameraRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: String,
    availabilityDate: String,
    untilDate: String,
    // TODO - questions
    // questions: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "QuestionsModel" },
    // ],
  },
  { collection: "quizes" }
);
export default QuizSchema;
