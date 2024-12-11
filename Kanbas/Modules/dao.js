//import Database from "../Database/index.js";
import model from "./model.js";
import mongoose from "mongoose";
import courseModel from "../Courses/model.js";

export async function findModulesForCourse(courseId) {
    const course = await courseModel.findById(courseId);
    const modules = await model.find({ course: course.number});
    return modules;
    // const { modules } = Database;
    // return modules.filter((module) => module.course === courseId);
}

export async function createModule(module) {
    const course = await courseModel.findOne({ _id: new mongoose.Types.ObjectId(module.course) });
    module.course = course.number;
    delete module._id;
    const newModule = await model.create(module);
    // (await newModule).course = course.number;
    return newModule;
    // const newModule = {...module, _id: Date.now().toString()};
    // Database.modules = [...Database.modules, newModules];
    // return newModule;
}

export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
    // const { modules } = Database;
    // Database.modules = modules.filter((module) => module._id !== moduleId);
}

export function updateModule(moduleId, moduleUpdates) {
    const objectId = new mongoose.Types.ObjectId(moduleId);
    return model.updateOne({ _id: objectId }, moduleUpdates);
    // const { modules } = Database;
    // const module = modules.find((module) => module._id === moduleId);
    // Object.assign(module, moduleUpdates);
    // return module;
}
  