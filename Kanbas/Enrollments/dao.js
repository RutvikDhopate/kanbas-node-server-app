import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = { _id: Date.now(), user: userId, course: courseId }
    enrollments.push(newEnrollment)
    return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId) );
    return enrollments.length !== Database.enrollments.length
}

export function findAllEnrollments() {
    return Database.enrollments;
}

export function findEnrollmentsForUser(userId) {
    return Database.enrollments.filter((enrollment) => enrollment.user === userId)
}